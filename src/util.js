/**
 * dataCost y dataQuantityt son las que se llaman en la propiedad de data del componente Bar o Line
 * Estos reciven dos parametros que son:
 * optionChart (int)  (1/2)
 * si recive 1 Se procesan las graficas cantidad y año eje Y. tipo y mes eje X, shapeDataChart1()
 * si recive 2 Se procesan las graficas cantidad y mes eje Y , tipo y año eje X. shapeDataChart2()
 * data: data puede llehar con dos tipos de formato dependiendo de la forma en que se quiera interpretar la info
 * para ver los timpos de formato ir: https://codesandbox.io/s/14pnzm2ov7 y en utils.js estan los ejemplos
 */

export const option1 = {
  dataConcept: [
    "Enero",
    "Frebrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octube",
    "Noviembre",
    "Diciembre",
  ],
  dataHistory: {
    quantity: {
      manual: [
        {
          concept: 2018,
          arr: [2, 10, 20, 5, 2, 14, 12, 11, 12, 4, 1, 9],
        },
        {
          concept: 2017,
          arr: [22, 19, 27, 13, 22, 14, 27, 5, 13, 14, 5, 19],
        },
      ],
      automatic: [
        {
          concept: 2018,
          arr: [20, 9, 20, 35, 26, 23, 17, 27, 13, 22, 14, 27],
        },
        {
          concept: 2017,
          arr: [6, 30, 14, 8, 29, 17, 8, 22, 19, 27, 13, 14],
        },
        {
          concept: 2016,
          arr: [2, 9, 17, 10, 5, 20, 17, 15, 1, 4, 15, 19],
        },
      ],
    },

    cost: {
      manual: [
        {
          concept: 2018,
          arr: [120, 390, 170, 130, 120, 340, 70, 150, 230, 340, 100, 190],
        },
        {
          concept: 2017,
          arr: [220, 190, 270, 130, 220, 140, 270, 50, 130, 140, 50, 190],
        },
      ],
      automatic: [
        {
          concept: 2018,
          arr: [200, 90, 200, 350, 260, 230, 170, 270, 130, 220, 140, 270],
        },
        {
          concept: 2017,
          arr: [60, 300, 140, 80, 290, 170, 80, 220, 190, 270, 130, 140],
        },
        {
          concept: 2016,
          arr: [220, 190, 270, 130, 220, 140, 270, 50, 130, 140, 50, 190],
        },
      ],
    },
  },
};

const option2 = {
  dataConcept: ["2016", "2017", "2018"],
  dataHistory: {
    quantity: {
      manual: [
        {
          concept: "enero",
          arr: [0, 22, 12],
        },
        {
          concept: "febrero",
          arr: [0, 19, 39],
        },
        {
          concept: "Marzo",
          arr: [0, 27, 17],
        },
        {
          concept: "Abril",
          arr: [0, 13, 13],
        },
        {
          concept: "Mayo",
          arr: [0, 22, 12],
        },
        {
          concept: "Junio",
          arr: [0, 14, 34],
        },
        {
          concept: "Julio",
          arr: [0, 27, 7],
        },
        {
          concept: "Agosto",
          arr: [0, 5, 15],
        },
        {
          concept: "Septiembre",
          arr: [0, 13, 23],
        },
        {
          concept: "Octubre",
          arr: [0, 14, 34],
        },
        {
          concept: "Noviembre",
          arr: [0, 5, 10],
        },
        {
          concept: "Diciembre",
          arr: [0, 9, 19],
        },
      ],
      automatic: [
        {
          concept: "enero",
          arr: [22, 6, 20],
        },
        {
          concept: "febrero",
          arr: [19, 30, 9],
        },
        {
          concept: "Marzo",
          arr: [27, 14, 20],
        },
        {
          concept: "Abril",
          arr: [13, 8, 35],
        },
        {
          concept: "Mayo",
          arr: [22, 29, 26],
        },
        {
          concept: "Junio",
          arr: [14, 17, 23],
        },
        {
          concept: "Julio",
          arr: [27, 8, 17],
        },
        {
          concept: "Agosto",
          arr: [5, 22, 27],
        },
        {
          concept: "Septiembre",
          arr: [13, 19, 13],
        },
        {
          concept: "Octubre",
          arr: [14, 27, 22],
        },
        {
          concept: "Noviembre",
          arr: [5, 13, 14],
        },
        {
          concept: "Diciembre",
          arr: [19, 14, 27],
        },
      ],
    },
  },
};

