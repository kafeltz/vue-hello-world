import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('#app');

app.config.errorHandler = (err) => {
  console.error(err);
}

app.provide('theme', 'white');

console.log(app.config);
