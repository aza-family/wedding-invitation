<template>
  <v-responsive id="share" class="custom-content-container">
    <!--        <v-img src="images/share.png"></v-img>-->
    <div class="divider-bar"></div>
    <div class="title-container text-type-olive text-type-24">
      {{ $t("view.share.title") }}
    </div>
    <v-responsive class="d-flex button-container">
      <v-row class="" justify="space-between" cols="12">
        <v-col class="col-6">
          <v-btn
            class="elevation-0 custom-button"
            block
            :large="true"
            color="primary"
            @click="sendKakaoMessage"
          >
            <v-icon left>
              mdi-message-outline
            </v-icon>
            {{ $t("view.share.kakaotalk") }}
          </v-btn>
        </v-col>
        <v-col class="col-6">
          <v-btn
            class="elevation-0 custom-button"
            block
            :large="true"
            color="primary"
            v-on:click="copyURL"
          >
            <v-icon left>
              mdi-content-copy
            </v-icon>
            {{ $t("view.share.copyOfUrl") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
    <v-snackbar
      :top="true"
      v-model="isOpenSnackbar"
      :color="snackbarColor"
      :timeout="1500"
    >
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="isOpenSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-responsive>
</template>

<script>
import { isSupportedCopyCommand, doCopyCommand } from "@/utils";

export default {
  name: "Share",
  data: () => ({
    isOpenSnackbar: false,
    snackbarText: "주소 복사 되었습니다 :)",
    snackbarColor: "",
  }),
  mounted() {
    this.kakaoInit();
  },
  methods: {
    kakaoInit() {
      // eslint-disable-next-line no-undef
      if (Kakao.isInitialized()) {
        console.log("already init");
        return true;
      }

      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-undef
      Kakao.init("9723055325a47afca011eebf534ec5be");
      // eslint-disable-next-line no-undef
      Kakao.isInitialized();
      // eslint-disable-next-line no-undef
      console.log("KaKao init result: ", Kakao.isInitialized());

      return true;
    },
    copyURL() {
      if (!isSupportedCopyCommand()) {
        this.snackbarText = "복사하기가 지원되지 않는 브라우저에요 :(";
        this.snackbarColor = "warning";
        this.isOpenSnackbar = true;

        return;
      }

      doCopyCommand("https://bit.ly/30RYEjV");

      this.snackbarText = "URL이 복사 되었습니다 :)";
      this.snackbarColor = "primary";
      this.isOpenSnackbar = true;
    },
    sendKakaoMessage() {
      // eslint-disable-next-line no-undef
      Kakao.Link.sendCustom({
        templateId: 64400, // 복사해둔 템플릿 ID
        templateArgs: {
          thu:
            "https://raw.githubusercontent.com/aza-family/wedding-invitation/master/public/images/02.png",
        },
      });
      /*
      Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "세화♡량실 결혼합니다.",
          description: "2021. 11. 21. 오후 2:30분, 금오산호텔",
          imageUrl:
            "https://raw.githubusercontent.com/aza-family/wedding-invitation/master/public/images/02.png",
          link: {
            mobileWebUrl: "https://aza-family.github.io/wedding-invitation/#/",
          },
        },
        buttons: [
          {
            title: "한땀한땀 만든 청첩장 바로GO!",
            link: {
              mobileWebUrl:
                "https://aza-family.github.io/wedding-invitation/#/",
            },
          },
        ],
      }); */
    },
  },
};
</script>

<style scoped>
.custom-content-container {
  background: none;
}

.title-container {
  margin-top: 8px;
  margin-bottom: 32px;
}
</style>
