<template>
  <div class="artist-info">
    <div class="artist-details">
      <div class="artist-name-genre">
        <div class="artist-name-album">
          <div class="artist-album">
            <div class="artist1">Artist:</div>
            <div class="album-genre">
              <div class="album">Album:</div>
              <div class="genre1">Genre:</div>
              <div class="mp3-file-parent">
                <div class="mp3-file">MP3 File:</div>
                <div class="image">Image:</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent7">
          <div class="frame-parent8">
            <div class="rectangle-parent13">
              <div class="frame-child23" />
              <div class="maroon-52">Maroon 5</div>
            </div>
            <div class="frame-child24" />
            <div class="frame-child24" />
          </div>
          <div class="frame-parent9">
            <div class="frame-parent10">
              <div class="rectangle-parent14">
                <div class="frame-child26" />
                <div class="delimiter">+</div>
              </div>
              <div class="rectangle-parent15">
                <div class="frame-child26" />
                <div class="div2">-</div>
              </div>
            </div>
            <div class="image-container">
              <div class="image-wrapper-parent">
                <div class="image-wrapper">
                  <img
                    class="image-wrapper-child"
                    alt=""
                    src="/rectangle-36@2x.png"
                  />
                  <img
                    class="image-icon18"
                    loading="lazy"
                    alt=""
                    src="/image1@2x.png"
                  />
                </div>
                <div class="change-button">
                  <div class="button-shape-parent">
                    <div class="button-shape" />
                    <div class="change">Change</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-parent16">
      <div class="frame-child28" />
      <div class="living-my-best5">Save</div>
    </div>
    <div class="scroll">
      <img class="scroll-icon7" loading="lazy" alt="" src="/scroll.svg" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ArtistInfo",
  });
</script>
<style scoped>
  .artist1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 50px;
    z-index: 1;
  }
  .album {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 54px;
    z-index: 1;
  }
  .genre1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 51px;
    z-index: 1;
  }
  .mp3-file {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 69px;
    z-index: 1;
  }
  .image {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 53px;
    z-index: 1;
  }
  .mp3-file-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
  }
  .album-genre {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl-5);
  }
  .artist-album {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lg);
  }
  .artist-name-album {
    width: 69px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
  }
  .frame-child23 {
    height: 22px;
    width: 232px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .maroon-52 {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    display: inline-block;
    min-width: 61px;
    z-index: 4;
  }
  .rectangle-parent13 {
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) var(--padding-sm) 0px;
    white-space: nowrap;
    z-index: 3;
  }
  .frame-child24 {
    align-self: stretch;
    height: 22px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 3;
  }
  .frame-parent8 {
    width: 252px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-mid-5);
  }
  .frame-child26 {
    height: 21px;
    width: 21px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .delimiter {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 10px;
    z-index: 1;
  }
  .rectangle-parent14 {
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-8xs) 0px var(--padding-7xs);
    z-index: 3;
  }
  .div2 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 16px;
    display: inline-block;
    min-width: 9px;
    z-index: 1;
  }
  .rectangle-parent15 {
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-8xs) var(--padding-9xs) var(--padding-6xs);
    z-index: 3;
    font-size: var(--font-size-xl);
  }
  .frame-parent10 {
    width: 268px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-xl);
  }
  .image-wrapper-child {
    height: 200px;
    width: 200px;
    position: relative;
    object-fit: cover;
    display: none;
    min-height: 200px;
  }
  .image-icon18 {
    height: 200px;
    width: 200px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 4;
  }
  .image-wrapper {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-12xs);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 3;
  }
  .button-shape {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-gainsboro);
    width: 80px;
    height: 22px;
    z-index: 3;
  }
  .change {
    position: absolute;
    top: 5px;
    left: 20px;
    letter-spacing: 0.5px;
    line-height: 14px;
    display: inline-block;
    width: 92px;
    height: 14px;
    z-index: 4;
  }
  .button-shape-parent {
    align-self: stretch;
    height: 22px;
    position: relative;
  }
  .change-button {
    width: 112px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
  }
  .image-wrapper-parent {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .image-container {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-11xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-2xs);
  }
  .frame-parent9 {
    align-self: stretch;
    height: 244px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xl);
    max-width: 100%;
    font-size: var(--font-size-base);
    color: var(--color-black);
  }
  .frame-parent7 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    min-width: 217px;
    max-width: 100%;
    font-size: var(--font-size-sm);
  }
  .artist-name-genre {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-19xl);
    max-width: 100%;
  }
  .artist-details {
    width: 441px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-27xl);
    box-sizing: border-box;
    min-height: 415px;
    max-width: 100%;
  }
  .frame-child28 {
    position: absolute;
    top: 0px;
    left: 33px;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-orange-normal);
    width: 179px;
    height: 36px;
    z-index: 1;
  }
  .living-my-best5 {
    position: absolute;
    top: 4px;
    left: 0px;
    letter-spacing: 0.5px;
    line-height: 150%;
    display: inline-block;
    width: 248px;
    z-index: 2;
  }
  .rectangle-parent16 {
    height: 36px;
    width: 339px;
    position: relative;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-foundation-dark-dark);
  }
  .scroll-icon7 {
    width: 0px;
    height: 60px;
    position: relative;
    border-radius: var(--br-xl);
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .scroll {
    height: 307px;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .artist-info {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 900px) {
    .artist-info {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 450px) {
    .div2 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .artist-name-genre {
      flex-wrap: wrap;
    }
  }
</style>
