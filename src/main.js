import { createApp } from "vue";
import App from "./App.vue";
import "./App.css";
import store from "./vuex store/vuex";

const app = createApp(App);

// APP USAGE
app.use(store);

// APP Mount
app.mount("#app");
