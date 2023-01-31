<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    data: Array
  },
  
  setup(){
    const colorBtn = ref('2');
    const colorBtnFunc = (n) => {
      if(n <= -20 || n >= 20) {
        return '#FF3429B2';
      } else if (n <= -5 || n >= 5) {
        return '#04BB46B2';
      } else if(-20 <= n <= -6 || 6 <= n <= 20){
        return '#FFC107B2';
      }
      
  }

  return { colorBtnFunc, colorBtn }
  }
})
  

</script>
<template>
<v-row v-for="num in data">
<v-col v-for="n in num" cols="6" sm="2" style="padding-right:4px;padding-left:4px;">
<v-btn width="70px" height="46px" :color="colorBtnFunc(n)">{{ n+'%' }}</v-btn>
</v-col>
</v-row>
</template>