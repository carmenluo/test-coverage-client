import { observer } from "mobx-react-lite";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useStore } from "../context/report-context";
import { toJS } from "mobx";
import { Table } from "./table";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { optionsGraphic } from "../util";
// import "./coverage-trend.css";

const options = {
  scales: {
    xAxes: [
      {
        type: "time",
      },
    ],
  },
  plugins: {
    datalabels: {
      backgroundColor: function (context) {
        return context.dataset.backgroundColor;
      },
      borderRadius: 4,
      color: "white",
      font: {
        weight: "bold",
      },
      formatter: Math.round,
      padding: 6,
    },
  },
};

export function CoverageTrendChart({ baseReports }) {
  const [showChart, setShowChart] = useState(false);
  const reportsDates = baseReports.map((baseReport) => baseReport.createdAt);
  const statementCoverage = baseReports.map(
    (baseReport) => JSON.parse(baseReport.message).metric.statements.rate
  );
  const data = {
    labels: [...reportsDates],
    datasets: [
      {
        label: "Statement Coverage",
        data: [...statementCoverage],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };
  const custom = {
    typeAnalysisConcept: "quantity",
    typeChart: "line",
    typeAnalysis: 1,
  };
  const handleClick = () => {
    setShowChart(!showChart);
  };
  return (
    <>
      <button onClick={handleClick}>
        {showChart ? "Hide Chart" : "Show Chart"}
      </button>
      {showChart && <Line data={data} options={optionsGraphic(custom)} />}
    </>
  );
}
