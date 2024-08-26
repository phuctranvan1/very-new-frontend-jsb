<template>
  <div class="add-music">
    <section class="rectangle-group">
      <div class="frame-item" />
      <div class="text3">
        <div class="category4">Add new music</div>
      </div>
      <div class="track-info">
        <div class="track-details">
          <div class="track-name">
            <div class="name1">Name:</div>
          </div>
          <div class="song-title">
            <div class="song-title-child" />
            <div class="she-will-be">She will be loved</div>
          </div>
        </div>
        <ArtistInfo />
      </div>
    </section>
    <header class="discover4">
      <div class="discover5">
        <h3 class="music">Music</h3>
        <img class="icon4" loading="lazy" alt="" src="/icon-7.svg" />
      </div>
      <div class="profile4">
        <img class="image-icon5" alt="" src="/image@2x.png" />
        <div class="detail2">
          <div class="text4">
            <a class="wade-warren3">Wade Warren</a>
            <div class="premium2">Premium</div>
          </div>
        </div>
      </div>
    </header>
    <footer
      logo="/logo@2x.png"
      appStore="/app-store@2x.png"
      googlePlay="/google-play@2x.png"
    />
    <BottomBar
      propTop="725px"
      propLeft="348px"
      propWidth="1061px"
      propWidth1="1061px"
      image="/image-1@2x.png"
      icon="/icon-10.svg"
      icon1="/icon-11.svg"
      icon2="/icon-12.svg"
      icon3="/icon-13.svg"
      icon4="/icon-14.svg"
      group="/group.svg"
    />
    <div class="add-subtract">
      <div class="add-subtract-child" />
      <div class="add-container">
        <div class="add-icon">
          <img
            class="icon-park-outlineadd"
            loading="lazy"
            alt=""
            src="/iconparkoutlineadd.svg"
          />
          <div class="vector-wrapper">
            <img
              class="vector-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
              @click="onVectorIconClick"
            />
          </div>
        </div>
        <img
          class="icon-park-outlineadd"
          alt=""
          src="/streamlinesubtractsquare.svg"
        />
      </div>
      <img
        class="icon-park-outlineadd"
        loading="lazy"
        alt=""
        src="/phdotsthreeoutlinelight.svg"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import ArtistInfo from "../components/ArtistInfo.vue";
  import Footer from "../components/Footer.vue";
  import BottomBar from "../components/BottomBar.vue";

  export default defineComponent({
    name: "AddMusic",
    components: { ArtistInfo, Footer, BottomBar },
    methods: {
      onVectorIconClick() {
        this.$router.push("/edit-music-details");
      },
    },
  });
</script>
<style scoped>
  .frame-item {
    align-self: stretch;
    height: 557px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-gray-100);
    display: none;
  }
  .category4 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
  }
  .text3 {
    width: 863.1px;
    border-radius: var(--br-xl);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    z-index: 1;
  }
  .name1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 49px;
    z-index: 1;
  }
  .track-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .song-title-child {
    height: 22px;
    width: 232px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .she-will-be {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 20px;
    display: inline-block;
    min-width: 125px;
    z-index: 4;
  }
  .song-title {
    width: 232px;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini);
    white-space: nowrap;
    z-index: 3;
    color: var(--color-foundation-dark-dark);
  }
  .track-details {
    width: 359px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .track-info {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
    max-width: 100%;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
  }
  .rectangle-group {
    position: absolute;
    top: 102px;
    left: 346px;
    border-radius: var(--br-xl);
    background-color: var(--color-gray-100);
    width: 1062px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) 0px var(--padding-12xl) var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-4xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .music {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 29px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 65px;
    white-space: nowrap;
  }
  .icon4 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover5 {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-6xs);
  }
  .image-icon5 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren3 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium2 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .profile4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover4 {
    position: absolute;
    top: 37px;
    left: 264px;
    width: 1051px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px var(--padding-27xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-xl);
    max-width: 100%;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .add-subtract-child {
    width: 118px;
    height: 560px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-whitesmoke-200);
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .icon-park-outlineadd {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 4;
  }
  .vector-icon {
    height: 48px;
    width: 48px;
    position: relative;
    cursor: pointer;
    z-index: 4;
  }
  .vector-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-8xs);
  }
  .add-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xl);
  }
  .add-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .add-subtract {
    position: absolute;
    top: 100px;
    left: 1290px;
    border-radius: var(--br-xl);
    background-color: var(--color-whitesmoke-200);
    border-right: 1px solid var(--color-black);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-9xl) var(--padding-135xl)
      var(--padding-16xl);
    gap: var(--gap-111xl);
    z-index: 3;
  }
  .add-music {
    width: 100%;
    height: 960px;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 450px) {
    .category4 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .track-details {
      flex-wrap: wrap;
    }

    .add-music {
      height: auto;
      min-height: 960;
    }
  }
</style>
