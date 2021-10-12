import Vue from "vue";
import VueI18n from "vue-i18n";
import { ko } from "@/locales";
//import { getLocale } from "@/utils";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "ko",
  messages: { ko },
});

// for hot reload - https://vue-loader.vuejs.org/guide/hot-reload.html#state-preservation-rules
if (module.hot) {
  //module.hot.accept(["@/locales/ko", "@/locales/en"], () => {
  module.hot.accept(["@/locales/ko"], () => {
    i18n.setLocaleMessage("ko-KR", ko);
    //i18n.setLocaleMessage("en", en);
  });
}

export default i18n;
