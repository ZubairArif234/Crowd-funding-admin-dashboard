// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, BarElement } from "chart.js";

// ChartJs.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement
// );

// const BarChart = () => {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Sales",
//         data: [99, 84, 53, 25, 62, 33],
//         backgroundColor: "rgba(75,192,192,0.6)",
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 2,
//         with:'5px',
//         barPercentage: 0.6, 
//         borderRadius: 10,
//       },
//     ],
//   };

//   const options = {
//     indexAxis: "x",
//     scales:{
//         x:{
//             grid:{
//                 display:false
//             }
            
//         },
//         y:{
//             min: 10,
//             max:100,
//             ticks:{
//                 stepSize:2,
//                 callback: (value) => '$' + value 
//             },
//             grid:{
//                 borderDash :[5]
//             }
//         }
//     }
//   };

//   return (
//     <div style={{ height: "400px" }}>
//     <Bar data={data} options={options} />
//   </div>
//   );
// };

// export default BarChart;










// import React from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, BarElement } from "chart.js";


// ChartJs.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement
// );
// const BarChart = () => {
//   const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Sales",
//         data: [99, 84, 53, 25, 62, 33],
//         backgroundColor: "rgba(75,192,192,0.6)",
//         borderColor: "rgba(75,192,192,1)",
//         borderWidth: 2,
//         borderRadius: 10,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//       y: {
//         min: 10,
//         max: 100,
//         ticks: {
//           stepSize: 10,
//           callback: (value) => "$" + value,
//         },
//         grid: {
//           borderDash: [5],
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ height: "100%", width: "100%" }}>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;















import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [series] = useState([
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, ],
    },
   
  
  ]);

  const [options] = useState({
    chart: {
      type: "bar",
      height: 700,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ['Mon' , 'Tue' , 'Wed' , 'Thur' , 'Fri' , 'Sat' , 'Sun' ],
    },
   
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  });

  return (
      <div className="linechartmaindiv">
    <div className="topchartbar">

        <p className="dashboardtotaluseronebigtext">Last week</p>
        
    </div>
    <div className="linechartdiv">
        <ReactApexChart height={290} width={'85%'} options={options} series={series} type="bar"  />
        {/* <ReactApexChart options={options} series={series} type="line" height={385} width={'85%'} /> */}

    </div>
</div>
  );
};

export default BarChart;

