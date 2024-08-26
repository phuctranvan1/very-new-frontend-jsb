<template>
  <div class="general4">
    <div class="general5">General</div>
    <div class="navigation7">
      <div class="settings6" @click="onSettingsContainerClick">
        <img class="icon54" loading="lazy" alt="" :src="icon" />
        <div class="settings7" :style="settingsStyle">Settings</div>
      </div>
      <div class="settings6" @click="onLogOutContainerClick">
        <img class="icon54" loading="lazy" alt="" src="/icon-6.svg" />
        <div class="log-out5">Log out</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "General",
    props: {
      icon: { type: String },
      propColor: { type: String },
      onSettingsContainerClick: { type: Function },
    },
    methods: {
      onSettingsContainerClick1() {
        this.$router.push("/settings");
      },
      onLogOutContainerClick() {
        this.$router.push("/login");
      },
    },
    computed: {
      settingsStyle() {
        return {
          color: this.propColor,
        };
      },
    },
  });
</script>
<style scoped>
  .general5 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 75px;
  }
  .icon54 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .settings7 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 66px;
  }
  .settings6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
    cursor: pointer;
  }
  .log-out5 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 59px;
  }
  .navigation7 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .general4 {
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
