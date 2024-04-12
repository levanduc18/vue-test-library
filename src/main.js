import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { VueButton } from "dlv-button";
import "dlv-button/dist/dlv-button.css";

Vue.config.productionTip = false;

Vue.component("vue-button", VueButton);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
