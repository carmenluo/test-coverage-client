import { useLocalStore, observer } from "mobx-react-lite";
import React, { FC, useEffect, useMemo, useState } from "react";
import { getMostRecentReport } from "./actions/reports";
import { Table } from "./components/table";
import { useObserver } from "mobx-react";

import { BaseCoverage } from "./components/base-coverage";
import { useStore } from "./context/report-context";
import { PrCoverages } from "./components/pr-coverages";
import { option1 } from "./util.js";
import LineDemo from "./components/line-demo";

const App: FC = () => {
  const [data, setData] = useState([]);

  const store = useStore();
  // const parseCoveragePercentage = (covered, all) =>
  //   Number.parseFloat(covered / all).toFixed(2);
  useEffect(() => {
    store.loadBaseReport();
    store.loadPrReports();
  }, [store]);
  // useEffect(() => {
  //   const mostRecentReport = await getMostRecentReport();

  //   const { metric, detailMetric, prUrl, branchName } = JSON.parse(
  //     mostRecentReport.message
  //   );
  //   let detailData = [];
  //   if (detailMetric) {
  //     detailData = detailMetric.map((_detailMetric) => {
  //       const {
  //         coveredstatements,
  //         statements,
  //         coveredconditionals,
  //         conditionals,
  //         coveredmethods,
  //         methods,
  //       } = _detailMetric.metrics;

  //       return {
  //         file: _detailMetric.name,
  //         statements: parseCoveragePercentage(coveredstatements, statements),
  //         conditions: parseCoveragePercentage(
  //           coveredconditionals,
  //           conditionals
  //         ),
  //         methods: parseCoveragePercentage(coveredmethods, methods),
  //         lines: "",
  //       };
  //     });
  //   }
  //   const tableData = [
  //     {
  //       file: "All",
  //       statements: metric.statements.rate,
  //       conditions: metric.branches.rate,
  //       methods: metric.methods.rate,
  //       lines: metric.lines.rate,
  //     },
  //   ];
  //   setData([...tableData, ...detailData]);
  // }, []);

  return (
    <div>
      <div className="test-coverage__header">BioRender Test Coverage</div>
      <div className="test-coverage__base-coverage">
        {/* <LineDemo key={Math.random()} dataEle={option1} option={1} /> */}
        <BaseCoverage />
        {/* <Table columns={columns} data={data} /> */}
      </div>
      <div className="test-coverage__trends"></div>
      <div className="test-coverage__pr-coverages">
        <PrCoverages />
        {/* <Table columns={columns} data={data} /> */}
      </div>
    </div>
  );
};

export default App;
