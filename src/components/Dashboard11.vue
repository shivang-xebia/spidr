<script>import {GChart} from 'vue-google-charts'
import {onBeforeMount, ref, watch} from "vue";
import _ from "lodash";
import fetchMainDashboardData from "../api/fetchMainDashboardData";

export default {
  components: {
    GChart
  },
  setup() {
    const chartDataLoaded = ref(false);
    const apiData = ref([]);
    const activeCard = ref();
    const chartData = ref([]);
    const projectionMonth = ref('');
    const chartOptions = {
      //chart: {
      title: 'Projected Growth (%YoY)',
      legend: {position: 'top', maxLines: 3},
      colors: ['#570EAA', '#8737E1']
      //}
    }
    const PieChartData = [
      ['Effort', 'Percentage'],
      ['single', 92],
      ['', 8]
    ]
    const PieChartOptions = {
      //chart: {
      pieHole: 0.6,
      pieSliceTextStyle: {
        color: '#8C8C8C',
        fontSize: '15px'
      },
      legend: 'none',
      slices: {
        0: {color: '#8C8C8C', textStyle: {color: 'transparent'}},
        1: {color: '#E6E6E6', textStyle: {color: 'transparent'}}
      },
      chartArea: {
        width: '100px',
        height: '75px'
      }
      //}
    }
    // chartData.value = [
    //   ['','Implied','PyActual'],
    //   ['',34,28],
    // ]
    const chartOptions1 = {
      //chart: {
      //title: 'Implied Market Share',
      legend: {position: 'bottom'},
      colors: ['#A5A5A5', '#F8D887']
      //}
    }
    const barChartData = ref([]);
    // const barChartData  = [
    //   ['X','Y'],
    //   ['Stock Market',50],
    //   ['Inflation',40],
    //   ['Per capita disposable income',30],
    //   ['Pandemic',18],
    //   ['Consumer behaviour',10],
    //   ['Loans consumption',5]
    // ];
    const barChartOptions = {
      //chart: {
      //title: 'Implied Market Share',
      legend: {position: 'bottom'},
      colors: ['#646F79']
      //}
    }
    //const columnChartData = ref([]);
    const columnChartData = [
      ['Year', 'Market Sensing', 'Internal', 'Actual', 'Adjusted Internal'],
      ["Nov21 - Jan22", 31, 36, 24, 32],
      ["Dec21 - Feb22", 21, 25, 16, 20],
      ["Jan22 - Mar22", 8, 18, 11, 14],
      ["Feb22 - Apr22", 17, 27, 9, 16],
      ["Mar22 - May22", 9, 25, 14, 13],
      ["Apr22 - Jun22", 12, 29, 24, 32],
      ["May22 - Jul22", 17, 25, 21, 13],
      ["Jun22 - Aug22", 23, 12, 19, 32],
      ["Jul22 - Sep22", 9, 36, 12, 22],
      ["Aug22 - Oct22", 13, 31, 14, 12],
      ["Sep22 - Nov22", 18, 36, 34, 22],
      ["Oct22 - Dec22", 10, 32, 21, 35],
    ]
    const columnChartOptions = {
      //chart: {
      //title: 'Implied Market Share',
      legend: {position: 'top'},
      colors: ['#570EAA', '#787878', '#C8A5F0', '#F4BE37']
      //}
    }
    onBeforeMount(async () => {
      apiData.value = await fetchMainDashboardData();
      chartDataLoaded.value = true;
      activeCard.value = 0;
    });
    const colorBtnFunc = (n) => {
      if (n <= -20 || n >= 20) {
        return '#FF3429B2';
      } else if (n <= -5 || n >= 5) {
        return '#04BB46B2';
      } else if (-20 <= n <= -6 || 6 <= n <= 20) {
        return '#FFC107B2';
      }
    }
    const activeEl = (ind) => {
      activeCard.value = ind
    }
    // columnChartData.value.push(['Year', 'Market Sensing', 'Internal', 'Actual']);
    watch(activeCard, (value) => {
      //if (value) {
      console.log(value);
      let currentCard = _.get(apiData, `value.${value}.externalKPIs`);
      let currentCardPy = _.get(apiData, `value.${value}.impliedMarketShare`);
      let currentCardHistorical = _.get(apiData, `value.${value}.historical`);
      projectionMonth.value = _.get(apiData, `value.${value}.period`);
      barChartData.value = [
        ['X', 'Y'],
        ['Stock Market', currentCard['Stock market']],
        ['Inflation', currentCard['Inflation']],
        ["Mooddy's", currentCard['Per-capita disposable income']],
        ['Pandemic', currentCard['Pandemic']],
        ['Consumer behaviour', currentCard['Consumer behaviour']],
        ['Loans consumption', currentCard['Loans consumption']]
      ]
      chartData.value = [
        ['', 'Implied', 'PyActual'],
        ['', currentCardPy['implied'], currentCardPy['pyActual']],
      ]
      // columnChartData.value.push(['Year', 'Market Sensing', 'Internal', 'Actual']);
      // currentCardHistorical.data.foreach((history) => {
      //   columnChartData.value.push(history);
      // })
      //columnChartData.value.push(currentCardHistorical.data)
      //console.log(columnChartData.value);
      //}
    });
    return {
      chartData,
      chartOptions,
      chartOptions1,
      barChartData,
      barChartOptions,
      columnChartData,
      columnChartOptions,
      chartDataLoaded,
      apiData,
      PieChartData,
      PieChartOptions,
      colorBtnFunc,
      activeCard,
      activeEl,
      projectionMonth
    }
  }
}
</script>
<template>
  <v-container v-if="!chartDataLoaded">
    <v-progress-circular
        indeterminate
        color="#7823DC"
    ></v-progress-circular>
  </v-container>
  <v-container v-else>
    <!-- <div v-if="chartDataLoaded === false">Loading...</div>  <div v-if="chartDataLoaded === true">Loaded</div> -->


    <v-divider/>
    <v-row class="mt-3">
      <v-col cols="12" sm="3" v-if="!chartDataLoaded && !apiData.length">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
      </v-col>
      <template v-else>
        <v-col cols="12" sm="3" v-for="(data, index) in apiData" :key="data.period">
          <v-card @click="activeEl(index)" :style="(activeCard == index) ? 'border:1px solid #7823DC': '' ">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6"><span style="font-size:12px;color:#9291A5">Projected Period</span>
                  <h6 style="font-weight: bold;">{{ data.period }}</h6></v-col>
                <v-col cols="12" sm="6" class="text-center">
                  <h6 style="font-size:9px;background: #EDEDED">{{ data.lag }} Month Lag</h6>
                </v-col>
              </v-row>
              <v-divider/>
              <v-row>
                <v-col cols="12" sm="6">
                  <h6>Projected Growth (%, YoY)</h6>
                  <div>
                    <div :class="['text-h4']" :style="{'color': colorBtnFunc(data.variance)}">
                      {{ `${data.variance}%` }}
                    </div>
                    <span style="font-size:9px">variance</span>
                    <v-divider/>
                  </div>
                  <v-row>
                    <v-col cols="12" sm="6"><h3>{{ data.marketSensing }}</h3>
                      <div class="text-caption" style="font-size:8px !important;line-height: 8px;">Market Sensing</div>
                    </v-col>
                    <v-col cols="12" sm="6"><h3>{{ data.internal }}</h3>
                      <div class="text-caption" style="font-size:8px !important;line-height: 8px;">Internal Forecast
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="6">
                  <h6 style="font-weight: bold">ML Model Accuracy</h6>
                  <GChart
                      type="PieChart"
                      :data="[
      ['Effort', 'Percentage'],
      ['single', data.modelAccuracy.current],
      ['', 100-data.modelAccuracy.current]
      ]"
                      :options="PieChartOptions"
                      height="50px"
                      width="100px"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8">
                  <v-btn variant="outlined" :color="colorBtnFunc(data.variance)" rounded="pill" class="mt-3">
                         Watch List
                         <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3" v-for="(data, index) in apiData" :key="data.period">
          <v-card @click="activeEl(index)" :style="(activeCard == index) ? 'border:1px solid #7823DC': '' ">
            <v-container>
              <v-row>
                <v-col cols="12" sm="6"><span style="font-size:12px;color:#9291A5">Projected Period</span>
                  <h6 style="font-weight: bold;">{{ data.period }}</h6></v-col>
                <v-col cols="12" sm="6" class="text-center">
                  <h6 style="font-size:9px;background: #EDEDED">{{ data.lag }} Month Lag</h6>
                </v-col>
              </v-row>
              <v-divider/>
              <v-row>
                <v-col cols="12" sm="6">
                  <h6>Projected Growth (%, YoY)</h6>
                  <div>
                    <div :class="['text-h4']" :style="{'color': colorBtnFunc(data.variance)}">
                      {{ `${data.variance}%` }}
                    </div>
                    <span style="font-size:9px">variance</span>
                    <v-divider/>
                  </div>
                  <v-row>
                    <v-col cols="12" sm="6"><h3>{{ data.marketSensing }}</h3>
                      <div class="text-caption" style="font-size:8px !important;line-height: 8px;">Market Sensing</div>
                    </v-col>
                    <v-col cols="12" sm="6"><h3>{{ data.internal }}</h3>
                      <div class="text-caption" style="font-size:8px !important;line-height: 8px;">Internal Forecast
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="6">
                  <h6 style="font-weight: bold">ML Model Accuracy</h6>
                  <GChart
                      type="PieChart"
                      :data="[
      ['Effort', 'Percentage'],
      ['single', data.modelAccuracy.current],
      ['', 100-data.modelAccuracy.current]
      ]"
                      :options="PieChartOptions"
                      height="50px"
                      width="100px"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8">
                  <v-btn variant="outlined" :color="colorBtnFunc(data.variance)" rounded="pill" class="mt-3">
                    Watch List
                    <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </template>    <!-- <v-col cols="12" sm="3">      <v-card>        <v-container>          <v-row>          <v-col cols="12" sm="6">            <span style="font-size:14px">Projected Period</span>            <h5>Apr 23 - Jun 23</h5>          </v-col>          <v-col cols="12" sm="6">            <span style="font-size:14px;background: #EDEDED">4-6 Month Lag</span>          </v-col>        </v-row>        <v-divider/>        <v-row>          <v-col cols="12" sm="6">            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Projected Growth (%, YoY)</span>            <div>              <div class="text-h3" style="color:#FF9900">-13%</div>              <span style="font-size:9px">variance</span>              <v-divider/>            </div>            <v-row>              <v-col cols="12" sm="6">                <h3>-5%</h3>                <div class="text-caption" style="font-size:9px !important">Market Sensing</div>              </v-col>              <v-col cols="12" sm="6">                <h3>8%</h3>                <div class="text-caption" style="font-size:9px !important">Internal Forecast</div>              </v-col>            </v-row>            <v-btn variant="outlined" color="#FFB8B8" rounded="pill" class="mt-3">Reviewed</v-btn>          </v-col>          <v-col cols="12" sm="6">            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Implied Market Share</span>            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />          </v-col>        </v-row>        </v-container>      </v-card>    </v-col>    <v-col cols="12" sm="3">      <v-card>        <v-container>          <v-row>          <v-col cols="12" sm="6">            <span style="font-size:14px">Projected Period</span>            <h5>Jul 23 - Sep 23</h5>          </v-col>          <v-col cols="12" sm="6">            <span style="font-size:14px;background: #EDEDED">7-9 Month Lag</span>          </v-col>        </v-row>        <v-divider/>        <v-row>          <v-col cols="12" sm="6">            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Projected Growth (%, YoY)</span>            <div>              <div class="text-h3" style="color:#04BB46">3%</div>              <span style="font-size:9px">variance</span>              <v-divider/>            </div>            <v-row>              <v-col cols="12" sm="6">                <h3>22%</h3>                <div class="text-caption" style="font-size:9px !important">Market Sensing</div>              </v-col>              <v-col cols="12" sm="6">                <h3>19%</h3>                <div class="text-caption" style="font-size:9px !important">Internal Forecast</div>              </v-col>            </v-row>            <v-btn variant="outlined" color="success" rounded="pill" class="mt-3">No Action</v-btn>          </v-col>          <v-col cols="12" sm="6">            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Implied Market Share</span>            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />          </v-col>        </v-row>        </v-container>      </v-card>    </v-col>    <v-col cols="12" sm="3">      <v-card>        <v-container>          <v-row>          <v-col cols="12" sm="6">            <span style="font-size:14px">Projected Period</span>            <h5>Oct 23 - Dec 23</h5>          </v-col>          <v-col cols="12" sm="6">            <span style="font-size:14px;background: #EDEDED">10-12 Month Lag</span>          </v-col>        </v-row>        <v-divider/>        <v-row>          <v-col cols="12" sm="6">            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Projected Growth (%, YoY)</span>            <div>              <div class="text-h3" style="color:#04BB46">2%</div>              <span style="font-size:9px">variance</span>              <v-divider/>            </div>            <v-row>              <v-col cols="12" sm="6">                <h3>16%</h3>                <div class="text-caption" style="font-size:9px !important">Market Sensing</div>              </v-col>              <v-col cols="12" sm="6">                <h3>14%</h3>                <div class="text-caption" style="font-size:9px !important">Internal Forecast</div>              </v-col>            </v-row>            <v-btn variant="outlined" color="success" rounded="pill" class="mt-3">No Action</v-btn>          </v-col>          <v-col cols="12" sm="6">            <span style="font-family: graphik;font-weight: 500;font-size: 9px;line-height: 18px;">Implied Market Share</span>            <GChart
              type="ColumnChart"
              :data="chartData"
              :options="chartOptions1"
            />          </v-col>        </v-row>        </v-container>      </v-card>    </v-col> -->  </v-row>
    <v-divider class="mb-4"/>
  </v-container>
</template>
