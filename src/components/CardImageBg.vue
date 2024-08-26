<template>
  <div class="card-image-bg" :style="cardImageBgStyle">
    <div class="bg5" :style="bG1Style" />
    <div class="card1">
      <img class="image-icon19" loading="lazy" alt="" :src="image" />
      <div class="song-info">
        <div class="she-will-be-loved-parent">
          <div class="she-will-be2" :style="sheWillBeStyle">
            {{sheWillBeLoved}}
          </div>
          <div class="maroon-53" :style="maroon5Style">{{maroon5}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "CardImageBg",
    props: {
      image: { type: String },
      sheWillBeLoved: { type: String },
      maroon5: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propRight: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth1: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      cardImageBgStyle() {
        return {
          padding: this.propPadding,
        };
      },
      bG1Style() {
        return {
          width: this.propWidth,
          right: this.propRight,
        };
      },
      sheWillBeStyle() {
        return {
          minWidth: this.propMinWidth,
        };
      },
      maroon5Style() {
        return {
          minWidth: this.propMinWidth1,
        };
      },
    },
  });
</script>
<style scoped>
  .bg5 {
    height: 100px;
    width: 938px;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 50px);
    right: -720.2px;
    box-shadow: 0px 0px 40px rgba(24, 12, 5, 0.02);
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    z-index: 1;
  }
  .image-icon19 {
    height: 84px;
    width: 84px;
    position: relative;
    border-radius: var(--br-base);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .she-will-be2 {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    display: inline-block;
    min-width: 124px;
    white-space: nowrap;
  }
  .maroon-53 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 120%;
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 61px;
  }
  .she-will-be-loved-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .song-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl) 0px 0px;
  }
  .card1 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-xl);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lgi) 0px 0px;
    gap: var(--gap-5xl);
    z-index: 2;
  }
  .card-image-bg {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-smi) 0px 0px;
    position: relative;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
</style>
