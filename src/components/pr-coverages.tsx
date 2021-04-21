import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo, useState } from "react";
import { useStore } from "../context/report-context";
import { toJS } from "mobx";
import "./pr-coverages.css";

export const PrCoverages = observer(() => {
  const store = useStore();
  const [data, setData] = useState([]);
  const [baseCoverage, setBaseCoverage] = useState([
    {
      statements: undefined,
      conditions: undefined,
      methods: undefined,
      lines: undefined,
    },
  ]);
  const [coverage, setCoverage] = useState([
    {
      statements: undefined,
      conditions: undefined,
      methods: undefined,
      lines: undefined,
    },
  ]);

  const parseCoveragePercentage = (covered: number, all: number) => {
    return ((100 * covered) / all).toFixed(2);
  };
  const reports = toJS(store.prReports);
  let baseMetric;
  let prMetric = [];
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
      const { metric } = JSON.parse(toJS(store.baseReport[0]).message);
      baseMetric = {
        statements: metric.statements.rate,
        conditions: metric.branches.rate,
        methods: metric.methods.rate,
        lines: metric.lines.rate,
      };
    }
    if (store.prReports.length > 0) {
      const { metric, detailMetric, prUrl, branchName } = JSON.parse(
        toJS(store.prReports[2]).message
      );
      prMetric = store.prReports.map((prReport) => {
        const { metric } = JSON.parse(toJS(prReport).message);
        return {
          statements: metric.statements.rate,
          conditions: metric.branches.rate,
          methods: metric.methods.rate,
          lines: metric.lines.rate,
        };
      });

      let detailData = [];
      // if (detailMetric) {
      //   detailData = detailMetric.map((_detailMetric) => {
      //     const {
      //       coveredstatements,
      //       statements,
      //       coveredconditionals,
      //       conditionals,
      //       coveredmethods,
      //       methods,
      //     } = _detailMetric.metrics;

      //     return {
      //       file: _detailMetric.name,
      //       statements:
      //         parseCoveragePercentage(coveredstatements, statements) + "%",
      //       conditions:
      //         parseCoveragePercentage(coveredconditionals, conditionals) + "%",
      //       methods: parseCoveragePercentage(coveredmethods, methods) + "%",
      //       lines: "",
      //     };
      //   });
      // }
      const tableData = [
        {
          file: "All",
          statements: metric.statements.rate,
          conditions: metric.branches.rate,
          methods: metric.methods.rate,
          lines: metric.lines.rate,
        },
      ];
      setData([...tableData, ...detailData]);
    }
  }, [store.prReports.length]);

  return store.prReports.length > 0 || store.baseReport.length > 0 ? (
    // <Table columns={columns} data={data} />

    <div className="pr-coverage">
      <h2>PR Coverages</h2>
      <table className="pr-coverage__table">
        <thead>
          <tr>
            <th>PR</th>
            <th>Statement</th>
            <th>Conditions</th>
            <th>Methods</th>
            <th>Lines</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => {
            return (
              <tr>
                <td>
                  <a key={`${report.prUrl}-${index}`} href={report.prUrl}>
                    {report.branchName}
                  </a>
                </td>
                <td>
                  {(
                    JSON.parse(toJS(report).message).metric.statements.rate -
                    58.8
                  ).toFixed(2) + "%"}
                </td>
                <td>
                  {(
                    JSON.parse(toJS(report).message).metric.branches.rate -
                    51.24
                  ).toFixed(2) + "%"}
                </td>
                <td>
                  {(
                    JSON.parse(toJS(report).message).metric.methods.rate - 62.68
                  ).toFixed(2) + "%"}
                </td>
                <td>
                  {(
                    JSON.parse(toJS(report).message).metric.lines.rate - 65.27
                  ).toFixed(2) + "%"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : null;
});
