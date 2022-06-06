
import { createPinia } from "pinia";

import { defineCustomElement } from "./utils";

// import { defineCustomElement } from "vue";
import MyElement from "./MyElement.ce.vue";

import { routerBuilder } from "./router";
import { i18nBuilder } from "./i18n";

customElements.define(
  "myelement-window",
  defineCustomElement(MyElement, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // plugins: [router],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    pluginBuilders: [routerBuilder, i18nBuilder, createPinia],
    props: ["lang"],
  })
);

// element.u;

// const element = defineCustomElement(MyElement);
// customElements.define("myelement-window", element);

/*




import { createApp } from "vue";
import { createPinia } from "pinia";

import router from "./router";

import "./index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
*/
