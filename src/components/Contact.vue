<template>
  <v-responsive id="contact" class="custom-content-container">
    <!--        <v-img src="images/contact_info.png"></v-img>-->
    <div class="groom-container">
      <div class="d-flex icon-container text-type-olive text-type-16">
        <div class="text-type-16-500">
          {{ $t("view.contact.gloom") }}
        </div>
        <div class="icon-area d-flex">
          <v-btn
            text
            color="primary"
            small
            v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01093539129')"
          >
            <v-icon size="18">
              mdi-phone-in-talk-outline
            </v-icon>
          </v-btn>
          <v-btn
            color="primary"
            text
            small
            v-on:click="
              linkTo(
                $options.LINK_TYPE.KAKAO_TALK,
                'http://qr.kakao.com/talk/S4ECKD3I67CkCIwuBRyTAZIMKAU-'
              )
            "
          >
            <v-icon size="18">
              mdi-message-outline
            </v-icon>
          </v-btn>
          <v-btn
            color="primary"
            text
            small
            v-on:click="
              linkToV2(
                $options.LINK_TYPE.TOSS,
                'https://www.facebook.com/negabaro'
              )
            "
          >
            Facebook
          </v-btn>
        </div>
      </div>
      <div class="text-type-black text-type-16">
        <div class="pt-5">
          <span class="pr-4">{{ $t("view.contact.gloomFather") }}</span>
          <span
            style="cursor: pointer;"
            class="font-weight-bold"
            v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01035393778')"
          >
            {{ $t("view.contact.gloomFatherMobile") }}
          </span>
          <br />
          <span class="pl-custom">
            {{ $t("view.contact.gloomFatherBankAccountName") }}
          </span>
          <span
            class="text-decoration-underline"
            style="cursor: pointer;"
            v-on:click="copyAccountInfo"
          >
            {{ $t("view.contact.gloomFatherBankAccount") }}
          </span>
        </div>
        <div class="">
          <span class="pr-4">{{ $t("view.contact.gloomMother") }}</span>
          <span
            style="cursor: pointer;"
            class="font-weight-bold"
            v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01093539129')"
          >
            {{ $t("view.contact.gloomMotherMobile") }}
          </span>
          <br />
          <span class="pl-custom">
            {{ $t("view.contact.gloomMotherBankAccountName") }}
          </span>
          <span
            class="text-decoration-underline"
            style="cursor: pointer;"
            v-on:click="copyAccountInfo"
          >
            {{ $t("view.contact.gloomMotherBankAccount") }}
          </span>
        </div>
        <!--<div class="">
          <span
            class="text-decoration-underline"
            style="cursor: pointer;"
            v-on:click="copyAccountInfo"
          >
            {{ $t("view.contact.gloomBankAccount") }}
          </span>
          <span>&nbsp;{{ $t("view.contact.gloomBankAccountName") }}</span>
        </div> -->
      </div>
    </div>
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
    <!-- 신부 영역-->
    <div class="bride-container">
      <div class="d-flex icon-container text-type-olive text-type-16">
        <div class="text-type-16-500">
          {{ $t("view.contact.bride") }}
        </div>
        <div class="icon-area d-flex">
          <v-btn
            color="primary"
            text
            small
            v-on:click="
              linkToV2(
                $options.LINK_TYPE.TOSS,
                'https://www.facebook.com/suzumi.ryangshil.tei'
              )
            "
          >
            Facebook
          </v-btn>
        </div>
      </div>

      <div class="text-type-black text-type-16">
        <div class="pt-5">
          <span class="pr-4">{{ $t("view.contact.brideFather") }}</span>
          <span
            style="cursor: pointer;"
            class="font-weight-bold"
            v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01093539129')"
          >
            {{ $t("view.contact.brideFatherMobile") }}
          </span>
        </div>
        <div class="name-container">
          <span class="pr-4">{{ $t("view.contact.brideMother") }}</span>
          <span
            style="cursor: pointer;"
            class="font-weight-bold"
            v-on:click="linkTo($options.LINK_TYPE.CALL, 'tel:01093539129')"
          >
            {{ $t("view.contact.brideMotherMobile") }}
          </span>
        </div>
        <div class="">
          <span
            class="text-decoration-underline"
            style="cursor: pointer;"
            v-on:click="copyAccountInfo"
          >
            {{ $t("view.contact.brideFatherBankAccount") }}
          </span>
          <span>&nbsp;{{ $t("view.contact.brideFatherBankAccountName") }}</span>
        </div>
        <div class="">
          <span
            class="text-decoration-underline"
            style="cursor: pointer;"
            v-on:click="copyAccountInfo"
          >
            {{ $t("view.contact.brideBankAccount") }}
          </span>
          <span>&nbsp;{{ $t("view.contact.brideBankAccountName") }}</span>
        </div>
      </div>
    </div>
  </v-responsive>
</template>

<script>
import { isMobile, isSupportedCopyCommand, doCopyCommand } from "@/utils";

const LINK_TYPE = {
  CALL: "CALL",
  KAKAO_TALK: "KAKAO_TALK",
  TOSS: "TOSS",
};

export default {
  LINK_TYPE,
  name: "Contact",
  data: () => ({
    isOpenSnackbar: false,
    snackbarText: "",
    snackbarColor: "primary",
  }),
  methods: {
    copyAccountInfo(event) {
      if (!isSupportedCopyCommand()) {
        this.snackbarText = "복사하기가 지원되지 않는 브라우저에요 :(";
        this.snackbarColor = "warning";
        this.isOpenSnackbar = true;

        return;
      }

      doCopyCommand(event);

      this.snackbarText = "계좌 번호가 복사 되었습니다 :)";
      this.snackbarColor = "primary";
      this.isOpenSnackbar = true;
    },
    linkTo(type, target) {
      if (!isMobile()) {
        this.snackbarText = "모바일에서만 지원됩니다 :(";
        this.snackbarColor = "warning";
        this.isOpenSnackbar = true;

        return;
      }

      window.open(target);
    },
    linkToV2(type, target) {
      window.open(target);
    },
  },
};
</script>

<style scoped lang="scss">
.pl-custom {
  padding-left: 82px;
}
.custom-text-button {
  /*font-size: 16px*/
  /*font-weight: 300;*/
}
.custom-content-container {
  /*margin-top: 48px;*/
  /*margin-bottom: 48px;*/
}

.groom-container {
  /*margin-top: 24px;*/
}

.bride-container {
  margin-top: 48px;
  /*margin-bottom: 24px;*/
}

.name-container {
  span {
    height: 36px;
  }
}

.icon-container {
  justify-content: space-between;
}
</style>
