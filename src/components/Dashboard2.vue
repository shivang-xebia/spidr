<script>

import HeatMap from './HeatMap.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Dashboard',
  components: { HeatMap },
setup(){
    const heatMap1 = [[7,9,22,-2,25],[-21,3,30,14,7],[24,-6,11,27,23],[26,4,8,-2,-21]];
    const heatMap2 = [[7,-6,2,-4,23],[4,14,23,23,14],[23,4,14,23,14],[23,4,14,4,23]];
    const heatMap3 = [[14,14,23,4,-32,4,-32],[33,4,25,-23,14,-23,14],[11,23,-10,28,22,28,22],[23,4,14,4,23,4,23]];
    const heatMap4 = [[14,14,23,4,-32,-4,-32],[33,4,25,-23,14,-23,14],[11,23,-10,28,22,28,22],[23,4,14,4,23,4,23]];
    return {heatMap1, heatMap2, heatMap3, heatMap4}
}
})
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-container>
                        <h3>Jan23 - Mar23</h3>
                        <v-divider/>
                        <HeatMap :data="heatMap1"/>
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-container>
                        <h3>Apr23 - Jun23</h3>
                        <v-divider/>
                        <HeatMap :data="heatMap2"/>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-container>
                        <h3>Jul23 - Sep23</h3>
                        <v-divider/>
                        <HeatMap :data="heatMap3"/>
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-container>
                        <h3>Oct23 - Dec23</h3>
                        <v-divider/>
                        <HeatMap :data="heatMap4"/>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
