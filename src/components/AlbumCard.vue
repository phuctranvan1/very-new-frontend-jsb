<template>
  <div class="album-card1">
    <div class="album-image">
      <img class="image-icon22" loading="lazy" alt="" :src="image" />
    </div>
    <div class="text19">
      <div class="al-music-genre">{{alMusicGenre}}</div>
      <div class="top-501">Top 50</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AlbumCard",
    props: {
      image: { type: String },
      alMusicGenre: { type: String },
    },
  });
</script>
<style scoped>
  .image-icon22 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: var(--br-xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .album-image {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .al-music-genre {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.01em;
  }
  .top-501 {
    width: 105px;
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
  }
  .text19 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
    gap: var(--gap-5xs);
  }
  .album-card1 {
    align-self: stretch;
    width: 160px;
    border-radius: var(--br-base);
    border: 0.8px solid var(--color-foundation-orange-light-active);
    box-sizing: border-box;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-mini) var(--padding-xs);
    gap: var(--gap-xs);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
</style>
