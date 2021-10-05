import { createApp } from 'vue';

import BaseSearch from './components/UI/BaseSearch.vue';
import BaseContainer from './components/UI/BaseContainer.vue';
import App from './App.vue';
import store from './store/index.js';
const app = createApp(App);
app.use(store);

app.component('base-search', BaseSearch);
app.component('base-container', BaseContainer);
app.mount('#app');
