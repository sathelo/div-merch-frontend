import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/styles/index.less";

// Import styles element-plus
import "element-plus/dist/index.css";

createApp(App).use(router).mount("#app");
