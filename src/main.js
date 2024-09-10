// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import BootstrapVue3 from 'bootstrap-vue-3'

// Import Bootstrap and BootstrapVue3
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.css'

// Register your custom components
import FoodItem from './components/FoodItem.vue'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.component('food-item', FoodItem)
app.mount('#app')
