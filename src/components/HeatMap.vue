<script>
import { defineComponent, ref, onBeforeMount } from 'vue';
import { GChart } from 'vue-google-charts'
import heatMap from '@/api/heatMap';

export default defineComponent({
  props: {
    data: Array
  },
  components: {
    GChart
  },
  
  setup(props){
    const colorBtn = ref('2');
    const wrapper = ref('wrapper');
    const dialog = ref(false);
    const apiData = ref([]);
    const dataLoaded = ref(false);

    for(let i=0;i<=props.data.length;i++){
      if(props.data[i] && props.data[i].length ==5){
        wrapper.value = 'wrapper';
      } else if(props.data[i] && props.data[i].length ==7){
        wrapper.value = 'wrapper7';
      }
    }
    const colorBtnFunc = (n) => {
      if(n <= -20 || n >= 20) {
        return '#FF3429B2';
      } else if (n <= -5 || n >= 5) {
        return '#04BB46B2';
      } else if(-20 <= n <= -6 || 6 <= n <= 20){
        return '#FFC107B2';
      }
    }

    const openChart = () => {
      dialog.value = true
    }

    const chartData = [
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

      const chartOptions= {
        //chart: {
          //title: 'Implied Market Share',
          legend: { position: 'top' },
          colors: ['#570EAA', '#787878', '#C8A5F0', '#F4BE37']
        //}
      }
      onBeforeMount(async () => {
      apiData.value = await heatMap();
      dataLoaded.value = true;
      console.log(apiData.value);
      });

  return { colorBtnFunc, colorBtn, wrapper, openChart, dialog, chartData, chartOptions, dataLoaded, apiData }
  }
})
  

</script>
<template>
  <v-row v-if="!dataLoaded">
    <v-progress-circular
        indeterminate
        color="#7823DC"
    ></v-progress-circular>
    </v-row>
    <v-row v-else>
    <v-col cols="12" sm="6" v-for="data in apiData">
      <v-card>
        <v-container>
          <h3>{{data.period }}</h3>
          <v-divider class="mb-2"/>
          <div :class="wrapper">
            <div class="box" v-for="value in data.identifiers.x">
              {{ value }}
            </div>
            <template v-for="num in data.data">
              <div class="box" v-for="n in num" @click="openChart"><v-btn  :color="colorBtnFunc(n)" width="70px">{{ n+'%' }}</v-btn></div>
          </template>
          </div>        
        </v-container>
      </v-card>
    </v-col>
  </v-row>
  <!-- <div :class="wrapper">
    <template v-if="!dataLoaded">
  </template>
  <template v-else-if="apiData">
    <template v-for="num in apiData">
      {{ num.data }}
      <div class="box" v-for="n in num" @click="openChart"><v-btn  :color="colorBtnFunc(n)">{{ n+'%' }}</v-btn></div>
    </template>
  </template>
  </div> -->
<!-- <v-row v-for="num in data">
<v-col v-for="n in num" cols="6" sm="2" style="padding-right:4px;padding-left:4px;">
<v-btn width="70px" height="46px" :color="colorBtnFunc(n)">{{ n+'%' }}</v-btn>
</v-col>
</v-row> -->
  <v-dialog
      v-model="dialog"
      max-width="590px"
    >
      <v-card>
        <GChart
              type="LineChart"
              :data="chartData"
              :options="chartOptions"
            />
      </v-card>
    </v-dialog>
</template>
<style scoped>
.wrapper {
    width: 400px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(5, 80px);
  }
  .wrapper7 {
    width: 410px;
    display: grid;
    grid-gap: 9px;
    grid-template-columns: repeat(7, 57px);
  }
</style>