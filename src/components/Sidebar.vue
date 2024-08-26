<template>
  <div class="sidebar">
    <div class="sidebar-child" />
    <menu
      :onLogoImageClick="onHomeContainerClick"
      icon="/icon.svg"
      playlistsColor="#99938f"
      icon2="/icon-31.svg"
      followingColor="#ff7e3a"
    /><General
      :onSettingsContainerClick="onSettingsContainerClick"
      icon="/icon-5.svg"
      propColor="#99938f"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Menu from "./Menu.vue";
  import General from "./General.vue";

  export default defineComponent({
    name: "Sidebar",
    components: { Menu, General },
    methods: {
      onHomeContainerClick() {
        this.$router.push("/discover");
      },
      onSettingsContainerClick() {
        this.$router.push("/settings");
      },
    },
  });
</script>
<style scoped>
  .sidebar-child {
    width: 314px;
    height: 960px;
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--color-gray-200);
    display: none;
  }
  .sidebar {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-5xs);
    background-color: var(--color-gray-200);
    width: 314px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-137xl) var(--padding-13xl) var(--padding-336xl);
    box-sizing: border-box;
    gap: var(--gap-84xl);
  }
</style>
