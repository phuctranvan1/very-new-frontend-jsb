<template>
  <div class="delete-music">
    <section class="group-section">
      <div class="frame-child5" />
      <div class="text8">
        <div class="category8">List of Music</div>
        <div class="see-all-button2">
          <div class="see-all3">See All</div>
        </div>
      </div>
      <form class="card-container1">
        <div class="card-container-inner">
          <div class="card-background-parent">
            <CardImageBg
              propPadding="unset"
              propWidth="938px"
              propRight="-733.2px"
              image="/image2@2x.png"
              sheWillBeLoved="She will be loved"
              propMinWidth="124px"
              maroon5="Maroon 5"
              propMinWidth1="61px"
            /><CardImageBg
              propPadding="0px 5px 0px 0px"
              propWidth="931.5px"
              propRight="-726.7px"
              image="/image-12@2x.png"
              sheWillBeLoved="Dumb Little Bug"
              propMinWidth="119px"
              maroon5="Eld"
              propMinWidth1="21px"
            />
          </div>
        </div>
        <div class="play-count-container">
          <div class="play-count-container-inner">
            <div class="frame-parent">
              <div class="frame-group">
                <div class="rectangle-parent3">
                  <div class="frame-child6" />
                  <div class="total-play3">
                    <div class="vuesaxlinearmusicnote-container">
                      <img
                        class="vuesaxlinearmusicnote-icon3"
                        alt=""
                        src="/vuesaxlinearmusicnote.svg"
                      />
                    </div>
                    <div class="k3">120k</div>
                  </div>
                </div>
                <img
                  class="frame-child7"
                  loading="lazy"
                  alt=""
                  src="/group-9.svg"
                />
                <div class="frame-wrapper">
                  <img
                    class="duplicate-spacer-child"
                    loading="lazy"
                    alt=""
                    src="/group-11.svg"
                  />
                </div>
              </div>
              <div class="duplicate-container">
                <div class="frame-container">
                  <div class="rectangle-parent3">
                    <div class="frame-child6" />
                    <div class="total-play3">
                      <div class="vuesaxlinearmusicnote-container">
                        <img
                          class="vuesaxlinearmusicnote-icon3"
                          alt=""
                          src="/vuesaxlinearmusicnote.svg"
                        />
                      </div>
                      <div class="k3">120k</div>
                    </div>
                  </div>
                  <img
                    class="frame-child7"
                    loading="lazy"
                    alt=""
                    src="/group-9-1.svg"
                  />
                  <div class="frame-wrapper">
                    <img
                      class="duplicate-spacer-child"
                      loading="lazy"
                      alt=""
                      src="/group-11-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="scroll-icon3" alt="" src="/scroll.svg" />
        </div>
      </form>
    </section>
    <header class="discover10">
      <div class="discover11">
        <h3 class="music3">Music</h3>
        <img class="icon8" loading="lazy" alt="" src="/icon-7.svg" />
      </div>
      <div class="profile7">
        <img class="image-icon9" loading="lazy" alt="" src="/image@2x.png" />
        <div class="detail5">
          <div class="text9">
            <a class="wade-warren6">Wade Warren</a>
            <div class="premium5">Premium</div>
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
    <div class="action-buttons">
      <div class="action-buttons-child" />
      <div class="add-button-container">
        <div class="icon-park-outlineadd-parent">
          <img
            class="icon-park-outlineadd2"
            loading="lazy"
            alt=""
            src="/iconparkoutlineadd1.svg"
          />
          <div class="playback-slider-wrapper">
            <img
              class="playback-slider-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        <img
          class="icon-park-outlineadd2"
          alt=""
          src="/streamlinesubtractsquare1.svg"
        />
      </div>
      <img
        class="icon-park-outlineadd2"
        loading="lazy"
        alt=""
        src="/phdotsthreeoutlinelight.svg"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import CardImageBg from "../components/CardImageBg.vue";
  import Footer from "../components/Footer.vue";
  import BottomBar from "../components/BottomBar.vue";

  export default defineComponent({
    name: "DeleteMusic",
    components: { CardImageBg, Footer, BottomBar },
  });
</script>
<style scoped>
  .frame-child5 {
    align-self: stretch;
    height: 557px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-gray-100);
    display: none;
  }
  .category8 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 128px;
    flex-shrink: 0;
  }
  .see-all3 {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    flex-shrink: 0;
  }
  .see-all-button2 {
    width: 278px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
    box-sizing: border-box;
    flex-shrink: 0;
    text-align: right;
    font-size: var(--font-size-sm);
    color: var(--color-foundation-dark-lighter);
  }
  .text8 {
    width: 863.1px;
    border-radius: var(--br-xl);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-xl);
    max-width: 100%;
    z-index: 1;
  }
  .card-background-parent {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-33xl);
  }
  .card-container-inner {
    height: 246px;
    width: 250.1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xl) 0px 0px;
    box-sizing: border-box;
  }
  .frame-child6 {
    height: 32px;
    width: 84.1px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-gray-400);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .vuesaxlinearmusicnote-icon3 {
    width: 16px;
    height: 16px;
    position: relative;
  }
  .vuesaxlinearmusicnote-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .k3 {
    position: relative;
    font-size: var(--font-size-xs);
    letter-spacing: 1px;
    font-family: var(--font-baloo-da);
    color: var(--color-foundation-dark-lighter);
    text-align: left;
    display: inline-block;
    min-width: 30px;
  }
  .total-play3 {
    border-radius: var(--br-xl);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xs);
    z-index: 1;
  }
  .rectangle-parent3 {
    width: 84.1px;
    border-radius: var(--br-xl);
    background-color: var(--color-gray-400);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-xs);
    z-index: 2;
  }
  .frame-child7 {
    height: 32px;
    width: 34.5px;
    position: relative;
    z-index: 2;
  }
  .frame-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-12xs);
  }
  .frame-group {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px var(--padding-12xs) 0px 0px;
    gap: var(--gap-xl);
  }
  .duplicate-spacer-child {
    width: 34.5px;
    height: 32px;
    position: relative;
    z-index: 2;
  }
  .frame-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .duplicate-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
  }
  .frame-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 106px;
  }
  .play-count-container-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-mini);
    box-sizing: border-box;
    min-width: 132px;
  }
  .scroll-icon3 {
    height: 60px;
    width: 0px;
    position: relative;
    border-radius: var(--br-xl);
    object-fit: contain;
    mix-blend-mode: normal;
    z-index: 1;
  }
  .play-count-container {
    width: 391.4px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-169xl-7);
    max-width: 100%;
  }
  .card-container1 {
    margin: 0;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .group-section {
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
    padding: var(--padding-11xl) 0px 219px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-19xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .music3 {
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
  .icon8 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover11 {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-6xs);
  }
  .image-icon9 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren6 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium5 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text9 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .profile7 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover10 {
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
  .action-buttons-child {
    width: 118px;
    height: 560px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-whitesmoke-200);
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .icon-park-outlineadd2 {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 4;
  }
  .playback-slider-icon {
    height: 48px;
    width: 48px;
    position: relative;
    z-index: 4;
  }
  .playback-slider-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-8xs);
  }
  .icon-park-outlineadd-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xl);
  }
  .add-button-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .action-buttons {
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
  .delete-music {
    width: 100%;
    height: 960px;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 675px) {
    .text8 {
      flex-wrap: wrap;
    }

    .card-container1 {
      flex-wrap: wrap;
    }

    .delete-music {
      height: auto;
      min-height: 960;
    }
  }
  @media screen and (max-width: 450px) {
    .category8 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .play-count-container {
      flex-wrap: wrap;
    }
  }
</style>
