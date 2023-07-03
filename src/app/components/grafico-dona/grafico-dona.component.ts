import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
   ngOnInit(): void {
   }

   // Doughnut
   public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
   public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data: [ 350, 450, 100 ] },
       { data: [ 50, 150, 120 ] },
       { data: [ 250, 130, 70 ] }
     ]
   };
   public doughnutChartType: ChartType = 'doughnut';
 
   // events
   public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }
 
   public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }

}