const tipeObject = (val) => ({
  label: `${val.tipe}-${val.concept}`,
  fill: false,
  lineTension: 0.1,
  borderWidth: 2,
  hoverBorderWidth: 1,
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  data: val.arr,
  borderColor: val.colorMap,
  backgroundColor: val.colorMap,
  pointBorderColor: val.colorMap,
  pointBackgroundColor: val.colorMap,
  hoverBackgroundColor: val.color,
  hoverBorderColor: val.color,
  stack: val.tipe,
});

const shapeDataChart1 = (data, concept) => {
  const vecData = {
    quantity: [],
    cost: [],
  };
  const colorsMapA = [
    "rgba(75, 152, 282, 1)",
    "rgba(75, 172, 252, 1)",
    "rgba(75, 182, 222, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 162, 282, 1)",
    "rgba(75, 192, 162, 1)",
    "rgba(75, 192, 132, 1)",
    "rgba(75, 192, 102, 1)",
    "rgba(75, 192, 72, 1)",
    "rgba(75, 192, 42, 1)",
    "rgba(75, 192, 12, 1)",
    "rgba(75, 192, 0, 1)",
  ];
  const colorsMapB = [
    "rgba(0, 99, 132, 1)",
    "rgba(30, 99, 132, 1)",
    "rgba(60, 99, 132, 1)",
    "rgba(90, 99, 132, 1)",
    "rgba(120, 99, 132, 1)",
    "rgba(150, 99, 132, 1)",
    "rgba(180, 99, 132, 1)",
    "rgba(210, 99, 132, 1)",
    "rgba(240, 99, 132, 1)",
    "rgba(270, 99, 132, 1)",
    "rgba(300, 99, 132, 1)",
    "rgba(330, 99, 132, 1)",
  ];
  const colorA = "rgba(110, 19, 105, 1)";
  const colorB = "rgba(75, 152, 282, 1)";
  // Se almacenan todos los datos de cantidad
  data.manual.map((val, key) => {
    let manual = [];
    const valA = { ...val, tipe: "M", colorMap: colorsMapA, color: colorA };
    const valB = { ...val, tipe: "M", colorMap: colorsMapB, color: colorB };
    manual = key % 2 === 0 ? tipeObject(valA) : tipeObject(valB);
    return vecData[`${concept}`].push(manual);
  });
  data.automatic.map((val, key) => {
    let automatic = [];
    const valA = { ...val, tipe: "A", colorMap: colorsMapA, color: colorA };
    const valB = { ...val, tipe: "A", colorMap: colorsMapB, color: colorB };
    automatic = key % 2 === 0 ? tipeObject(valA) : tipeObject(valB);
    return vecData[`${concept}`].push(automatic);
  });

  return vecData;
};

const shapeDataChart2 = () => {
  const vecData = {
    quantity: [],
    cost: [],
  };
  const colorsMapA = [
    "rgba(75, 152, 282, 1)",
    "rgba(75, 172, 252, 1)",
    "rgba(75, 182, 222, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(75, 162, 282, 1)",
    "rgba(75, 192, 162, 1)",
    "rgba(75, 192, 132, 1)",
    "rgba(75, 192, 102, 1)",
    "rgba(75, 192, 72, 1)",
    "rgba(75, 192, 42, 1)",
    "rgba(75, 192, 12, 1)",
    "rgba(75, 192, 0, 1)",
  ];
  const colorsMapB = [
    "rgba(0, 99, 132, 1)",
    "rgba(30, 99, 132, 1)",
    "rgba(60, 99, 132, 1)",
    "rgba(90, 99, 132, 1)",
    "rgba(120, 99, 132, 1)",
    "rgba(150, 99, 132, 1)",
    "rgba(180, 99, 132, 1)",
    "rgba(210, 99, 132, 1)",
    "rgba(240, 99, 132, 1)",
    "rgba(270, 99, 132, 1)",
    "rgba(300, 99, 132, 1)",
    "rgba(330, 99, 132, 1)",
  ];
  const colorA = "rgba(110, 19, 105, 1)";
  const colorB = "rgba(75, 152, 282, 1)";
  const { dataHistory } = option2;

  // Se almacenan todos los datos de cantidad
  dataHistory.quantity.manual.map((val, key) => {
    let manual = [];
    const valA = { ...val, tipe: "M", colorMap: colorsMapA, color: colorA };
    const valB = { ...val, tipe: "M", colorMap: colorsMapB, color: colorB };
    manual = key % 2 === 0 ? tipeObject(valA) : tipeObject(valB);
    return vecData.quantity.push(manual);
  });
  dataHistory.quantity.automatic.map((val, key) => {
    let automatic = [];
    const valA = { ...val, tipe: "A", colorMap: colorsMapA, color: colorA };
    const valB = { ...val, tipe: "A", colorMap: colorsMapB, color: colorB };
    automatic = key % 2 === 0 ? tipeObject(valA) : tipeObject(valB);
    return vecData.quantity.push(automatic);
  });

  return vecData;
};

