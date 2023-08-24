import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { EntiteSI } from '../../Modules/EntiteSI';
import { EntiteSIService } from '../../Services/EntiteSIService/entite-si.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss'],
})
export class Widget2Component implements OnInit {
  entiteSIs: EntiteSI[] = [];
  chart!: Chart;
  budget!: string;
  budgets: number = 0;
  bentite!: number;
  seriesData: any[] = [];

  constructor(private entiteSIService: EntiteSIService) {}

  ngOnInit(): void {
    this.entiteSIService.findAll().subscribe((data) => {
      this.entiteSIs = data;
      this.entiteSIService.AllBudget().subscribe((result: string) => {
        // Process the result here
        this.budget = result;
        this.budgets = Number(this.budget);
        this.initializeChart();
      });
    });
  }

  getbudget(id: number): Observable<number> {
    return this.entiteSIService.findBudgetEntite(id).pipe(
      map((result) => Number(result))
    );
  }

  initializeChart(): void {
    this.entiteSIs.forEach((entiteSI) => {
      this.getbudget(entiteSI.id).subscribe((bentite) => {
        const data = {
          name: entiteSI.name,
          y: (bentite * 100) / this.budgets,
          color: '#ed9e20',
        };
        this.seriesData.push(data);


        this.chart = new Chart({
          chart: {
            type: 'pie',
            height: 325,
          },
          title: {
            text: 'Budgets By Entity SI',
          },
          xAxis: {
            categories: this.entiteSIs.map((entiteSI) => entiteSI.name),
          },
          yAxis: {
            title: {
              text: 'Revenue in %',
            },
          },
          series: [
            {
              type: 'pie',
              data: this.seriesData,
            },
          ],
          credits: {
            enabled: false,
          },
        });
      });
    });
  }
}
