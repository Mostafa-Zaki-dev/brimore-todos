import { createApp } from "vue";
import App from "./App.vue";
import "./App.css";
import store from "./vuex store/vuex";
import Antd from "ant-design-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

// APP USAGE
app.use(store);
app.use(Antd);

//Registering Icons
library.add(faCheckSquare, faTrashAlt, faEdit);
app.component("fai", FontAwesomeIcon);

// APP Mount
app.mount("#app");
