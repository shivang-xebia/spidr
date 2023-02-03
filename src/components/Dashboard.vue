<script>
import { defineComponent } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default defineComponent({
  name: 'Top',
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
            suggestedMax: 30,
          		ticks: {
              	display: false
              },
              grid: {
                  drawBorder: false,
               }
          }
       }
    };
    const optionsimpliedMarketShare = {
      responsive: true,
      plugins: {
        legend: {
            position: 'bottom',
            display:true,
            align:'start',
            fullSize:true,
            labels: {
                usePointStyle: true,
                boxWidth: 10,
                font: {
                        size: 10
                    }
            }
        },
        title: {
          display: true,
          text: 'Implied Market Share',
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
            suggestedMax: 30,
          		ticks: {
              	display: false
              },
              grid: {
                  drawBorder: false,
               }
          }
       },
    };
    const impliedMarketShareData = {
      labels: ['Implied Market Share'],
      datasets: [
        {
          data: [20],
          backgroundColor: '#C8A5F0',
          label:'PY Actual'
        },
        {
          data: [27],
          backgroundColor: '#F8D887',
          label: 'Implied'
        }
      ],
    };
    const historicActualData = {
      labels: ['Oct21 to Dec21','Nov21 to Jan22','Dec21 to Feb22','Jan22 to Mar22','Feb22 to Apr22','Mar22 to May22','Apr22 to Jun22','May22 to Jul22','Jun22 to Aug22','Jul22 to Sep22','Aug22 to Oct22'],
      datasets: [
        {
          data: [31,21,8,13,9,12,-3,13,9,12,-3],
          backgroundColor: '#570EAA',
          label:'Internal'
        },
        {
          data: [36,25,18,15,25,16,8,15,25,16,8],
          backgroundColor: '#8737E1',
          label: 'Forecast'
        },
        {
          data: [24,16,11,11,14,18,12,11,14,18,12],
          backgroundColor: '#B991EB',
          label:'Actual'
        },
      ],
    };
    const optionhistoricActual = {
      responsive: true,
      plugins: {
        legend: {
            position: 'bottom',
            display:true,
            align:'start',
            fullSize:true,
            labels: {
                usePointStyle: true,
                boxWidth: 10,
                font: {
                        size: 10
                    }
            }
        },
        title: {
          display: true,
          text: 'Historic vs Actuals (%, YoY)',
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
            suggestedMax: 30,
          		ticks: {
              	display: false
              },
              grid: {
                  drawBorder: false,
               }
          }
       },
    };
    return { projectedGrowthData, impliedMarketShareData, optionsimpliedMarketShare, optionsprojectedGrowth, historicActualData, optionhistoricActual };
  },
});
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4">
                <v-row>
            <v-col
            cols="12"
            sm="6"
          >
          <BarChart :chartData="projectedGrowthData" :height="195" :width="180" :options="optionsprojectedGrowth"/>
        </v-col>
          <v-col
            cols="12"
            sm="6"
          >
          <BarChart :chartData="impliedMarketShareData" :height="195" :width="180" :options="optionsimpliedMarketShare" />
        </v-col>
          </v-row>
            </v-col>
            <v-col cols="12" sm="8" style="overflow-x:auto; white-space: nowrap;">
              <v-sheet
    class="mx-auto"
    max-width="700"

  >
        <BarChart :chartData="historicActualData" :height="195" :options="optionhistoricActual" />
  </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>