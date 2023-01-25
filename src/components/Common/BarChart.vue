<script>
import { defineComponent } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default defineComponent({
    name: 'BarChart',
    components: { BarChart },
    setup() {
        const projectedGrowthData = {
      labels: ['Projected Growth'],
      options: {
    scales: {
        xAxes: [
            {
                ticks: {
                    display: false
                }
            }
        ]
    }
},
      datasets: [
        {
          data: [20],
          backgroundColor: '#7823DC',
          label:'Market Sensing',
        },
        {
          data: [18],
          backgroundColor: '#8C8C8C',
          label: 'Internal',
        }
      ],
    };
    const optionsprojectedGrowth = {
      responsive: true,
      plugins: {
        legend: {
            position: 'bottom',
            display:true,
            align:'start',
            labels: {
                usePointStyle: true,
                boxWidth: 6,
                font: {
                        size: 10
                    }
            }
        },
        title: {
          display: true,
          text: 'Projected Growth (%, YoY)',
        },
      },
      scales: {
       		x: {
          		ticks: {
              	display: false
              },
              grid: {
                  display: false,
                  drawOnChartArea: false,
                  drawBorder: false,
               }
          },
          y: {
            suggestedMin: 0,
            suggestedMax: 40,
          		ticks: {
              	display: false
              },
              grid: {
                  drawBorder: false,
               }
          }
       }
    };
    return { optionsprojectedGrowth, projectedGrowthData }
    }
})
</script>
<template>
    <BarChart :chartData="projectedGrowthData" :height="195" :width="180" :options="optionsprojectedGrowth"/>
</template>