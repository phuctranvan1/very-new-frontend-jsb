<template>
  <div class="frame-parent12">
    <div class="frame-wrapper2">
      <div class="frame-parent13">
        <div class="frame-wrapper3">
          <div class="artist-parent">
            <div class="artist2">Artist:</div>
            <div class="album-genre1">
              <div class="album1">Album:</div>
              <div class="genre2">Genre:</div>
              <div class="album-image1">
                <div class="mp3-file1">MP3 File:</div>
                <div class="image1">Image:</div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-parent14">
          <div class="frame-parent15">
            <div class="rectangle-parent18">
              <div class="frame-child30" />
              <div class="ben-hector3">Ben Hector</div>
            </div>
            <div class="rectangle-parent19">
              <div class="frame-child30" />
              <div class="pop1">Pop</div>
            </div>
            <div class="frame-child32" />
          </div>
          <div class="frame-parent16">
            <div class="frame-parent17">
              <div class="rectangle-parent20">
                <div class="frame-child33" />
                <div class="div3">+</div>
              </div>
              <div class="frame-parent18">
                <div class="livingbestlifemp3-wrapper">
                  <div class="livingbestlifemp3">Livingbestlife.mp3</div>
                </div>
                <div class="rectangle-parent21">
                  <div class="frame-child33" />
                  <div class="div4">-</div>
                </div>
              </div>
            </div>
            <div class="frame-wrapper4">
              <div class="frame-parent19">
                <div class="rectangle-parent22">
                  <img
                    class="rectangle-icon"
                    alt=""
                    src="/rectangle-36@2x.png"
                  />
                  <img
                    class="imagedefaultcoveralbum9-icon"
                    loading="lazy"
                    alt=""
                    src="/imagedefaultcoveralbum9@2x.png"
                  />
                </div>
                <div class="rectangle-parent23">
                  <div class="frame-child35" />
                  <div class="change1">Change</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rectangle-parent24">
      <div class="frame-child36" />
      <div class="living-my-best8">Save</div>
    </div>
    <div class="scroll-frame">
      <img class="scroll-icon8" loading="lazy" alt="" src="/scroll.svg" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent2",
  });
</script>
<style scoped>
  .artist2 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 50px;
    z-index: 1;
  }
  .album1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 54px;
    z-index: 1;
  }
  .genre2 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 51px;
    z-index: 1;
  }
  .mp3-file1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 69px;
    z-index: 1;
  }
  .image1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 53px;
    z-index: 1;
  }
  .album-image1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
  }
  .album-genre1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl-5);
  }
  .artist-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lg);
  }
  .frame-wrapper3 {
    width: 69px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
  }
  .frame-child30 {
    height: 22px;
    width: 232px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .ben-hector3 {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    display: inline-block;
    min-width: 73px;
    z-index: 4;
  }
  .rectangle-parent18 {
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
  .pop1 {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 17px;
    display: inline-block;
    min-width: 25px;
    z-index: 4;
  }
  .rectangle-parent19 {
    align-self: stretch;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini) var(--padding-12xs);
    z-index: 3;
  }
  .frame-child32 {
    align-self: stretch;
    height: 22px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    z-index: 3;
  }
  .frame-parent15 {
    width: 252px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-mid-5);
  }
  .frame-child33 {
    height: 21px;
    width: 21px;
    position: relative;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
  }
  .div3 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 10px;
    z-index: 1;
  }
  .rectangle-parent20 {
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
  .livingbestlifemp3 {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.01em;
    line-height: 18px;
    z-index: 3;
  }
  .livingbestlifemp3-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .div4 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 16px;
    display: inline-block;
    min-width: 9px;
    z-index: 1;
  }
  .rectangle-parent21 {
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
  .frame-parent18 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    font-size: var(--font-size-sm);
  }
  .frame-parent17 {
    width: 268px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-mini);
  }
  .rectangle-icon {
    height: 200px;
    width: 200px;
    position: relative;
    object-fit: cover;
    display: none;
    min-height: 200px;
  }
  .imagedefaultcoveralbum9-icon {
    height: 200px;
    width: 200px;
    position: relative;
    object-fit: cover;
    z-index: 4;
  }
  .rectangle-parent22 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 3;
  }
  .frame-child35 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-3xs);
    background-color: var(--color-gainsboro);
    width: 80px;
    height: 22px;
    z-index: 3;
  }
  .change1 {
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
  .rectangle-parent23 {
    height: 22px;
    width: 112px;
    position: relative;
  }
  .frame-parent19 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .frame-wrapper4 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-11xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-2xs);
  }
  .frame-parent16 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl);
    max-width: 100%;
    font-size: var(--font-size-base);
    color: var(--color-black);
  }
  .frame-parent14 {
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
  .frame-parent13 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-19xl);
    max-width: 100%;
  }
  .frame-wrapper2 {
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
  .frame-child36 {
    position: absolute;
    top: 0px;
    left: 33px;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-orange-normal);
    width: 179px;
    height: 36px;
    z-index: 1;
  }
  .living-my-best8 {
    position: absolute;
    top: 4px;
    left: 0px;
    letter-spacing: 0.5px;
    line-height: 150%;
    display: inline-block;
    width: 248px;
    z-index: 2;
  }
  .rectangle-parent24 {
    height: 36px;
    width: 339px;
    position: relative;
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-foundation-dark-dark);
  }
  .scroll-icon8 {
    width: 0px;
    height: 60px;
    position: relative;
    border-radius: var(--br-xl);
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .scroll-frame {
    height: 307px;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-parent12 {
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
    .frame-parent12 {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 450px) {
    .div4 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .frame-parent13 {
      flex-wrap: wrap;
    }
  }
</style>
