import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { BiometricManager, ClosingConfirmation, useWebAppMainButton, VueTelegramPlugin } from 'vue-tg'

import App from './App.vue'

const app = createApp(App)

app.use(VueTelegramPlugin);
app.use(useWebAppMainButton);
app.component('ClosingConfirmation', ClosingConfirmation);
app.component('BiometricManager', BiometricManager);
app.use(createPinia())

app.mount('#app')
