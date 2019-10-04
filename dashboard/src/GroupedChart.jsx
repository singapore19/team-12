import React,{Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class ExampleCode extends Component{
  render (){
    return (
      <HighchartsReact highcharts={Highcharts} options={{
        title: {
             text: `${this.props.title} Rough Sleepers Count Over Time`
         },
         xAxis: {
             categories: ['Jan', 'Feb', 'Mar', 'April', 'May']
         },
         labels: {
             items: []
         },
         series: [{
             type: 'column',
             name: 'Male',
             data: this.props.columnTownMale || [3, 2, 1, 3, 4]
         }, {
             type: 'column',
             name: 'Female',
             data: this.props.columnTownFemale || [2, 3, 5, 7, 6]
         }
         ,
         {
                 type: 'spline',
                 name: 'Average',
                 data: this.props.averageLine || [3, 2.67, 3, 6.33, 3.33],
                 marker: {
                     lineWidth: 2,
                     lineColor: Highcharts.getOptions().colors[3],
                     fillColor: 'white'
                 }
             },
        //   {
        //      type: 'pie',
        //      name: 'Total homeless population',
        //      data: [{
        //          name: 'Male',
        //          y: 13,
        //          color: Highcharts.getOptions().colors[0] // Jane's color
        //      }, {
        //          name: 'Female',
        //          y: 23,
        //          color: Highcharts.getOptions().colors[1] // John's color
        //      }],
        //      center: [100, 80],
        //      size: 100,
        //      showInLegend: false,
        //      dataLabels: {
        //          enabled: false
        //      }
        //  }
        ]
      }} />
    );
  }
}

export default ExampleCode