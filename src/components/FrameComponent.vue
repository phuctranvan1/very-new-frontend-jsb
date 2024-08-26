<template>
  <div class="music-content-wrapper">
    <div class="music-content">
      <div class="music-content-child" />
      <img class="image-icon21" loading="lazy" alt="" :src="image" />
      <div class="music-details">
        <div class="frame-parent11">
          <div class="music-title-wrapper">
            <div class="music-title">
              <div class="living-my-best7">Living My Best Life</div>
              <div class="dababy-wrapper">
                <div class="dababy2">Ben Hector</div>
              </div>
            </div>
          </div>
          <div class="music-controls1">
            <div class="control-icons">
              <div class="icon-labels-parent">
                <div class="icon-labels">
                  <img
                    class="icon39"
                    loading="lazy"
                    alt=""
                    src="/icon-10.svg"
                  />
                </div>
                <div class="icon-labels">
                  <img
                    class="icon39"
                    loading="lazy"
                    alt=""
                    src="/icon-11.svg"
                  />
                </div>
                <img class="icon41" loading="lazy" alt="" src="/icon-12.svg" />
                <div class="icon-labels">
                  <img
                    class="icon39"
                    loading="lazy"
                    alt=""
                    src="/icon-13.svg"
                  />
                </div>
                <div class="icon-labels">
                  <img
                    class="icon39"
                    loading="lazy"
                    alt=""
                    src="/icon-14.svg"
                  />
                </div>
              </div>
            </div>
            <div class="playback-controls">
              <img class="group-icon3" loading="lazy" alt="" :src="group" />
              <div class="playback-time">
                <div class="time-play2">
                  <div class="time-labels">1:21</div>
                  <div class="time-labels1">-2:36</div>
                </div>
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
    name: "FrameComponent",
    props: {
      image: { type: String },
      group: { type: String },
    },
  });
</script>
<style scoped>
  .music-content-child {
    height: 195px;
    width: 1061px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .image-icon21 {
    height: 174px;
    width: 184px;
    position: relative;
    border-radius: var(--br-base);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 1;
  }
  .living-my-best7 {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.5px;
    line-height: 150%;
    z-index: 1;
  }
  .dababy2 {
    flex: 1;
    position: relative;
    line-height: 17px;
    mix-blend-mode: normal;
    z-index: 1;
  }
  .dababy-wrapper {
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
  .music-title {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .music-title-wrapper {
    width: 248px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-lgi);
    box-sizing: border-box;
  }
  .icon39 {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 1;
  }
  .icon-labels {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) 0px 0px;
  }
  .icon41 {
    height: 56px;
    width: 56px;
    position: relative;
    z-index: 1;
  }
  .icon-labels-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .control-icons {
    align-self: stretch;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-3xl) 0px var(--padding-xl);
    box-sizing: border-box;
  }
  .group-icon3 {
    align-self: stretch;
    height: 7px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .time-labels {
    position: relative;
    line-height: 16px;
    display: inline-block;
    mix-blend-mode: normal;
    min-width: 21px;
  }
  .time-labels1 {
    position: relative;
    line-height: 16px;
    display: inline-block;
    mix-blend-mode: normal;
    min-width: 32px;
  }
  .time-play2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
    z-index: 1;
  }
  .playback-time {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-56xl);
  }
  .playback-controls {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .music-controls1 {
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
  .frame-parent11 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-smi);
    max-width: 100%;
  }
  .music-details {
    width: 659px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .music-content {
    flex: 1;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) var(--padding-lg) var(--padding-4xs);
    box-sizing: border-box;
    gap: var(--gap-12xl);
    max-width: 100%;
  }
  .music-content-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 1000px) {
    .music-content {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 725px) {
    .frame-parent11 {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 450px) {
    .playback-time {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .music-content {
      gap: var(--gap-mini);
    }
  }
</style>
