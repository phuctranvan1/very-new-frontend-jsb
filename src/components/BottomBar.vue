<template>
  <div class="bottom-bar" :style="bottomBarStyle">
    <div class="bottom-bar-child" :style="rectangleDivStyle" />
    <img class="image-icon20" loading="lazy" alt="" :src="image" />
    <div class="bottom-content">
      <div class="bottom-music">
        <div class="music-info">
          <div class="living-my-best-life-group">
            <div class="living-my-best6">Living My Best Life</div>
            <div class="bottom-artist">
              <div class="dababy1">Ben Hector</div>
            </div>
          </div>
        </div>
        <div class="music-control1">
          <div class="control-buttons">
            <div class="all-control-icons">
              <div class="icon-wrapper">
                <img class="icon29" loading="lazy" alt="" :src="icon" />
              </div>
              <div class="icon-wrapper">
                <img class="icon29" loading="lazy" alt="" :src="icon1" />
              </div>
              <img class="icon31" loading="lazy" alt="" :src="icon2" />
              <div class="icon-wrapper">
                <img class="icon29" loading="lazy" alt="" :src="icon3" />
              </div>
              <div class="icon-wrapper">
                <img class="icon29" loading="lazy" alt="" :src="icon4" />
              </div>
            </div>
          </div>
          <div class="music-slider">
            <img class="group-icon2" loading="lazy" alt="" :src="group" />
            <div class="music-controls">
              <div class="time-play1">
                <div class="timestamp">1:21</div>
                <div class="timestamp1">-2:36</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BottomBar",
    props: {
      image: { type: String },
      icon: { type: String },
      icon1: { type: String },
      icon2: { type: String },
      icon3: { type: String },
      icon4: { type: String },
      group: { type: String },
      propTop: { type: [Object, Array, String, Number, Boolean] },
      propLeft: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propWidth1: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      bottomBarStyle() {
        return {
          top: this.propTop,
          left: this.propLeft,
          width: this.propWidth,
        };
      },
      rectangleDivStyle() {
        return {
          width: this.propWidth1,
        };
      },
    },
  });
</script>
<style scoped>
  .bottom-bar-child {
    height: 195px;
    width: 1061px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .image-icon20 {
    height: 174px;
    width: 184px;
    position: relative;
    border-radius: var(--br-base);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 1;
  }
  .living-my-best6 {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.5px;
    line-height: 150%;
    z-index: 1;
  }
  .dababy1 {
    flex: 1;
    position: relative;
    line-height: 17px;
    mix-blend-mode: normal;
    z-index: 1;
  }
  .bottom-artist {
    width: 216px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-33xl);
    box-sizing: border-box;
    font-size: var(--font-size-sm);
    color: var(--color-gray-700);
  }
  .living-my-best-life-group {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .music-info {
    width: 248px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-lgi);
    box-sizing: border-box;
  }
  .icon29 {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 1;
  }
  .icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) 0px 0px;
  }
  .icon31 {
    height: 56px;
    width: 56px;
    position: relative;
    z-index: 1;
  }
  .all-control-icons {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .control-buttons {
    align-self: stretch;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-3xl) 0px var(--padding-xl);
    box-sizing: border-box;
  }
  .group-icon2 {
    align-self: stretch;
    height: 7px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .timestamp {
    position: relative;
    line-height: 16px;
    display: inline-block;
    mix-blend-mode: normal;
    min-width: 21px;
  }
  .timestamp1 {
    position: relative;
    line-height: 16px;
    display: inline-block;
    mix-blend-mode: normal;
    min-width: 32px;
  }
  .time-play1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
    z-index: 1;
  }
  .music-controls {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-56xl);
  }
  .music-slider {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .music-control1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xl);
    min-width: 259px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-smi);
    color: var(--color-gray-800);
  }
  .bottom-music {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-smi);
    max-width: 100%;
  }
  .bottom-content {
    width: 659px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .bottom-bar {
    position: absolute;
    top: 725px;
    left: 348px;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    width: 1061px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-lg) var(--padding-4xs);
    box-sizing: border-box;
    gap: var(--gap-12xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 900px) {
    .bottom-bar {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 675px) {
    .bottom-music {
      flex-wrap: wrap;
    }
  }
</style>
