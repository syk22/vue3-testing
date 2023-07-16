import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
