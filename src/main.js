import Vue from "vue";
import App from "./App.vue";
import ProgressBar from 'vuejs-progress-bar'
// import Cloudinary, { CldVideo } from "cloudinary-vue";
Vue.use(ProgressBar)
// Vue.use(Cloudinary, {
//   configuration: { cloudName: "picturecloud7" },
//   components: [ CldVideo ]
// });
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
