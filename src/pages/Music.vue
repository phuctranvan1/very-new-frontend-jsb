<template>
  <div class="music1">
    <section class="rectangle-container">
      <div class="frame-inner" />
      <div class="text5">
        <div class="category5">List of Music</div>
        <div class="see-all-button1">
          <div class="see-all1">See All</div>
        </div>
      </div>
      <form class="music-cards">
        <div class="first-card-wrapper">
          <div class="first-card">
            <CardImageBg
              image="/image2@2x.png"
              sheWillBeLoved="She will be loved"
              maroon5="Maroon 5"
            /><CardImageBg
              propPadding="0px 18px 0px 0px"
              propWidth="931.5px"
              propRight="-713.7px"
              image="/image-12@2x.png"
              sheWillBeLoved="Dumb Little Bug"
              propMinWidth="119px"
              maroon5="Eld"
              propMinWidth1="21px"
            />
            <div class="second-card">
              <div class="bg-wrapper">
                <div class="bg" />
              </div>
              <div class="card">
                <img
                  class="image-icon6"
                  loading="lazy"
                  alt=""
                  src="/image-21@2x.png"
                />
                <div class="lifestyle-caption">
                  <div class="living-my-best-life-parent">
                    <div class="living-my-best2">Living my best life</div>
                    <div class="user2">User</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="music-player-parent">
          <div class="music-player">
            <div class="player-right">
              <div class="player-control">
                <div class="group-div">
                  <div class="rectangle-div" />
                  <div class="total-play">
                    <div class="progress-bar">
                      <img
                        class="vuesaxlinearmusicnote-icon"
                        alt=""
                        src="/vuesaxlinearmusicnote.svg"
                      />
                    </div>
                    <div class="k">120k</div>
                  </div>
                </div>
                <img
                  class="player-control-child"
                  loading="lazy"
                  alt=""
                  src="/group-9.svg"
                />
                <div class="empty-control-button">
                  <img
                    class="empty-control-button-child"
                    loading="lazy"
                    alt=""
                    src="/group-11.svg"
                  />
                </div>
              </div>
            </div>
            <div class="player-left">
              <div class="group-div">
                <div class="rectangle-div" />
                <div class="total-play">
                  <div class="progress-bar">
                    <img
                      class="vuesaxlinearmusicnote-icon"
                      alt=""
                      src="/vuesaxlinearmusicnote.svg"
                    />
                  </div>
                  <div class="k">120k</div>
                </div>
              </div>
              <img
                class="player-control-child"
                loading="lazy"
                alt=""
                src="/group-9-1.svg"
              />
              <div class="empty-control-button">
                <img
                  class="empty-control-button-child"
                  loading="lazy"
                  alt=""
                  src="/group-11-1.svg"
                />
              </div>
            </div>
            <div class="player-left">
              <div class="group-div">
                <div class="rectangle-div" />
                <div class="total-play">
                  <div class="progress-bar">
                    <img
                      class="vuesaxlinearmusicnote-icon"
                      alt=""
                      src="/vuesaxlinearmusicnote.svg"
                    />
                  </div>
                  <div class="k">120k</div>
                </div>
              </div>
              <img
                class="player-control-child"
                loading="lazy"
                alt=""
                src="/group-9-1.svg"
              />
              <div class="empty-control-button">
                <img
                  class="empty-control-button-child"
                  loading="lazy"
                  alt=""
                  src="/group-11-1.svg"
                />
              </div>
            </div>
          </div>
          <div class="music-scroll">
            <img class="scroll-icon1" alt="" src="/scroll.svg" />
          </div>
        </div>
      </form>
    </section>
    <header class="discover6">
      <div class="discover7">
        <h3 class="music2">Music</h3>
        <img class="icon5" loading="lazy" alt="" src="/icon-7.svg" />
      </div>
      <div class="profile5">
        <img class="image-icon7" loading="lazy" alt="" src="/image@2x.png" />
        <div class="detail3">
          <div class="text6">
            <a class="wade-warren4">Wade Warren</a>
            <div class="premium3">Premium</div>
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
      image="/image-1@2x.png"
      icon="/icon-10.svg"
      icon1="/icon-11.svg"
      icon2="/icon-12.svg"
      icon3="/icon-13.svg"
      icon4="/icon-14.svg"
      group="/group.svg"
    />
    <div class="add-remove-controls">
      <div class="add-remove-controls-child" />
      <div class="add-track-controls">
        <div class="add-button">
          <img
            class="icon-park-outlineadd1"
            loading="lazy"
            alt=""
            src="/iconparkoutlineadd1.svg"
            @click="onIconParkOutlineaddClick"
          />
          <div class="vector-container">
            <img class="vector-icon1" loading="lazy" alt="" src="/vector.svg" />
          </div>
        </div>
        <img
          class="icon-park-outlineadd1"
          alt=""
          src="/streamlinesubtractsquare.svg"
          @click="onStreamlinesubtractSquareIconClick"
        />
      </div>
      <img
        class="phdots-three-outline-light-icon1"
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
    name: "Music",
    components: { CardImageBg, Footer, BottomBar },
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
  .frame-inner {
    align-self: stretch;
    height: 557px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-gray-100);
    display: none;
  }
  .category5 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 128px;
    flex-shrink: 0;
  }
  .see-all1 {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    flex-shrink: 0;
  }
  .see-all-button1 {
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
  .text5 {
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
  .bg {
    position: absolute;
    top: 0px;
    left: 0px;
    box-shadow: 0px 0px 40px rgba(24, 12, 5, 0.02);
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: none;
  }
  .bg-wrapper {
    height: 100px;
    width: 832.2px;
    position: absolute;
    margin: 0 !important;
    top: calc(50% - 50px);
    right: -614.4px;
    box-shadow: 0px 0px 40px rgba(24, 12, 5, 0.02);
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 1;
  }
  .image-icon6 {
    height: 84px;
    width: 84px;
    position: relative;
    border-radius: var(--br-base);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .living-my-best2 {
    position: relative;
    font-size: var(--font-size-base);
    letter-spacing: 0.01em;
    line-height: 120%;
    font-family: var(--font-baloo-da);
    color: var(--color-foundation-dark-dark);
    text-align: left;
  }
  .user2 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 17px;
    font-family: var(--font-baloo-da);
    color: var(--color-foundation-dark-lighter);
    text-align: left;
    display: inline-block;
    min-width: 31px;
  }
  .living-my-best-life-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .lifestyle-caption {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xl) 0px 0px;
  }
  .card {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-xl);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    gap: var(--gap-5xl);
    z-index: 2;
  }
  .second-card {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .first-card {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-33xl);
  }
  .first-card-wrapper {
    height: 382px;
    width: 263.1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xl) 0px 0px;
    box-sizing: border-box;
  }
  .rectangle-div {
    height: 32px;
    width: 84.1px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-gray-400);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .vuesaxlinearmusicnote-icon {
    width: 16px;
    height: 16px;
    position: relative;
  }
  .progress-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .k {
    position: relative;
    font-size: var(--font-size-xs);
    letter-spacing: 1px;
    font-family: var(--font-baloo-da);
    color: var(--color-foundation-dark-lighter);
    text-align: left;
    display: inline-block;
    min-width: 30px;
  }
  .total-play {
    border-radius: var(--br-xl);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xs);
    z-index: 1;
  }
  .group-div {
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
  .player-control-child {
    height: 32px;
    width: 34.5px;
    position: relative;
    z-index: 2;
  }
  .empty-control-button-child {
    width: 34.5px;
    height: 32px;
    position: relative;
    z-index: 2;
  }
  .empty-control-button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-12xs);
  }
  .player-control {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .player-right {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-12xs) 0px 0px;
  }
  .player-left {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .music-player {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 104px;
    min-width: 132px;
  }
  .scroll-icon1 {
    width: 0px;
    height: 60px;
    position: relative;
    border-radius: var(--br-xl);
    object-fit: contain;
    mix-blend-mode: normal;
    z-index: 1;
  }
  .music-scroll {
    height: 180px;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .music-player-parent {
    width: 391.4px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-169xl-7);
    max-width: 100%;
  }
  .music-cards {
    margin: 0;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .rectangle-container {
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
    padding: var(--padding-11xl) 0px 83px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-19xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .music2 {
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
  .icon5 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover7 {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-6xs);
  }
  .image-icon7 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren4 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium3 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .profile5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover6 {
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
  .add-remove-controls-child {
    width: 118px;
    height: 560px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-whitesmoke-200);
    border-right: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .icon-park-outlineadd1 {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 4;
  }
  .vector-icon1 {
    height: 48px;
    width: 48px;
    position: relative;
    z-index: 4;
  }
  .vector-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-8xs);
  }
  .add-button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-6xl);
  }
  .add-track-controls {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-16xl);
  }
  .phdots-three-outline-light-icon1 {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 4;
  }
  .add-remove-controls {
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
  .music1 {
    width: 100%;
    height: 960px;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 900px) {
    .music-cards {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 675px) {
    .text5 {
      flex-wrap: wrap;
    }

    .music1 {
      height: auto;
      min-height: 960;
    }
  }
  @media screen and (max-width: 450px) {
    .category5 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .music-player-parent {
      flex-wrap: wrap;
    }
  }
</style>
