import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import VueQuillEditor from 'vue-quill-editor';
import './registerServiceWorker';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import '@/assets/vendor/font-awesome/css/font-awesome.min.css';
import '@/assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Lightbox from '@morioh/v-lightbox'
import '@morioh/v-lightbox/dist/lightbox.css';
import 'quill/dist/quill.core.css'; // import styles
import 'quill/dist/quill.snow.css'; // for snow theme
import 'quill/dist/quill.bubble.css'; // for bubble theme

Vue.config.productionTip = false;
Vue.use(Lightbox);
Vue.use(VueQuillEditor);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
