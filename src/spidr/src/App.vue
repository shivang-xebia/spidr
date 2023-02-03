<template>
  <v-app>
    <v-navigation-drawer
      class="bg-deep-purple"
      theme="dark"
      permanent
      v-if="state.isAuthenticated"
    >
      <div class="pa-0">
        <v-btn style="width: 100%; height:48px">
          KEARNEY
        </v-btn>
      </div>
      <v-list color="transparent" v-for="menu in navConfig" :key="menu.title">
        <v-list-item prepend-icon="mdi-view-dashboard" style="cursor: pointer" :title="menu.title" v-on:click="menu.onClick()"></v-list-item>
      </v-list>


    </v-navigation-drawer>
    <v-app-bar
      color="deep-purple accent-4"
      density="compact"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>{{(navConfig.filter(v => v.key === selectedDashboard)[0]).title}}</v-app-bar-title>

      <v-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn
            v-if="state.isAuthenticated"
            v-bind="props"
            icon="mdi-dots-vertical"
          ></v-btn>
            <v-btn v-if="!state.isAuthenticated" v-on:click="doFederatedSignIn()">Login</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title style="cursor: pointer" v-on:click="handlerUserLogout">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main v-if="state.isAuthenticated">
      <slot />
    </v-main>
    <v-main v-if="!state.isAuthenticated">
      <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-img src="@/assets/images/login-page.png" height="520px"/>
        </v-col>
        <v-col cols="12" sm="6" class="pr-9">
          <div class="text-center mb-4">
            <v-img src="@/assets/images/logo.svg" height="30px"/>
            <h4 class="text-center mt-4">Sign in with Kearney Sensing Solution</h4>
          </div>
          <v-text-field label="Email" variant="outlined"></v-text-field>
          <v-text-field label="Password" variant="outlined"></v-text-field>
          <v-checkbox label="Remember Me"></v-checkbox>
          <v-btn type="submit" block class="mt-2" color="#7823DC" style="color:white">Sign In</v-btn>
          <p class="text-center mt-3 mb-3" style="color:#7823DC">Forgot Password?</p>
          <v-row no-gutters>
            <v-col cols="12" sm="5">
              <v-divider class="mt-4 mb-2"/>
            </v-col>
            <v-col cols="12" sm="2">
              <span class="mt-4 mb-2">OR</span>
            </v-col>
            <v-col cols="12" sm="5" >
              <v-divider class="mt-4 mb-2"/>
            </v-col>
          </v-row>
          <!-- <v-divider class="mt-4 mb-2"/> -->
          <v-btn variant="outlined" color="#7823DC" block class="mt-5">Sign in with SSO</v-btn>  
          <!-- <v-divider class="mt-6"/> -->
          <div class="text-right" style="bottom: 10px;position: absolute;right: 1px;">
            <p>Copyright &#169; Kearney 2023</p>
          </div>     
        </v-col>
      </v-row>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import {getAuthDetails, logout, doFederatedSignIn} from './idpUtils';
export default defineComponent({
  props: {
    navConfig: Array,
    selectedDashboard: String
  },

  setup(){
    const state = ref({
      isAuthenticated: false,
      token: null,
      userPoolId: null
    });
    const setState = (newState) => {
      state.value = newState;
    };

    const userHasAuthenticated = (autheticated, token, usrPoolId) => {
      state.value.isAuthenticated = autheticated;
      if (autheticated){
        state.value.token = token
        state.value.userPoolId = usrPoolId
      } else {
        state.value.token = null
        state.value.userPoolId = null
      }
    };

    const handlerUserLogout = async() => {
      await logout().then((logoutSuccess)=>{
        if (logoutSuccess){
          userHasAuthenticated(false)
        }
      });
    };

    onMounted(() => {
      (async ()=>{
        const {token, userPoolId} = await getAuthDetails();
        userHasAuthenticated(!!token, token, userPoolId)
      })()
    });

    return {state, setState, handlerUserLogout, doFederatedSignIn}
  }
})

// import HelloWorld from '@/components/HelloWorld.vue'
</script>
<style>
@font-face {
  font-family: Graphik;
  src: url('@/assets/fonts/Graphik-Regular.otf');
}
body {
  font-family: Graphik !important;
}

h1 {
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  /* identical to box height, or 114% */
  color: #000000;
}
h2{
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  /* identical to box height, or 150% */
  color: #000000;
}
h3 {
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */
  color: #000000;
}
h4 {
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  /* identical to box height, or 229% */
  color: #000000;
}
h5 {
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  /* identical to box height, or 229% */
  color: #000000;
}
h6 {
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  color: #000000;
}
</style>
