<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="medium">
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultBackLink"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
      </ion-content>
      <ion-footer class="ion-no-border" >
        <p color="medium" class="ion-text-center">Developed by Yamith Atehortua</p>
  <!-- <ion-toolbar color="medium">
    <ion-title> Developed by Yamith Atehortua</ion-title>
  </ion-toolbar> -->
</ion-footer>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonFooter
} from "@ionic/vue";

export default {
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    IonFooter
  },
};
</script>