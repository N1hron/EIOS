import { createApp } from 'vue';
import router from './router/routes';
import App from './App.vue';
import 'normalize.css';
import './style.css';
import './index.css';
import store from './store';
import Popper from 'vue3-popper';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import VueLazyload from 'vue-lazyload';

createApp(App)
    .use(router)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
        },
    })
    .use(store)
    .use(VueLazyload)
    .component('Popper', Popper)
    .mount('#app');
