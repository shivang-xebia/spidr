<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  setup() {
    const chartData = [
        ['Year','Market Sensing','Internal'],
        ['2022',32,25],
      ]
      const chartOptions= {
        //chart: {
          title: 'Projected Growth (%YoY)',
          legend: { position: 'top', maxLines: 3 },
          colors: ['#570EAA', '#8737E1']
        //}
      }
      const chartOptions1= {
        //chart: {
          //title: 'Implied Market Share',
          legend: { position: 'bottom' },
          colors: ['#A5A5A5', '#F8D887']
        //}
      }
      return { chartData, chartOptions, chartOptions1 }
  }
}
</script>
<template>
<v-container>
  <v-row>
    <v-col cols="12" sm="3">
      <v-card>
        <v-row>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 15px;line-height: 18px;">Projected Growth (%, YoY)</span>
            <div>
              <div class="text-h3" style="color:#FF9900">8%</div>
              <div class="text-subtitle-2">variance</div>
              <v-divider/>
            </div>
            <v-row>
              <v-col cols="12" sm="6">
                <h3>18%</h3>
                <div class="text-caption">Market Sensing</div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3>10%</h3>
                <div class="text-caption">Internal Forecast</div>
              </v-col>
            </v-row>
            <v-btn variant="outlined" color="warning" rounded="pill">Watch List</v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 15px;line-height: 18px;">Implied Market Share</span>
            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3">
      <v-card>
        <v-row>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 15px;line-height: 18px;">Projected Growth (%, YoY)</span>
            <div>
              <div class="text-h3" style="color:#DC3545">-23%</div>
              <div class="text-subtitle-2">variance</div>
              <v-divider/>
            </div>
            <v-row>
              <v-col cols="12" sm="6">
                <h3>-5%</h3>
                <div class="text-caption">Market Sensing</div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3>18%</h3>
                <div class="text-caption">Internal Forecast</div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 15px;line-height: 18px;">Implied Market Share</span>
            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3">
      <v-card>
        <v-row>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 15px;line-height: 18px;">Projected Growth (%, YoY)</span>
            <div>
              <div class="text-h3" style="color:#00BF2E">3%</div>
              <div class="text-subtitle-2">variance</div>
              <v-divider/>
            </div>
            <v-row>
              <v-col cols="12" sm="6">
                <h3>22%</h3>
                <div class="text-caption">Market Sensing</div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3>19%</h3>
                <div class="text-caption">Internal Forecast</div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 15px;line-height: 18px;">Implied Market Share</span>
            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3">
      <v-card>
        <v-row>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 15px;line-height: 18px;">Projected Growth (%, YoY)</span>
            <div>
              <div class="text-h3" style="color:#00BF2E">2%</div>
              <div class="text-subtitle-2">variance</div>
              <v-divider/>
            </div>
            <v-row>
              <v-col cols="12" sm="6">
                <h3>16%</h3>
                <div class="text-caption">Market Sensing</div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3>14%</h3>
                <div class="text-caption">Internal Forecast</div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 15px;line-height: 18px;">Implied Market Share</span>
            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>
