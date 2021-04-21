import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "../context/report-context";
import { toJS } from "mobx";
import { Table } from "./table";
import { CoverageTrendChart } from "./coverage-trend";

export const BaseCoverage = observer(() => {
  const [data, setData] = useState([]);
  const [showAllRows, setShowAllRows] = useState(false);
  const store = useStore();
  const parseCoveragePercentage = (covered: number, all: number) => {
    return ((100 * covered) / all).toFixed(2) + "%";
  };
  const handleShowAllRows = () => {
    setShowAllRows(!showAllRows);
  };
  // Number.parseFloat(covered / all);
  const columns = useMemo(
    () => [
      {
        Header: "File",
        accessor: "file",
      },
      {
        Header: "Statements",
        accessor: "statements",
      },
      {
        Header: "Conditions",
        accessor: "conditions",
      },
      {
        Header: "Methods",
        accessor: "methods",
      },
      { Header: "Lines", accessor: "lines" },
    ],
    []
  );
  useEffect(() => {
    if (store.baseReport.length > 0) {
      const { metric, detailMetric, prUrl, branchName } = JSON.parse(
        toJS(store.baseReport[0]).message
      );
      let detailData = [];
      if (detailMetric) {
        detailData = detailMetric.map((_detailMetric) => {
          const {
            coveredstatements,
            statements,
            coveredconditionals,
            conditionals,
            coveredmethods,
            methods,
          } = _detailMetric.metrics;

          return {
            file: _detailMetric.name,
            statements: parseCoveragePercentage(coveredstatements, statements),
            conditions: parseCoveragePercentage(
              coveredconditionals,
              conditionals
            ),
            methods: parseCoveragePercentage(coveredmethods, methods),
            lines: "",
          };
        });
      }
      const tableData = [
        {
          file: "All",
          statements: metric.statements.rate + "%",
          conditions: metric.branches.rate + "%",
          methods: metric.methods.rate + "%",
          lines: metric.lines.rate + "%",
        },
      ];
      setData([...tableData, ...detailData]);
    }
  }, [store.baseReport.length]);

  return store.baseReport.length > 0 ? (
    <div>
      <h2>Develop Coverage</h2>
      <CoverageTrendChart baseReports={toJS(store.baseReport)} />
      <Table
        columns={columns}
        data={data}
        showAllRows={showAllRows}
        handleShowAllRows={handleShowAllRows}
      />
    </div>
  ) : null;
});
