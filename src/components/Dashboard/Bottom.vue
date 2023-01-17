<script>
import { defineComponent } from 'vue';
import { BarChart, LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default defineComponent({
  name: 'Top',
  components: { BarChart, LineChart },
  setup() {
    const testData = {
      labels: ['May 22 - Jul 22', 'Jun 22 - Aug 22', 'Jul 22 - Sep 22', 'Aug 22 - Oct 22', 'Sep 21 - Nov 22'],
      datasets: [
        {
          data: [0, -5, 1, 7, 6],
          backgroundColor: ['#000000'],
          label:'Internal'
        },
        {
          data: [36, 25, 19, 20, 25],
          backgroundColor: ['#7823DC'],
          label:'Forecast'
        },
        {
          data: [24, 16, 12, 5, 14],
          backgroundColor: ['#B991EB'],
          label:'Actual'
        }
      ],
    };
    const optionsBar = {
      scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  };
    const data = {
  labels: ['Jan22', 'Feb22', 'Mar22', 'Apr22', 'May22', 'Jun22', 'Jul22','Aug22','Sep22','Oct22','Nov22','Dec22'],
  datasets: [
    {
      label: 'Forecast',
      backgroundColor: '#7823DC',
      data: [29, 31, 28, 34, 29, 17, 28, 18, 17, 22, 36, 35]
    },
    {
      label: 'Actual',
      backgroundColor: '#B991EB',
      data: [25, 27, 21, 28, 26, 13, 22, 16, 13, 13, 18]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

    return { testData, data, options, optionsBar };
  },
});
</script>
<template>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-card>
            <v-row>
            <v-col cols="12" sm="6">
              <div class="pl-3">
                <h5>Projection</h5>
                <h3>Historic vs Actuals(%YoY)</h3>
              </div>
            </v-col>
            </v-row>
            <BarChart :chartData="testData" />
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-card>
            <v-row>
            <v-col cols="12" sm="6">
              <div class="pl-3">
                <h5>Projection</h5>
                <h3>Forecast vs Actuals(%YoY)</h3>
              </div>
            </v-col>
            </v-row>
            <LineChart :chartData="data" :options="options" />
          </v-card>
        </v-col>
      </v-row>
  </template>