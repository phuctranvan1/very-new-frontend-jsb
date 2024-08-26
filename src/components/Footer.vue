<template>
  <div class="footer">
    <div class="footer-child" />
    <div class="footer-content">
      <img
        class="logo-icon4"
        loading="lazy"
        alt=""
        :src="logo"
        @click="onLogoImageClick"
      />
      <div class="menu">
        <div class="menu1">Menu</div>
        <div class="navigation2">
          <div class="home" @click="onLogoImageClick">
            <div class="home1">
              <img class="icon22" loading="lazy" alt="" src="/icon.svg" />
              <div class="home2">Home</div>
            </div>
          </div>
          <div class="playlists" @click="onSearchContainerClick">
            <img class="icon22" loading="lazy" alt="" src="/icon-1.svg" />
            <div class="search4">Search</div>
          </div>
          <div class="playlists" @click="onPlaylistsContainerClick">
            <img class="icon22" loading="lazy" alt="" src="/icon-2.svg" />
            <div class="user3">User</div>
          </div>
          <div class="albums">
            <img class="icon22" loading="lazy" alt="" src="/icon-41.svg" />
            <div class="home2">Music</div>
          </div>
          <div class="following" @click="onFollowingContainerClick">
            <img class="icon22" alt="" src="/icon-51.svg" />
            <div class="search4">Profile</div>
          </div>
        </div>
      </div>
    </div>
    <div class="settings-menu">
      <div class="menu">
        <div class="general3">General</div>
        <div class="navigation2">
          <div class="settings4" @click="onSettingsContainerClick">
            <img class="icon22" loading="lazy" alt="" src="/icon-5.svg" />
            <div class="settings5">Settings</div>
          </div>
          <div class="settings4" @click="onLogOutContainerClick">
            <img class="icon22" loading="lazy" alt="" src="/icon-6.svg" />
            <div class="log-out3">Log out</div>
          </div>
        </div>
      </div>
      <div class="mobile-stream1">
        <div class="detail12">
          <div class="go-mobile1">Go Mobile</div>
          <div class="icon-download1">
            <img
              class="app-store-icon1"
              loading="lazy"
              alt=""
              :src="appStore"
            />
            <img
              class="app-store-icon1"
              loading="lazy"
              alt=""
              :src="googlePlay"
            />
          </div>
        </div>
        <div class="legal-privacy-container1">
          <p class="legal-privacy1">
            Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
            Resource Chart
          </p>
          <p class="language-english-us1">
            <span class="language1">Language</span>
            <span class="span1">: </span>
            <span>English (US)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Footer",
    props: {
      logo: { type: String },
      appStore: { type: String },
      googlePlay: { type: String },
    },
    methods: {
      onLogoImageClick() {
        this.$router.push("/discover");
      },
      onSearchContainerClick() {
        this.$router.push("/search");
      },
      onPlaylistsContainerClick() {
        this.$router.push("/user");
      },
      onFollowingContainerClick() {
        this.$router.push("/profile");
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
  .footer-child {
    width: 314px;
    height: 960px;
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--color-snow-400);
    display: none;
  }
  .logo-icon4 {
    align-self: stretch;
    height: 63px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    cursor: pointer;
    z-index: 2;
  }
  .menu1 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 48px;
  }
  .icon22 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .home2 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 45px;
  }
  .home1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .home {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .search4 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 53px;
  }
  .user3 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 36px;
  }
  .playlists {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    cursor: pointer;
  }
  .albums {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    color: var(--color-foundation-orange-normal);
  }
  .following {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    cursor: pointer;
  }
  .navigation2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    z-index: 1;
  }
  .footer-content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-47xl);
  }
  .general3 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 75px;
  }
  .settings5 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 66px;
  }
  .settings4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
    cursor: pointer;
  }
  .log-out3 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 59px;
  }
  .go-mobile1 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 90px;
  }
  .app-store-icon1 {
    align-self: stretch;
    width: 115px;
    position: relative;
    border-radius: var(--br-7xs);
    max-height: 100%;
    object-fit: cover;
    min-height: 39px;
  }
  .icon-download1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .detail12 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .legal-privacy1 {
    margin: 0;
  }
  .language1 {
    color: var(--color-mediumblue);
  }
  .span1 {
    color: var(--color-foundation-dark-lighter);
  }
  .language-english-us1 {
    margin: 0;
    color: var(--color-gray-600);
  }
  .legal-privacy-container1 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 150%;
  }
  .mobile-stream1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    z-index: 1;
  }
  .settings-menu {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-135xl);
  }
  .footer {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-5xs);
    background-color: var(--color-snow-400);
    width: 314px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xl) var(--padding-13xl) var(--padding-21xl);
    box-sizing: border-box;
    gap: var(--gap-84xl);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }
</style>
