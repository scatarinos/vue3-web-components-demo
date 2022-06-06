/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from "vue";

// @ts-ignore
const getNearestElementParent = (el) => {
  while (el?.nodeType !== 1 && el != null) {
    // ELEMENT
    el = el.parentElement;
  }
  return el;
};

// @ts-ignore
export const defineCustomElement = (
  // @ts-ignore
  component,
  { plugins = [], pluginBuilders = [] }
) =>
  VueDefineCustomElement({
    // render: () => h(component, props),
    props: component.props,
    setup(props) {
      // @ts-ignore
      const app = createApp();

      // install shared plugins
      plugins.forEach(app.use);

      // install plugins by builder (allow isolated)
      for (const builder of pluginBuilders) {
        // @ts-ignore
        app.use(builder(props));
      }

      app.mixin({
        mounted() {
          const insertStyles = (styles: unknown[]) => {
            if (styles?.length) {
              this.__style = document.createElement("style");
              this.__style.innerText = styles.join().replace(/\n/g, "");
              getNearestElementParent(this.$el).prepend(this.__style);
            }
          };
          // load own styles
          insertStyles(this.$?.type.styles);

          // load styles of child components
          if (this.$options.components) {
            for (const comp of Object.values(this.$options.components)) {
              // @ts-ignore
              insertStyles(comp.styles);
            }
          };
        },
        unmounted() {
          this.__style?.remove();
        },
      });

      const inst = getCurrentInstance();
      // @ts-ignore
      Object.assign(inst.appContext, app._context);
      // @ts-ignore
      Object.assign(inst.provides, app._context.provides);

      return () => h(component, props);
    },
  });
