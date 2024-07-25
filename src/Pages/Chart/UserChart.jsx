import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {Link} from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const RegisteredUserChart = () => {
  const options = {
    chart: {
      type: "spline",
      inverted: true,
      responsive: "standard", 
    },
    title: {
      text: "Registered User",
      align: "left",
    },
    subtitle: {
      text: "According to the Email Registration",
      align: "left",
    },
    xAxis: {
      reversed: false,
      title: {
        enabled: true,
        text: "Users",
      },
      labels: {
        format: "{value} ",
      },
      accessibility: {
        rangeDescription: "Range: 50 to 1000.",
      },
      maxPadding: 0.05,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: "Year",
      },
      labels: {
        format: "{value}",
      },
      accessibility: {
        rangeDescription: "Range: 2015 to 2024.",
      },
      lineWidth: 2,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.x} : {point.y}",
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Total Users",
        data: [
          [0, 15],
          [10, -50],
          [20, -56.5],
          [30, -46.5],
          [40, -22.1],
          [50, -2.5],
          [60, -27.7],
          [70, -55.7],
          [80, -76.5],
        ],
      },
    ],
  };
  const options1 = {
    chart: {
      type: "spline",
      inverted: true,
      responsive: "standard", 
    },
    title: {
      text: "Email Verification",
      align: "left",
    },
    subtitle: {
      text: "According to the Email Registration",
      align: "left",
    },
    xAxis: {
      reversed: false,
      title: {
        enabled: true,
        text: "Users",
      },
      labels: {
        format: "{value} ",
      },
      accessibility: {
        rangeDescription: "Range: 50 to 1000.",
      },
      maxPadding: 0.05,
      showLastLabel: true,
    },
    yAxis: {
      title: {
        text: "Year",
      },
      labels: {
        format: "{value}",
      },
      accessibility: {
        rangeDescription: "Range: 2015 to 2024.",
      },
      lineWidth: 2,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "<b>{series.name}</b><br/>",
      pointFormat: "{point.x} : {point.y}",
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: "Total Users",
        data: [
          [0, 15],
          [10, -50],
          [20, -56.5],
          [30, -46.5],
          [40, -22.1],
          [50, -2.5],
          [60, -27.7],
          [70, -55.7],
          [80, -76.5],
        ],
      },
    ],
  };

  return (<>
    {/* <Link to="/"><button className="mx-20 my-20 flex justify-start gap-1 items-center bg-slate-20 hover:shadow-gray shadow-black p-2 hover:shadow-xl shadow-sm "> <FaArrowLeft /> Back </button></Link> */}
    <div className="mt-10    grid xs:grid-cols-2  grid-cols-1 md:grid-cols-2 gap-2 bg-light-white">
      <div className="">
        <HighchartsReact highcharts={Highcharts} options={options1} />
      </div>
      <div className="">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div></>
  );
};

export default RegisteredUserChart;
