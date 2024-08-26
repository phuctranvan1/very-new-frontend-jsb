<template>
  <div class="menu2" :style="menuStyle">
    <div class="menu3">Menu</div>
    <nav class="navigation4">
      <div class="home3" @click="onHomeContainerClick">
        <div class="home4">
          <img class="icon34" loading="lazy" alt="" src="/icon.svg" />
          <div class="home5">Home</div>
        </div>
      </div>
      <div class="search5" @click="onSearchContainerClick">
        <img class="icon34" loading="lazy" alt="" :src="icon1" />
        <div class="search6" :style="searchStyle">Search</div>
      </div>
      <div class="playlists1" @click="onPlaylistsContainerClick">
        <img class="icon34" loading="lazy" alt="" src="/icon-2.svg" />
        <div class="user4">User</div>
      </div>
      <div class="playlists1" @click="onAlbumsContainerClick">
        <img class="icon34" loading="lazy" alt="" src="/icon-3.svg" />
        <div class="home5">Music</div>
      </div>
      <div class="following1" @click="onFollowingContainerClick">
        <img class="icon34" loading="lazy" alt="" :src="icon4" />
        <div class="search6" :style="profileStyle">Profile</div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Menu1",
    props: {
      icon1: { type: String },
      icon4: { type: String },
      iconPadding: { type: [Object, Array, String, Number, Boolean] },
      iconColor: { type: String },
      propColor: { type: String },
      onSearchContainerClick: { type: Function },
      onFollowingContainerClick: { type: Function },
    },
    methods: {
      onHomeContainerClick() {
        this.$router.push("/discover");
      },
      onPlaylistsContainerClick() {
        this.$router.push("/user");
      },
      onAlbumsContainerClick() {
        this.$router.push("/music");
      },
      onFollowingContainerClick1() {
        this.$router.push("/profile");
      },
    },
    computed: {
      menuStyle() {
        return {
          padding: this.iconPadding,
        };
      },
      searchStyle() {
        return {
          color: this.iconColor,
        };
      },
      profileStyle() {
        return {
          color: this.propColor,
        };
      },
    },
  });
</script>
<style scoped>
  .menu3 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 48px;
  }
  .icon34 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .home5 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 45px;
  }
  .home4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .home3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .search6 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 53px;
  }
  .search5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    color: var(--color-foundation-orange-normal);
  }
  .user4 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 36px;
  }
  .playlists1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    cursor: pointer;
  }
  .following1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    cursor: pointer;
  }
  .navigation4 {
    margin: 0;
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
  .menu2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
    gap: var(--gap-5xl);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }
</style>
