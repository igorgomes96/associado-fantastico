import { Injectable } from '@angular/core';
import * as Chartist from 'chartist';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor() { }

  startAnimationForLineChart(chart: { on: (arg0: string, arg1: (data: any) => void) => void; }) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };

  startAnimationForBarChart(chart: { on: (arg0: string, arg1: (data: any) => void) => void; }) {
    chart.on('draw', this.onDrawBarChart);
  };

  startAnimationForHorizontalBarChart(elementSelector: string, labels: string[], series: number[][]) {
    const chart = new Chartist.Bar(elementSelector, { labels, series },
    {
      reverseData: true,
      horizontalBars: true,
      axisX: {
        onlyInteger: true,
        offset: 40,
      },
      axisY: {
        offset: 128,
        labelInterpolationFnc: (label) => {
          return this.abreviaNome(label);
        }
      },
      height: labels.length * 36 + 'px',
    });
    chart.on('draw', this.onDrawBarChart);
  };

  private abreviaNome(nome: string) {
    const nomes = nome.split(' ');
    if (nomes.length <= 1) {
      return nome;
    }
    return `${nomes[0]} ${this.primeirasLetras(nomes.slice(1, nomes.length - 1))} ${nomes[nomes.length - 1]}`;
  }

  private primeirasLetras(nomes: string[]): string {
    return nomes.map(n => `${n.charAt(0)}.`).join(' ');
  }


  private onDrawBarChart(data: any) {
    let seq = 0;
    const delays = 80;
    const durations = 500;
    if (data.type === 'bar') {
      seq++;
      data.element.animate({
        opacity: {
          begin: seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'ease'
        }
      });
    }
  }
}
