<template>
  <Parent :navConfig="navConfig" :selectedDashboard="selectedDashboard">
    <v-sheet
      id="scrolling-techniques-6"
      class="overflow-y-auto">
      <v-container>
        <Dashboard1 v-if="selectedDashboard === MAIN_DASHBOARD"/>
        <HeatMap v-if="selectedDashboard === HEAT_MAP_DASHBOARD"/>
      </v-container>
    </v-sheet>
  </Parent>
</template>

<script>
import Dashboard1 from '@/components/Dashboard1.vue'
import HeatMap from '@/components/Dashboard2.vue'
import Parent from './spidr/src/App.vue'
// import Parent from '../../spidr-temp/src/App.vue'
import { defineComponent, ref } from 'vue';

const MAIN_DASHBOARD = 'MAIN_DASHBOARD';
const HEAT_MAP_DASHBOARD = 'HEAT_MAP';

export default defineComponent({
  setup(){
    const selectedDashboard = ref(MAIN_DASHBOARD)
    const navConfig = ref([{
      title: "Main Dashboard",
      key: MAIN_DASHBOARD,
      icon: null,
      onClick(){
        selectedDashboard.value = MAIN_DASHBOARD
      }
    }, {
      title: "Heat-Map View",
      key: HEAT_MAP_DASHBOARD,
      icon: null,
      onClick(){
        selectedDashboard.value = HEAT_MAP_DASHBOARD
      }
    }]);

    return {navConfig, MAIN_DASHBOARD, HEAT_MAP_DASHBOARD, selectedDashboard}
  },
  components: {
    Parent,
    Dashboard1,
    HeatMap
  }
})
</script>
