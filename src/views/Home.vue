<template>
<v-container>
  <v-row>
    <v-col cols="12" sm="9">
      <h3>Demand Planner Dashboard</h3>
    </v-col>
    <v-col cols="12" sm="3">
      <span>Last refreshed on 30 Nov 2022</span>
    </v-col>
  </v-row>
  <v-card class="mb-3">
  <v-row>
      <v-col
        cols="12"
        sm="1"
      >
        <v-sheet>
          <v-select
          label="2022"
          :items="['2020', '2021', '2022']"
          ></v-select>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="2"
      >
        <v-sheet >
          <v-select
          label="Category"
          :items="['Cat-1', 'Cat-2', 'Cat-3']"
          ></v-select>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="2"
      >
        <v-sheet >
          <v-select
          label="All Products"
          :items="['Prod-1', 'Prod-2', 'Prod-3']"
          ></v-select>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="2"
      >
        <v-sheet >
          <v-select
          label="All Customers"
          :items="['Cus-1', 'Cus-2', 'Cus-3']"
          ></v-select>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="2"
      >
        <v-sheet >
          <v-select
          label="All Regions"
          :items="['Reg-1', 'Reg-2', 'Reg-3']"
          ></v-select>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <v-sheet >
          <v-row>
            <v-col cols="12"
            sm="6">
            <v-switch label="Volume"></v-switch>  
            </v-col>
            <v-col cols="12"
            sm="6" class="text-right">
            <span>Clear Filters</span>  
          </v-col>
          </v-row>
          
          
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
  <Top/>
  <Bottom/>
</v-container>
</template>

<script setup>
  import Top from '@/components/Dashboard/Top.vue'
  import Bottom from '@/components/Dashboard/Bottom.vue'
</script>
<style scoped>
.select {
    width: 60px;
}
</style>
