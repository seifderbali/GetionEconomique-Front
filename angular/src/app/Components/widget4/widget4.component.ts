import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Fournisseur } from "../../Modules/Fournisseur";
import { FournisseurService } from "../../Services/FournisseurService/fournisseur.service";
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-widget4',
  templateUrl: './widget4.component.html',
  styleUrls: ['./widget4.component.scss']
})
export class Widget4Component implements OnInit {
  fournisseurs: Fournisseur[] = [];
  budgetfournisseurs: number[] = [];

  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top Suppliers'
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodarant',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [

        ]
      }
    ],
    credits: {
      enabled: false
    }
  });

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.fournisseurService.findAll().subscribe(data => {
      this.fournisseurs = data;
      this.findFourniseur();
    });
  }

  findFourniseur(): void {
    const requests = this.fournisseurs.map(fournisseur => this.fournisseurService.findBudget(fournisseur.id));

    forkJoin(requests).subscribe((results: string[]) => {
      this.budgetfournisseurs = results.map(result => Number(result));
      this.sortFourniseur();
      this.displayFourniseur();
    });
  }

  sortFourniseur(): void {
    const combinedArray = this.fournisseurs.map((fournisseur, index) => ({
      name: fournisseur.name,
      y: this.budgetfournisseurs[index]
    }));

    combinedArray.sort((a, b) => b.y - a.y);

    this.chart.ref$.subscribe(chart => {
      chart.xAxis[0].setCategories(combinedArray.map(item => item.name));
      chart.series[0].setData(combinedArray.map(item => item.y));
    });
  }

  displayFourniseur(): void {
    for (let i = 0; i < this.fournisseurs.length; i++) {
      console.log(this.fournisseurs[i].name + ' - ' + this.budgetfournisseurs[i]);
    }
  }
}
