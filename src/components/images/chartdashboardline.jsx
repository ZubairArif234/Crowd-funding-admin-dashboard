


import { Line } from "react-chartjs-2"


import { Chart as ChartJs , LineElement, CategoryScale,LinearScale,PointElement } from "chart.js"

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const Linechart = () =>{
    const data = {
        labels:['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec'],
        datasets:[
            {
            data:[8 , 3 ,5,6,2,5,3,3,3,9,4,5,7],
            backgroundColor :'transparent',
            borderColor:'#6100B3',
            pontBorderColor : 'transparent',
            pointBorderWidth :'',


            tension : 0.4

        },
            {
            data:[2 , 5 ,9,4,4,8,5,6,3,2,8,5,9],
            backgroundColor :'transparent',
            borderColor:'#F4C316',
            pontBorderColor : 'transparent',
            pointBorderWidth :'',


            tension : 0.4

        },
    ]

    }

    const options = {
        plugin:{
            legend: false,
            shadow: {
                color: 'rgba(0, 0, 0, 0.3)',
                blur: 10,
                offsetX: 3,
                offsetY: 3
              }
        },
        scales:{
            x:{
                grid:{
                    display:false
                }

            },
            y:{
                min: 2,
                max:10,
                ticks:{
                    stepSize:2,
                    callback: (value) => value + 'k'
                },
                grid:{
                    borderDash :[5]
                }
            }
        }
    }
    return(
        // <div style={{ height: "400px" }}>
        <div  className="linechartmaindiv">
            <div className="topchartbar">

            <p className="dashboardtotaluseronebigtext">Statistics</p>
            <div className="dashboardchartlinebelogings">
                <p className="dashboardchartlinebelogingsone"><span className="dashboardchartlinebelogingsonespan" >yu</span> Income</p>
                <p className="dashboardchartlinebelogingsone"><span className="dashboardchartlinebelogingsonespan" style={{backgroundColor:'#F4C316'}}>yu</span> Spending</p>
            </div>
            </div>
            <div className="linechartdiv">

          <Line  data={data} options={options} />
            </div>
        </div>
    //   </div>
    )
}

export default Linechart


// import React, { useState } from "react";
// import ReactApexChart from "react-apexcharts";

// const Linechart = () => {
//     const [series] = useState([
//         {
//             name: "Income",
//             data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 20, 24, 73],
//             color: '#6100B3',
//         },
//         {
//             name: "Spending",
//             data: [20, 51, 15, 71, 89, 32, 29, 11, 48, 29, 24, 73],
//             color: '#F4C316',
//         },
//     ]);

//     const [options] = useState({
//         chart: {
//             height: 350,
//             width: 200,
//             type: "line",
//             zoom: {
//                 enabled: false,
//             },
//         },
//         series: series,
//         stroke: {
//             curve: "smooth", // Set the curve type to smooth for tension
//             width: 4,
//         },
//         dataLabels: {
//             enabled: false,
//         },
       
//         grid: {
//             row: {
//                 colors: ["#f3f3f3", "transparent"],
//                 opacity: 0.5,
//             },
//         },
//         xaxis: {
//             categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         },
//     });

//     return (
//         // <div id="chart">
//         //   <ReactApexChart options={options} series={series} type="line" height={520} width={610} />
//         <div className="linechartmaindiv">
//             <div className="topchartbar">

//                 <p className="dashboardtotaluseronebigtext">Statistics</p>
//                 <div className="dashboardchartlinebelogings">
//                     <p className="dashboardchartlinebelogingsone"><span className="dashboardchartlinebelogingsonespan" style={{ backgroundColor: '#6100B3' }}>yu</span> Income</p>
//                     <p className="dashboardchartlinebelogingsone"><span className="dashboardchartlinebelogingsonespan" style={{ backgroundColor: '#9b0037' }}>yu</span> Spending</p>
//                 </div>
//             </div>
//             <div className="linechartdiv">
//                 <ReactApexChart options={options} series={series} type="line" height={385} width={'85%'} />

//             </div>
//         </div>
//     //  </div> 
//   );
// };

// export default Linechart;

