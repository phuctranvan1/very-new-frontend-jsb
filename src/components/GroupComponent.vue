<template>
  <div class="rectangle-parent11">
    <div class="frame-child21" />
    <div class="top-bar">
      <img
        class="logo-icon3"
        loading="lazy"
        alt=""
        src="/logo@2x.png"
        @click="onLogoImageClick"
      /><Menu1
        iconPadding="unset"
        :onSearchContainerClick="onSearchContainerClick"
        icon1="/icon-1.svg"
        iconColor="#99938f"
        icon4="/icon-4.svg"
        propColor="#ff7e3a"
      />
    </div>
    <div class="right-pane">
      <div class="general">
        <div class="general1">General</div>
        <div class="navigation1">
          <div class="log-out" @click="onSettingsContainerClick">
            <img class="icon20" loading="lazy" alt="" src="/icon-5.svg" />
            <div class="settings3">Settings</div>
          </div>
          <div class="log-out" @click="onLogOutContainerClick">
            <img class="icon20" loading="lazy" alt="" src="/icon-6.svg" />
            <div class="log-out1">Log out</div>
          </div>
        </div>
      </div>
      <div class="mobile">
        <div class="mobile-stream">
          <div class="detail11">
            <div class="go-mobile">Go Mobile</div>
            <div class="icon-download">
              <img
                class="app-store-icon"
                loading="lazy"
                alt=""
                src="/app-store@2x.png"
              />
              <img
                class="app-store-icon"
                loading="lazy"
                alt=""
                src="/google-play@2x.png"
              />
            </div>
          </div>
          <div class="legal-privacy-container">
            <p class="legal-privacy">
              Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
              Resource Chart
            </p>
            <p class="language-english-us">
              <span class="language">Language</span>
              <span class="span">: </span>
              <span>English (US)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Menu1 from "./Menu1.vue";

  export default defineComponent({
    name: "GroupComponent",
    components: { Menu1 },
    methods: {
      onSearchContainerClick() {
        this.$router.push("/search");
      },
      onLogoImageClick() {
        this.$router.push("/discover");
      },
      onSettingsContainerClick() {
        this.$router.push("/settings");
      },
      onLogOutContainerClick() {
        this.$router.push("/login");
      },
    },
  });
</script>
<style scoped>
  .frame-child21 {
    width: 314px;
    height: 960px;
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--color-snow-100);
    display: none;
  }
  .logo-icon3 {
    align-self: stretch;
    height: 63px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    cursor: pointer;
    z-index: 1;
  }
  .top-bar {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-56xl);
  }
  .general1 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 75px;
  }
  .icon20 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .settings3 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 66px;
  }
  .log-out1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 59px;
  }
  .log-out {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
    cursor: pointer;
  }
  .navigation1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .general {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    z-index: 1;
  }
  .go-mobile {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 90px;
  }
  .app-store-icon {
    align-self: stretch;
    width: 115px;
    position: relative;
    border-radius: var(--br-7xs);
    max-height: 100%;
    object-fit: cover;
    min-height: 39px;
  }
  .icon-download {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .detail11 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .legal-privacy {
    margin: 0;
  }
  .language {
    color: var(--color-mediumblue);
  }
  .span {
    color: var(--color-foundation-dark-lighter);
  }
  .language-english-us {
    margin: 0;
    color: var(--color-gray-600);
  }
  .legal-privacy-container {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 150%;
  }
  .mobile-stream {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .mobile {
    align-self: stretch;
    height: 157px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px;
    box-sizing: border-box;
    z-index: 1;
  }
  .right-pane {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-135xl);
  }
  .rectangle-parent11 {
    width: 314px;
    border-radius: var(--br-5xs);
    background-color: var(--color-snow-100);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-lg) var(--padding-13xl) var(--padding-25xl);
    box-sizing: border-box;
    gap: var(--gap-84xl);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 1000px) {
    .rectangle-parent11 {
      display: none;
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-10xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .top-bar {
      gap: var(--gap-18xl);
    }

    .right-pane {
      gap: var(--gap-58xl);
    }

    .rectangle-parent11 {
      gap: var(--gap-32xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
