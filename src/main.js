import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";

import { InputNumber } from "element-ui";

Vue.component(InputNumber.name, InputNumber);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
