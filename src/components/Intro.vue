<template>
  <v-responsive id="intro" class="custom-content-container">
    <!-- <div class="d-flex flex-row-reverse ma-4">
      <v-btn
        color="primary"
        icon
        outlined
        @click="isVisibleSettingDialog = true"
      >
        <v-icon>
          mdi-cog-outline
        </v-icon>
      </v-btn>
    </div> -->
    <v-responsive class="description-container custom-ma">
      <div
        class="title-container text-type-black text-type-16 line-height-24 text-align-center"
      >
        {{ $t("view.intro.header") }}
      </div>
      <div class="text-type-olive text-type-28 text-align-center">
        {{ $t("view.intro.GloomAndBride") }}
      </div>
    </v-responsive>
    <v-img :src="getImageSrc" :lazy-src="getThumbnailSrc" class=""></v-img>
  </v-responsive>
</template>

<script>
import { getLocale, setLocale, setTheme, isMobile } from "@/utils";
//import one from "@/assets/1.jpg";
//import one from "@/assets/01.png";
//import one from "@/assets/02.png";
import one from "@/assets/02.png";
//const convertThemeToNumber = (isDark) => {
//  // console.log(`isDark ${isDark}`);
//  return isDark ? 0 : 1;
//};

const convertLocaleToNumber = (locale) => {
  // console.log(`locale ${locale}`);
  return locale !== "ko" ? 0 : 1;
};

export default {
  name: "Intro",
  data: () => ({
    //isVisibleSettingDialog: false,
    //isVisibleNoticeDialog: true,
    //theme: convertThemeToNumber(isDarkTheme()),
    theme: false,
    language: convertLocaleToNumber(getLocale()),
  }),
  methods: {
    isMobile: isMobile,
    changeSettings() {
      let locale;

      switch (this.language) {
        case 0:
          locale = "en";
          break;
        case 1:
          locale = "ko";
          break;
        default:
          locale = "en";
      }

      let darkTheme;
      switch (this.theme) {
        case 0:
          darkTheme = true;
          break;
        case 1:
          darkTheme = false;
          break;
        default:
          darkTheme = false;
      }

      setLocale(this, locale);
      setTheme(darkTheme);
      this.$vuetify.theme.dark = darkTheme;

      this.isVisibleSettingDialog = false;
    },
  },
  computed: {
    getImageSrc() {
      return one;
    },
    getThumbnailSrc() {
      return one;
    },
  },
};
</script>

<style scoped lang="scss">
.custom-content-container {
  padding: 0 !important;
  margin: 0 !important;
}

.custom-ma {
  margin-top: 80px;
  margin-bottom: 16px;
}

//.description-container {
//  /*height: 132px;*/
//}
//
//.title-container {
//  /*margin-top: 48px;*/
//}
</style>
