import React,{Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
       text: 'Rough Sleepers Count Over Time'
   },
   xAxis: {
       categories: ['Jan', 'Feb', 'Mar', 'April', 'May']
   },
   labels: {
       items: [{
           html: 'Total Rough Sleepers',
           style: {
               left: '50px',
               top: '18px',
               color: ( // theme
                   Highcharts.defaultOptions.title.style &&
                   Highcharts.defaultOptions.title.style.color
               ) || 'black'
           }
       }]
   },
   series: [{
       type: 'column',
       name: 'Male',
       data: [3, 2, 1, 3, 4]
   }, {
       type: 'column',
       name: 'Female',
       data: [2, 3, 5, 7, 6]
   }, {
       type: 'column',
       name: 'Children',
       data: [4, 3, 3, 9, 0]
   }
   ,
   {
           type: 'spline',
           name: 'Average',
           data: [3, 2.67, 3, 6.33, 3.33],
           marker: {
               lineWidth: 2,
               lineColor: Highcharts.getOptions().colors[3],
               fillColor: 'white'
           }
       },
    {
       type: 'pie',
       name: 'Total homeless population',
       data: [{
           name: 'Male',
           y: 13,
           color: Highcharts.getOptions().colors[0] // Jane's color
       }, {
           name: 'Female',
           y: 23,
           color: Highcharts.getOptions().colors[1] // John's color
       }, {
           name: 'Children',
           y: 19,
           color: Highcharts.getOptions().colors[2] // Joe's color
       }],
       center: [100, 80],
       size: 100,
       showInLegend: false,
       dataLabels: {
           enabled: false
       }
   }]
};

class ExampleCode extends Component{
  render (){
    return (
      <HighchartsReact highcharts={Highcharts} options={options} />
    );
  }
}

export default ExampleCode