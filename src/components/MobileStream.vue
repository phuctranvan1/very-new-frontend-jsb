<template>
  <div class="mobile-stream2" :style="mobileStreamStyle">
    <div class="detail13" :style="detailStyle">
      <div class="go-mobile2">Go Mobile</div>
      <div class="icon-download2">
        <img class="app-store-icon2" loading="lazy" alt="" :src="appStore" />
        <img class="app-store-icon2" loading="lazy" alt="" :src="googlePlay" />
      </div>
    </div>
    <div class="legal-privacy-container2">
      <p class="legal-privacy2">
        Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint Resource
        Chart
      </p>
      <p class="language-english-us2">
        <span class="language2">Language</span>
        <span class="span2">: </span>
        <span>English (US)</span>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MobileStream",
    props: {
      appStore: { type: String },
      googlePlay: { type: String },
      propAlignSelf: { type: String },
      mobileStreamAlignSelf: { type: String },
      mobileStreamWidth: { type: [Object, Array, String, Number, Boolean] },
      mobileStreamPadding: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      detailStyle() {
        return {
          alignSelf: this.propAlignSelf,
        };
      },
      mobileStreamStyle() {
        return {
          alignSelf: this.mobileStreamAlignSelf,
          width: this.mobileStreamWidth,
          padding: this.mobileStreamPadding,
        };
      },
    },
  });
</script>
<style scoped>
  .go-mobile2 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 90px;
  }
  .app-store-icon2 {
    align-self: stretch;
    width: 115px;
    position: relative;
    border-radius: var(--br-7xs);
    max-height: 100%;
    object-fit: cover;
    min-height: 39px;
  }
  .icon-download2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .detail13 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .legal-privacy2 {
    margin: 0;
  }
  .language2 {
    color: var(--color-mediumblue);
  }
  .span2 {
    color: var(--color-foundation-dark-lighter);
  }
  .language-english-us2 {
    margin: 0;
    color: var(--color-gray-600);
  }
  .legal-privacy-container2 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 150%;
  }
  .mobile-stream2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    flex-shrink: 0;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }
</style>
