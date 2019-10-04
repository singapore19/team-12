import React,{Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
       text: 'Combination chart'
   },
   xAxis: {
       categories: ['Jan', 'Feb', 'Mar', 'April', 'May']
   },
   labels: {
       items: [{
           html: 'Total homeless population',
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
       name: 'Population',
       data: [32, 23, 12, 33, 14]
   }
   ,
   {
           type: 'spline',
           name: 'Average',
           data: [32, 23, 12, 33, 14],
           marker: {
               lineWidth: 2,
               lineColor: Highcharts.getOptions().colors[3],
               fillColor: 'white'
           }
       },
    {

       }],
       center: [100, 80],
       size: 100,
       showInLegend: false,
       dataLabels: {
           enabled: false
       }
   
};

class ExampleCode extends Component{
  render (){
    return (
      <HighchartsReact highcharts={Highcharts} options={options} />
    );
  }
}
export default ExampleCode
