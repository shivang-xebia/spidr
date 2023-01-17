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
                boxWidth: 6
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
                boxWidth: 10
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
          data: [28],
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

    return { projectedGrowthData, impliedMarketShareData, optionsimpliedMarketShare, optionsprojectedGrowth };
  },
});
</script>
<template>
    <v-card>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="pl-3">
                <h5>Projected Period</h5>
                <h3>Nov 22 - Jan 23</h3>
                <span>1-3 Month Lag</span>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="text-center pr-2">
                <span>No Action</span>
                <span style="
width: 15px;
height: 15px;
display: inline-block;
border-radius: 12px;
background: #0BBD1D;"></span>
                
              </div>
              
            </v-col>
          </v-row>
          
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
          </v-card>
</template>