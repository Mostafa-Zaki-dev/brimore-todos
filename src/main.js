import { createApp } from "vue";
import App from "./App.vue";
import "./App.css";
import store from "./vuex store/vuex";
import Antd from "ant-design-vue";

const app = createApp(App);

// APP USAGE
app.use(store);
app.use(Antd);

// APP Mount
app.mount("#app");
