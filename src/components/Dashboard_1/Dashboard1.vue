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
      const barChartData = [
        ['X','Y'],
        ['Stock Market',30],
        ['Inflation',23],
        ['Per capita disposable income',20],
        ['Pandemic',15],
        ['Consumer behaviour',7],
        ['Loans consumption',5]
      ]
      const barChartOptions= {
        //chart: {
          //title: 'Implied Market Share',
          legend: { position: 'bottom' },
          colors: ['#646F79']
        //}
      }

      const columnChartData = [
      ['Year', 'Market Sensing', 'Internal', 'Actual', 'Adjusted Internal'],
      ['Nov21 - Jan22',31,36,24,32],
      ['Dec21 - Feb22',21,25,16,20],
      ['Jan22 - Mar22',8,18,11,14],
      ['Feb22 - Apr22',17,27,9,16],
      ['Mar22 - May22',9,25,14,13],
      ['Apr22 - Jun22',12,29,24,32],
      ['May22 - Jul22',17,25,21,13],
      ['Jun22 - Aug22',23,12,19,32],
      ['Jul22 - Sep22',9,36,12,22],
      ['Aug22 - Oct22',13,31,14,12],
      ['Sep22 - Nov22',18,36,34,22],
      ['Oct22 - Dec22',10,32,21,35],
      ]

      const columnChartOptions= {
        //chart: {
          //title: 'Implied Market Share',
          legend: { position: 'top' },
          colors: ['#570EAA', '#787878', '#C8A5F0', '#F4BE37']
        //}
      }
      return { chartData, chartOptions, chartOptions1, barChartData, barChartOptions, columnChartData, columnChartOptions}
  }
}
</script>
<template>
<v-container>
  <v-card class="mb-3">
  <v-row>
    <v-col cols="12" sm="2">
      <v-select
          label="2023"
          :items="['2020', '2021', '2022','2023']"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="2">
      <v-select
          label="All Categories"
          :items="['Cat1', 'Cat2', 'Cat3']"
          ></v-select>
    </v-col>
    <v-col cols="12" sm="2">
      <v-select
          label="All Customers"
          :items="['Cus1', 'Cus2', 'Cus3']"
          ></v-select>
    </v-col>
    <v-col cols="12" sm="2">
      <v-select
          label="Geography"
          :items="['Geo1', 'Geo2', 'Geo3']"
          ></v-select>
    </v-col>
    <v-col cols="12" sm="4">
      <v-switch label="Volume"></v-switch>
    </v-col>
  </v-row>
</v-card>
<v-row no-gutters>
  <v-col cols="12" md="3">
    <v-checkbox
            label="1-3 months (Default)"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
  </v-col>
  <v-col cols="12" md="3">
    <v-checkbox
            label="4-6 months"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
  </v-col>
  <v-col cols="12" md="3">
    <v-checkbox
            label="6-9 months"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
  </v-col>
  <v-col cols="12" md="3">
    <v-checkbox
            label="10-12 months"
            color="red"
            value="red"
            hide-details
          ></v-checkbox>
  </v-col>
</v-row>

<v-divider/>
<v-divider/>

  <v-row>
    <v-col cols="12" sm="3">
      <v-card>
        <v-container>
          <v-row>
          <v-col cols="12" sm="6">
            <span style="font-size:14px">Projected Period</span>
            <h5>Jan 23 - Mar 23</h5>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-size:14px;background: #EDEDED">1-3 Month Lag</span>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Projected Growth (%, YoY)</span>
            <div>
              <div class="text-h3" style="color:#FF9900">8%</div>
              <span style="font-size:9px">variance</span>
              <v-divider/>
            </div>
            <v-row>
              <v-col cols="12" sm="6">
                <h3>18%</h3>
                <div class="text-caption" style="font-size:9px !important">Market Sensing</div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3>10%</h3>
                <div class="text-caption" style="font-size:9px !important">Internal Forecast</div>
              </v-col>
            </v-row>
            <v-btn variant="outlined" color="warning" rounded="pill" class="mt-3">Watch List</v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Implied Market Share</span>
            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />
          </v-col>
        </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3">
      <v-card>
        <v-container>
          <v-row>
          <v-col cols="12" sm="6">
            <span style="font-size:14px">Projected Period</span>
            <h5>Apr 23 - Jun 23</h5>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-size:14px;background: #EDEDED">4-6 Month Lag</span>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Projected Growth (%, YoY)</span>
            <div>
              <div class="text-h3" style="color:#FF9900">-13%</div>
              <span style="font-size:9px">variance</span>
              <v-divider/>
            </div>
            <v-row>
              <v-col cols="12" sm="6">
                <h3>-5%</h3>
                <div class="text-caption" style="font-size:9px !important">Market Sensing</div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3>8%</h3>
                <div class="text-caption" style="font-size:9px !important">Internal Forecast</div>
              </v-col>
            </v-row>
            <v-btn variant="outlined" color="#FFB8B8" rounded="pill" class="mt-3">Reviewed</v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Implied Market Share</span>
            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />
          </v-col>
        </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3">
      <v-card>
        <v-container>
          <v-row>
          <v-col cols="12" sm="6">
            <span style="font-size:14px">Projected Period</span>
            <h5>Jul 23 - Sep 23</h5>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-size:14px;background: #EDEDED">7-9 Month Lag</span>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Projected Growth (%, YoY)</span>
            <div>
              <div class="text-h3" style="color:#04BB46">3%</div>
              <span style="font-size:9px">variance</span>
              <v-divider/>
            </div>
            <v-row>
              <v-col cols="12" sm="6">
                <h3>22%</h3>
                <div class="text-caption" style="font-size:9px !important">Market Sensing</div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3>19%</h3>
                <div class="text-caption" style="font-size:9px !important">Internal Forecast</div>
              </v-col>
            </v-row>
            <v-btn variant="outlined" color="success" rounded="pill" class="mt-3">No Action</v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Implied Market Share</span>
            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />
          </v-col>
        </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3">
      <v-card>
        <v-container>
          <v-row>
          <v-col cols="12" sm="6">
            <span style="font-size:14px">Projected Period</span>
            <h5>Oct 23 - Dec 23</h5>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-size:14px;background: #EDEDED">10-12 Month Lag</span>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Projected Growth (%, YoY)</span>
            <div>
              <div class="text-h3" style="color:#04BB46">2%</div>
              <span style="font-size:9px">variance</span>
              <v-divider/>
            </div>
            <v-row>
              <v-col cols="12" sm="6">
                <h3>16%</h3>
                <div class="text-caption" style="font-size:9px !important">Market Sensing</div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3>14%</h3>
                <div class="text-caption" style="font-size:9px !important">Internal Forecast</div>
              </v-col>
            </v-row>
            <v-btn variant="outlined" color="success" rounded="pill" class="mt-3">No Action</v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Implied Market Share</span>
            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />
          </v-col>
        </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="4">
      <v-card>
        <v-container>
          <h4>More details for Apr 23 - Jun 23 </h4>
          <p>External KPIs</p>
          <GChart
            type="BarChart"
            :data="barChartData"
            :options="barChartOptions"
          />
      </v-container>
    </v-card>
    </v-col>
    <v-col cols="12" sm="8">
      <v-card>
        <v-container>
          <h3>Historic vs Actuals (%, YoY)</h3>
          <GChart
            type="ColumnChart"
            :data="columnChartData"
            :options="columnChartOptions"
          />
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>
