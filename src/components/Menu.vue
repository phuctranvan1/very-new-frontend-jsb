<template>
  <div class="menu6">
    <div class="menu7">Menu</div>
    <div class="navigation6">
      <div class="home9" @click="onLogoImageClick">
        <div class="home10">
          <img class="icon49" loading="lazy" alt="" :src="icon" />
          <div class="home11" :style="homeStyle">Home</div>
        </div>
      </div>
      <div class="search9" @click="onSearchContainerClick">
        <img class="icon49" loading="lazy" alt="" src="/icon-1.svg" />
        <div class="search10">Search</div>
      </div>
      <div class="search9" @click="onPlaylistsContainerClick">
        <img class="icon49" loading="lazy" alt="" :src="icon2" />
        <div class="user6" :style="userStyle">User</div>
      </div>
      <div class="search9" @click="onAlbumsContainerClick">
        <img class="icon49" loading="lazy" alt="" src="/icon-3.svg" />
        <div class="home11">Music</div>
      </div>
      <div class="following3" @click="onFollowingContainerClick">
        <img class="icon49" loading="lazy" alt="" src="/icon-51.svg" />
        <div class="search10">Profile</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Menu",
    props: {
      icon: { type: String },
      icon2: { type: String },
      playlistsColor: { type: String },
      followingColor: { type: String },
      onLogoImageClick: { type: Function },
      onPlaylistsContainerClick: { type: Function },
    },
    methods: {
      onSearchContainerClick() {
        this.$router.push("/search");
      },
      onPlaylistsContainerClick1() {
        this.$router.push("/user");
      },
      onAlbumsContainerClick() {
        this.$router.push("/music");
      },
      onFollowingContainerClick() {
        this.$router.push("/profile");
      },
    },
    computed: {
      homeStyle() {
        return {
          color: this.playlistsColor,
        };
      },
      userStyle() {
        return {
          color: this.followingColor,
        };
      },
    },
  });
</script>
<style scoped>
  .menu7 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 48px;
  }
  .icon49 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .home11 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 45px;
  }
  .home10 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .home9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: var(--color-foundation-orange-normal);
  }
  .search10 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 53px;
  }
  .search9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    cursor: pointer;
  }
  .user6 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 36px;
  }
  .following3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    cursor: pointer;
  }
  .navigation6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .menu6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }
</style>
