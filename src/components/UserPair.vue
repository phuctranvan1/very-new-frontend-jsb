<template>
  <div class="user-pair">
    <div class="bg4" :style="bGStyle" />
    <div class="tranphuc" :style="tranphucStyle">{{tranphuc}}</div>
    <div class="admin" :style="adminStyle">{{admin}}</div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "UserPair",
    props: {
      tranphuc: { type: String },
      admin: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth1: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      bGStyle() {
        return {
          width: this.propWidth,
        };
      },
      tranphucStyle() {
        return {
          minWidth: this.propMinWidth,
        };
      },
      adminStyle() {
        return {
          minWidth: this.propMinWidth1,
        };
      },
    },
  });
</script>
<style scoped>
  .bg4 {
    width: 904px;
    height: 100px;
    position: relative;
    box-shadow: 0px 0px 40px rgba(24, 12, 5, 0.02);
    border-radius: var(--br-base);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .tranphuc {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    display: inline-block;
    min-width: 68px;
    z-index: 2;
  }
  .admin {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 17px;
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 42px;
    z-index: 2;
  }
  .user-pair {
    align-self: stretch;
    box-shadow: 0px 0px 40px rgba(24, 12, 5, 0.02);
    border-radius: var(--br-base);
    background-color: var(--color-foundation-surface-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xl) var(--padding-xl) var(--padding-9xl)
      var(--padding-45xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
    max-width: 100%;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
</style>
