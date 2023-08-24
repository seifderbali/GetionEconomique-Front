import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ContatDeMarche } from '../../Modules/ContatDeMarche';
import { ContatDeMarcheService } from '../../Services/ContatDeMarcheService/contat-de-marche.service';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss'],
})
export class Widget1Component implements OnInit {
  contrats: ContatDeMarche[] = [];
  chart!: Chart;
  seriesData: any[] = [];

  constructor(private contratDeMarcheService: ContatDeMarcheService) {}

  ngOnInit(): void {


    this.contratDeMarcheService.findContrats().subscribe((data) => {
      this.contrats = data;
      this.initializeChart();
    });
  }

  initializeChart(): void {
    const categories: string[] = this.contrats.map((contrat) => {
      const date = new Date(contrat.dateAcquisition + 'T00:00:00');
      const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
      adjustedDate.setDate(adjustedDate.getDate() + 2); // Add 2 days to adjust for the timezone offset
      return adjustedDate.toISOString().split('T')[0];
    });

    this.seriesData = this.contrats.map((contrat) => ({
      name: contrat.dateAcquisition.toString(),
      y: parseFloat(contrat.montantTTC),
      color: '#ed9e20',
    }));

    this.chart = new Chart({
      chart: {
        type: 'line',
        height: 325,
      },
      title: {
        text: 'Contract',
      },
      xAxis: {
        categories: categories,
      },
      yAxis: {
        title: {
          text: 'Revenue in DT',
        },
      },
      series: [
        {
          type: 'line',
          data: this.seriesData,
        },
      ],
      credits: {
        enabled: false,
      },
    });
  }


}

