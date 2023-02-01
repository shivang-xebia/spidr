/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
// import App from './spidr/src/App.vue'
import App from './App.vue'
// import {setIdpData} from '../../spidr-temp/src/idpUtils';
import {setIdpData} from './spidr/src/idpUtils';

import idpData from "./idpData.js";

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
setIdpData(idpData)

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
