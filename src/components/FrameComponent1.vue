<template>
  <div class="rectangle-parent17">
    <div class="frame-child29" />
    <div class="logo-menu-parent">
      <div class="logo-menu">
        <img
          class="logo-icon6"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          @click="onLogoImageClick"
        />
        <div class="menu4">
          <div class="menu5">Menu</div>
          <div class="navigation5">
            <div class="home6" @click="onLogoImageClick">
              <div class="home7">
                <img class="icon44" loading="lazy" alt="" src="/icon.svg" />
                <div class="home8">Home</div>
              </div>
            </div>
            <div class="search7" @click="onSearchContainerClick">
              <img class="icon44" loading="lazy" alt="" src="/icon-1.svg" />
              <div class="search8">Search</div>
            </div>
            <div class="search7" @click="onPlaylistsContainerClick">
              <img class="icon44" loading="lazy" alt="" src="/icon-2.svg" />
              <div class="user5">User</div>
            </div>
            <div class="search7" @click="onAlbumsContainerClick">
              <img class="icon44" loading="lazy" alt="" src="/icon-3.svg" />
              <div class="home8">Music</div>
            </div>
            <div class="following2" @click="onFollowingContainerClick">
              <img class="icon44" loading="lazy" alt="" src="/icon-51.svg" />
              <div class="search8">Profile</div>
            </div>
          </div>
        </div>
      </div>
      <General icon="/icon-61.svg" propColor="#ff7e3a" />
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
  import General from "./General.vue";
  import MobileStream from "./MobileStream.vue";

  export default defineComponent({
    name: "FrameComponent1",
    components: { General, MobileStream },
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
      onAlbumsContainerClick() {
        this.$router.push("/music");
      },
      onFollowingContainerClick() {
        this.$router.push("/profile");
      },
    },
  });
</script>
<style scoped>
  .frame-child29 {
    width: 314px;
    height: 960px;
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--color-snow-300);
    display: none;
  }
  .logo-icon6 {
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
  .menu5 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 48px;
  }
  .icon44 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .home8 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 45px;
  }
  .home7 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .home6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .search8 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 53px;
  }
  .search7 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    cursor: pointer;
  }
  .user5 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 36px;
  }
  .following2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    cursor: pointer;
  }
  .navigation5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .menu4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    z-index: 1;
  }
  .logo-menu {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-32xl);
  }
  .logo-menu-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-84xl);
  }
  .rectangle-parent17 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-5xs);
    background-color: var(--color-snow-300);
    width: 314px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-23xl) var(--padding-13xl) var(--padding-21xl);
    box-sizing: border-box;
    gap: var(--gap-135xl);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }
</style>
