<template>
  <div class="edit-music-details">
    <section class="rectangle-parent9">
      <div class="frame-child19" />
      <div class="text17">
        <div class="category18">Edit details</div>
      </div>
      <div class="frame-parent5">
        <div class="frame-parent6">
          <div class="name-wrapper">
            <div class="name2">Name:</div>
          </div>
          <div class="rectangle-parent10">
            <div class="frame-child20" />
            <div class="living-my-best4">Living My Best Life</div>
          </div>
        </div>
        <FrameComponent2 />
      </div>
    </section>
    <header class="discover21">
      <div class="discover22">
        <h3 class="music4">Music</h3>
        <img class="icon19" loading="lazy" alt="" src="/icon-7.svg" />
      </div>
      <div class="profile11">
        <img class="image-icon17" loading="lazy" alt="" src="/image@2x.png" />
        <div class="detail10">
          <div class="text18">
            <a class="wade-warren10">Wade Warren</a>
            <div class="premium9">Premium</div>
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
      propWidth="1065.4px"
      propWidth1="1065.4px"
      image="/image-14@2x.png"
      icon="/icon-8.svg"
      icon1="/icon-91.svg"
      icon2="/icon-101.svg"
      icon3="/icon-111.svg"
      icon4="/icon-121.svg"
      group="/group2.svg"
    />
    <div class="add-song-button">
      <div class="add-song-button-child" />
      <div class="music-control">
        <div class="add-music-control">
          <img
            class="icon-park-outlineadd3"
            loading="lazy"
            alt=""
            src="/iconparkoutlineadd1.svg"
            @click="onIconParkOutlineaddClick"
          />
          <div class="heart-icon">
            <img
              class="vector-icon2"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </div>
        <img
          class="icon-park-outlineadd3"
          alt=""
          src="/streamlinesubtractsquare.svg"
          @click="onStreamlinesubtractSquareIconClick"
        />
      </div>
      <img
        class="phdots-three-outline-light-icon3"
        loading="lazy"
        alt=""
        src="/phdotsthreeoutlinelight.svg"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent2 from "../components/FrameComponent2.vue";
  import Footer from "../components/Footer.vue";
  import BottomBar from "../components/BottomBar.vue";

  export default defineComponent({
    name: "EditMusicDetails",
    components: { FrameComponent2, Footer, BottomBar },
    methods: {
      onIconParkOutlineaddClick() {
        this.$router.push("/");
      },
      onStreamlinesubtractSquareIconClick() {
        this.$router.push("/delete-music");
      },
    },
  });
</script>
<style scoped>
  .frame-child19 {
    align-self: stretch;
    height: 557px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-gray-100);
    display: none;
  }
  .category18 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 114px;
  }
  .text17 {
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
  .name2 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 49px;
    z-index: 1;
  }
  .name-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
  }
  .frame-child20 {
    height: 22px;
    width: 232px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .living-my-best4 {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    z-index: 4;
  }
  .rectangle-parent10 {
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
  .frame-parent6 {
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
  .frame-parent5 {
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
  .rectangle-parent9 {
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
  .music4 {
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
  .icon19 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover22 {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-6xs);
  }
  .image-icon17 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren10 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium9 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text18 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail10 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .profile11 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover21 {
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
  .add-song-button-child {
    width: 118px;
    height: 560px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-whitesmoke-200);
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .icon-park-outlineadd3 {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 4;
  }
  .vector-icon2 {
    height: 48px;
    width: 48px;
    position: relative;
    z-index: 4;
  }
  .heart-icon {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-8xs);
  }
  .add-music-control {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xl);
  }
  .music-control {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .phdots-three-outline-light-icon3 {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 4;
  }
  .add-song-button {
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
  .edit-music-details {
    width: 100%;
    height: 960px;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 450px) {
    .category18 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .frame-parent6 {
      flex-wrap: wrap;
    }

    .edit-music-details {
      height: auto;
      min-height: 960;
    }
  }
</style>