export const dataCost = (custom) => {
  switch (custom.typeAnalysis) {
    case 1: {
      const dataChart = shapeDataChart1(
        custom.dataCost,
        custom.typeAnalysisConcept
      );
      const datasets = dataChart.cost;
      return {
        labels: custom.dataConcept,
        datasets,
      };
    }
    case 2: {
      const dataChart = shapeDataChart2();
      const datasets = dataChart.cost;
      return {
        labels: option2.dataConcept,
        datasets,
      };
    }
    default: {
      return {};
    }
  }
};
export const dataQuantity = (custom) => {
  switch (custom.typeAnalysis) {
    case 1: {
      const dataChart = shapeDataChart1(
        custom.dataQuantity,
        custom.typeAnalysisConcept
      );
      const datasets = dataChart.quantity;
      return {
        labels: custom.dataConcept,
        datasets,
      };
    }
    case 2: {
      const dataChart = shapeDataChart2();
      const datasets = dataChart.quantity;
      return {
        labels: option2.dataConcept,
        datasets,
      };
    }
    default: {
      return {};
    }
  }
};

export const optionsGraphic = (custom) => {
  let ticks;
  let datalabels;
  let labelString = "";
  const graphProperti = { display: true, stacked: false };
  if (custom.typeAnalysisConcept === "quantity") {
    labelString = "quantity";
    ticks = {
      beginAtZero: true,
      userCallback(value) {
        let valueCopy = value;
        valueCopy = valueCopy.toString();
        valueCopy = valueCopy.split(/(?=(?:...)*$)/);
        valueCopy = valueCopy.join(".");
        return `${valueCopy}`;
      },
    };
  } else {
    labelString = "cost";
    ticks = {
      beginAtZero: true,
      userCallback(value) {
        let valueCopy = value;
        valueCopy = valueCopy.toString();
        valueCopy = valueCopy.split(/(?=(?:...)*$)/);
        valueCopy = valueCopy.join(".");
        return `${valueCopy}$`;
      },
    };
  }
  if (custom.typeChart === "bar") {
    graphProperti.display = (ctx) =>
      ctx.datasetIndex === ctx.chart.$totalizer.utmost ||
      ctx.datasetIndex === ctx.chart.$totalizer.utmost - 3;
    graphProperti.stacked = true;
    datalabels = {
      font: { size: "10" },
      align(context) {
        const value = context.dataset.data[context.dataIndex];
        return value > 0 ? "end" : "start";
      },
      anchor(context) {
        const value = context.dataset.data[context.dataIndex];
        return value > 0 ? "end" : "start";
      },
      rotation(context) {
        const value = context.dataset.data[context.dataIndex];
        return value > 0 ? 0 : 180 - 45;
      },
      backgroundColor(context) {
        return context.active ? "green" : "balck";
      },
      formatter: (value, ctx) => (value !== 0 ? ctx.dataset.stack : "0"),
      display: graphProperti.display,
      borderRadius: 4,
      color: "white",
    };
  } else {
    datalabels = false;
  }

  return {
    scales: {
      xAxes: [
        {
          stacked: graphProperti.stacked, // si lo quiero encima del otro true/false
          beforeUpdate: (context) => {
            const totals = {};
            let utmost = 0;
            if (context) {
              const { chart } = context;
              chart.data.datasets.forEach((dataset, datasetIndex) => {
                if (chart.isDatasetVisible(datasetIndex)) {
                  utmost = datasetIndex;
                  dataset.data.forEach((value, index) => {
                    totals[index] = (totals[index] || 0) + value;
                  });
                }
              });

              chart.$totalizer = {
                totals,
                utmost,
              };
            }
          },
          maxBarThickness: 100,
        },
      ],
      yAxes: [
        {
          stacked: graphProperti.stacked,
          position: "left",
          scaleLabel: {
            display: true,
            labelString,
          },
          ticks,
        },
      ],
    },
    tooltips: {
      enabled: true,
      intersect: true,
      mode: "x",
      bodySpacing: 10,
      cornerRadius: 5,
      titleMarginBottom: 10,
    },
    plugins: {
      // Change options for ALL labels of THIS CHART
      offset: 90,
      datalabels,
    },
  };
};
