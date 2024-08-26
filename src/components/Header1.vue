<template>
  <div class="header">
    <div class="header-child" />
    <div class="content2">
      <img
        class="logo-icon5"
        loading="lazy"
        alt=""
        src="/logo@2x.png"
        @click="onLogoImageClick"
      />
    </div>
    <div class="menu-wrapper">
      <Menu1
        iconPadding="unset"
        icon1="/icon-15.svg"
        iconColor="#ff7e3a"
        :onFollowingContainerClick="onFollowingContainerClick"
        icon4="/icon-51.svg"
        propColor="#99938f"
      />
    </div>
    <div class="footer1">
      <General
        :onSettingsContainerClick="onSettingsContainerClick"
        icon="/icon-5.svg"
        propColor="#99938f"
      />
    </div>
    <MobileStream
      propAlignSelf="unset"
      appStore="/app-store@2x.png"
      googlePlay="/google-play@2x.png"
      mobileStreamAlignSelf="stretch"
      mobileStreamWidth="unset"
      mobileStreamPadding="unset"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Menu1 from "./Menu1.vue";
  import General from "./General.vue";
  import MobileStream from "./MobileStream.vue";

  export default defineComponent({
    name: "Header1",
    components: { Menu1, General, MobileStream },
    methods: {
      onFollowingContainerClick() {
        this.$router.push("/profile");
      },
      onSettingsContainerClick() {
        this.$router.push("/settings");
      },
      onLogoImageClick() {
        this.$router.push("/discover");
      },
    },
  });
</script>
<style scoped>
  .header-child {
    width: 306px;
    height: 960px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-snow-600);
    display: none;
  }
  .logo-icon5 {
    height: 63px;
    width: 250px;
    position: relative;
    object-fit: cover;
    cursor: pointer;
    z-index: 1;
  }
  .content2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-11xs);
  }
  .menu-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-21xl);
  }
  .footer1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-72xl);
  }
  .header {
    width: 306px;
    border-radius: var(--br-xl);
    background-color: var(--color-snow-600);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) var(--padding-3xl) var(--padding-21xl)
      var(--padding-13xl);
    box-sizing: border-box;
    gap: var(--gap-44xl);
  }

  @media screen and (max-width: 1000px) {
    .header {
      display: none;
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-7xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .header {
      gap: var(--gap-12xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
