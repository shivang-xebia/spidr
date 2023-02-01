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
      Wolla
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
