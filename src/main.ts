import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/routes";

import "@/assets/styles/index.less";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
