import React,{Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
       text: 'National Rough Sleepers Count'
   },
   xAxis: {
       categories: ['Jan', 'Feb', 'Mar', 'April', 'May']
   },
   labels: {
       items: []
   },
   series: [{
       type: 'column',
       name: 'Population',
       data: [320, 203, 102, 303, 104]
   }
   ,
   {
           type: 'spline',
           name: 'Trend',
           data: [320, 203, 102, 303, 104],
           marker: {
               lineWidth: 2,
               lineColor: Highcharts.getOptions().colors[3],
               fillColor: 'white'
           }
       },
    ],
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
