<template>
  <div class="filter">
    <div class="charts-50" />
    <Header1 />
    <main class="side-panel">
      <section class="panel-content">
        <div class="panel-main">
          <div class="discover8">
            <div class="discover9">
              <div class="search">Search</div>
              <img class="icon6" alt="" src="/icon-7.svg" />
            </div>
            <div class="profile6">
              <img
                class="image-icon8"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div class="detail4">
                <div class="text7">
                  <a class="wade-warren5">Wade Warren</a>
                  <div class="premium4">Premium</div>
                </div>
                <img class="icon6" loading="lazy" alt="" />
              </div>
            </div>
          </div>
          <div class="category-list-parent">
            <div class="category-list">
              <div class="category-list-child" />
              <div class="category-item">
                <div class="category6">Enter your search here...</div>
              </div>
              <div class="filter-controls-parent">
                <div class="filter-controls">
                  <img class="ionfilter-icon" alt="" src="/ionfilter.svg" />
                </div>
                <img class="keyboardfill-icon" alt="" src="/keyboardfill.svg" />
              </div>
            </div>
            <div class="artist-list-parent">
              <div class="artist-list">
                <div class="see-all-parent">
                  <div class="see-all2">See All</div>
                  <div class="ben-hector">Ben Hector</div>
                  <div class="frame-child3" />
                  <div class="artist-wrapper">
                    <div class="artist">Artist</div>
                  </div>
                  <div class="genre-list-parent">
                    <div class="genre-list">
                      <div class="genre-items">
                        <div class="genre-icons" />
                        <a class="pop">Maroon 5</a>
                      </div>
                      <div class="genre-items">
                        <div class="genre-icons" />
                        <a class="ben-hector1">Ben Hector</a>
                      </div>
                      <div class="genre-items">
                        <div class="genre-icons" />
                        <a class="elm-belhold">Elm Belhold</a>
                      </div>
                    </div>
                    <div class="artist-wrapper">
                      <div class="artist">Genre</div>
                    </div>
                  </div>
                  <div class="genre-options">
                    <div class="genre-items">
                      <div class="genre-icons" />
                      <a class="pop">Pop</a>
                    </div>
                    <div class="genre-items">
                      <div class="genre-icons" />
                      <a class="ballad">Ballad</a>
                    </div>
                    <div class="genre-items">
                      <div class="genre-icons" />
                      <a class="rock">
                        <p class="rock1">Rock</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-div">
                <div class="frame-child4" />
                <div class="category7">Search Result</div>
                <div class="scrollbar">
                  <img
                    class="scroll-icon2"
                    loading="lazy"
                    alt=""
                    src="/scroll.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent image="/image-1@2x.png" group="/group.svg" />
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Header1 from "../components/Header1.vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "Filter",
    components: { Header1, FrameComponent },
  });
