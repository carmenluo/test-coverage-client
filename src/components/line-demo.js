import React, { Component } from "react";
import "chartjs-plugin-datalabels";
import { Line, Bar } from "react-chartjs-2";
import { optionsGraphic, dataCost, dataQuantity } from "../util.js";

const renderGraphicLine = (custom) => {
  const data =
    custom.typeAnalysisConcept === "quantity"
      ? dataQuantity(custom)
      : dataCost(custom);
  return <Line data={data} options={optionsGraphic(custom)} />;
};

const LineDemo = (props) => {
  const { dataEle, option, handleClick } = props;
  var copy = Object.assign({}, dataEle);
  console.log(">", dataEle.dataHistory.quantity.manual[0].arr);
  let customG;

  if (option === 1) {
    customG = {
      typeAnalysisConcept: "quantity",
      typeChart: "line",
      typeAnalysis: 1,
      dataQuantity: copy.dataHistory.quantity,
      dataConcept: copy.dataConcept,
    };
  } else {
    customG = {
      typeAnalysisConcept: "cost",
      typeChart: "line",
      typeAnalysis: 1,
      dataCost: copy.dataHistory.cost,
      dataConcept: copy.dataConcept,
    };
  }

  return (
    <div>
      <h2>Bar Example</h2>
      <button onClick={handleClick}>Hide Chart</button>
      {renderGraphicLine(customG)}
    </div>
  );
};

export default LineDemo;
