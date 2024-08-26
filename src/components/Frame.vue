<template>
  <div class="frame8">
    <img class="logo-icon7" loading="lazy" alt="" src="/logo@2x.png" />
    <div class="frame9">
      <menu
        icon="/icon2.svg"
        :onPlaylistsContainerClick="onPlaylistsContainerClick"
        icon2="/icon-2.svg"
      /><General
        :onSettingsContainerClick="onSettingsContainerClick"
        icon="/icon-5.svg"
      />
    </div>
    <div class="mobile1">
      <div class="mobile-stream3">
        <div class="detail14">
          <div class="go-mobile3">Go Mobile</div>
          <div class="icon-download3">
            <img
              class="app-store-icon3"
              loading="lazy"
              alt=""
              src="/app-store@2x.png"
            />
            <img
              class="app-store-icon3"
              loading="lazy"
              alt=""
              src="/google-play@2x.png"
            />
          </div>
        </div>
        <div class="legal-privacy-container3">
          <p class="legal-privacy3">
            Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
            Resource Chart
          </p>
          <p class="language-english-us3">
            <span class="language3">Language</span>
            <span class="span3">: </span>
            <span>English (US)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Menu from "./Menu.vue";
  import General from "./General.vue";

  export default defineComponent({
    name: "Frame",
    components: { Menu, General },
    methods: {
      onPlaylistsContainerClick() {
        this.$router.push("/user");
      },
      onSettingsContainerClick() {
        this.$router.push("/settings");
      },
    },
  });
</script>
<style scoped>
  .logo-icon7 {
    align-self: stretch;
    height: 63px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .frame9 {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-84xl);
  }
  .go-mobile3 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 90px;
  }
  .app-store-icon3 {
    align-self: stretch;
    width: 115px;
    position: relative;
    border-radius: var(--br-7xs);
    max-height: 100%;
    object-fit: cover;
    min-height: 39px;
  }
  .icon-download3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .detail14 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .legal-privacy3 {
    margin: 0;
  }
  .language3 {
    color: var(--color-mediumblue);
  }
  .span3 {
    color: var(--color-foundation-dark-lighter);
  }
  .language-english-us3 {
    margin: 0;
    color: var(--color-gray-600);
  }
  .legal-privacy-container3 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 150%;
  }
  .mobile-stream3 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .mobile1 {
    align-self: stretch;
    height: 157px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 0px 0px;
    box-sizing: border-box;
  }
  .frame8 {
    width: 307px;
    border-radius: var(--br-5xs);
    background-color: var(--color-whitesmoke-100);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xl) var(--padding-6xl) var(--padding-107xl)
      var(--padding-13xl);
    box-sizing: border-box;
    gap: var(--gap-53xl);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 950px) {
    .frame8 {
      display: none;
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-63xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .frame8 {
      gap: var(--gap-17xl);
      padding-bottom: var(--padding-34xl);
      box-sizing: border-box;
    }
  }
</style>