</script>
<style scoped>
  .charts-50 {
    height: 44px;
    width: 1008px;
    display: none;
    max-width: 100%;
  }
  .search {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 29px;
    display: inline-block;
    min-width: 77px;
  }
  .icon6 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-159xl) 0px 0px;
    gap: var(--gap-6xs);
  }
  .image-icon8 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren5 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium4 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text7 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xl);
  }
  .profile6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover8 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .category-list-child {
    height: 67px;
    width: 1047px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .category6 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    z-index: 2;
  }
  .category-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-mid) 0px 0px;
  }
  .ionfilter-icon {
    width: 48px;
    height: 48px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 2;
  }
  .filter-controls {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-11xs);
  }
  .keyboardfill-icon {
    height: 55px;
    width: 55px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 2;
  }
  .filter-controls-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 28px;
  }
  .category-list {
    align-self: stretch;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-12xs) var(--padding-5xl) var(--padding-6xs) 37px;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .see-all2 {
    width: 81px;
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 120%;
    color: var(--color-foundation-dark-lighter);
    text-align: right;
    display: none;
  }
  .ben-hector {
    position: relative;
    letter-spacing: 1px;
    display: none;
    min-width: 68px;
  }
  .frame-child3 {
    width: 275px;
    height: 257px;
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .artist {
    flex: 1;
    position: relative;
    letter-spacing: 1px;
    z-index: 1;
  }
  .artist-wrapper {
    width: 49px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-10xs);
    box-sizing: border-box;
    font-size: var(--font-size-xs);
    color: var(--color-black);
  }
  .genre-icons {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-5xs);
    background-color: var(--color-gainsboro);
    width: 68px;
    height: 16.2px;
    z-index: 1;
  }
  .genre-items {
    height: 21.2px;
    flex: 1;
    position: relative;
  }
  .ben-hector1 {
    text-decoration: none;
    position: absolute;
    top: 0px;
    left: 3px;
    letter-spacing: 1px;
    color: inherit;
    display: inline-block;
    width: 68px;
    height: 21.2px;
    min-width: 68px;
    z-index: 2;
  }
  .elm-belhold {
    text-decoration: none;
    position: absolute;
    top: 0px;
    left: 2px;
    letter-spacing: 1px;
    color: inherit;
    display: inline-block;
    width: 68px;
    height: 21.2px;
    min-width: 68px;
    z-index: 2;
  }
  .genre-list {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5.5px;
  }
  .genre-list-parent {
    width: 226px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 7.1px;
  }
  .pop {
    text-decoration: none;
    position: absolute;
    top: 0px;
    left: 6px;
    letter-spacing: 1px;
    color: inherit;
    display: inline-block;
    width: 68px;
    height: 21.2px;
    z-index: 2;
  }
  .ballad {
    text-decoration: none;
    position: absolute;
    top: 0px;
    left: 5px;
    letter-spacing: 1px;
    color: inherit;
    display: inline-block;
    width: 68px;
    height: 21.2px;
    z-index: 2;
  }
  .rock1 {
    margin: 0;
  }
  .rock {
    text-decoration: none;
    position: absolute;
    top: 0px;
    left: 4px;
    letter-spacing: 1px;
    color: inherit;
    display: inline-block;
    width: 68px;
    height: 21.2px;
    z-index: 2;
  }
  .genre-options {
    width: 228px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4.5px;
  }
  .see-all-parent {
    flex: 1;
    border-radius: var(--br-5xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-4xs) var(--padding-3xs) 143px;
    gap: 6.4px;
    z-index: 2;
  }
  .artist-list {
    width: 285px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-8xs);
    box-sizing: border-box;
  }
  .frame-child4 {
    width: 1050px;
    height: 348px;
    position: relative;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .category7 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    z-index: 1;
  }
  .scroll-icon2 {
    height: 60px;
    width: 0px;
    position: relative;
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .scrollbar {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .frame-div {
    align-self: stretch;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) 0px var(--padding-145xl) var(--padding-10xl);
    box-sizing: border-box;
    gap: 70px;
    max-width: 100%;
    margin-top: -238px;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
  }
  .artist-list-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    max-width: 100%;
    font-size: var(--font-size-3xs);
    color: var(--color-gray-500);
  }
  .category-list-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-xl);
  }
  .panel-main {
    width: 1051px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-25xl);
    max-width: 100%;
  }
  .panel-content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-135xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .side-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-25xl) 0px 0px;
    box-sizing: border-box;
    max-width: calc(100% - 346px);
  }
  .filter {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-13xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-21xl);
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1050px) {
    .frame-div {
      gap: var(--gap-16xl);
    }

    .panel-content {
      gap: var(--gap-58xl);
    }
  }
  @media screen and (max-width: 1000px) {
    .side-panel {
      padding-top: var(--padding-10xl);
      box-sizing: border-box;
      max-width: 100%;
    }

    .filter {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 725px) {
    .category-list {
      flex-wrap: wrap;
    }

    .frame-div {
      gap: var(--gap-mid);
    }

    .panel-main {
      gap: var(--gap-3xl);
    }

    .panel-content {
      gap: var(--gap-19xl);
    }

    .filter {
      gap: var(--gap-xl);
    }
  }
  @media screen and (max-width: 450px) {
    .discover9 {
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .category6 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category7 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .panel-content {
      gap: var(--gap-lgi);
    }

    .side-panel {
      padding-top: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
