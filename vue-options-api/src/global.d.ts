import * as vueProps from "vue";

declare global {
  interface Window {
    Vue: typeof vueProps;
  }
}
