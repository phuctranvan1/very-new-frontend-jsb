<template>
  <div class="settings">
    <section class="rectangle-parent5">
      <div class="frame-child11" />
      <div class="text11">
        <div class="category10">Settings</div>
      </div>
      <div class="frame-wrapper1">
        <div class="frame-parent1">
          <div class="old-password-input-parent">
            <div class="old-password-input">
              <div class="old-password-box">
                <div class="password-change">
                  <div class="category11">Choose mode:</div>
                  <div class="new-password-input-fields">
                    <div class="instruction-details">
                      <div class="password-icon-instances" />
                    </div>
                    <div class="category12">Light</div>
                  </div>
                  <div class="cancel-button-parent">
                    <div class="instruction-details">
                      <div class="cancel-button-child" />
                    </div>
                    <div class="category13">Dark</div>
                  </div>
                </div>
                <div class="category-parent">
                  <div class="category14">Change Password</div>
                  <div class="new-password-input">
                    <div class="new-password-box">
                      <div class="instruction-elements">
                        <div class="new-password-items">
                          <div class="old-password">Old Password:</div>
                        </div>
                        <div class="new-password-placeholders">
                          <div class="new-password-placeholders-child" />
                          <div class="enter-your-old">
                            Enter your old password ...
                          </div>
                        </div>
                      </div>
                      <div class="instruction-elements">
                        <div class="new-password-wrapper">
                          <div class="new-password">New Password:</div>
                        </div>
                        <div class="new-password-placeholders">
                          <div class="new-password-placeholders-child" />
                          <div class="enter-your-old">
                            Enter your new password ...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="new-password-input">
                    <div class="confirm-input">
                      <div class="new-password-items">
                        <div class="confirm-new-password">
                          Confirm New Password:
                        </div>
                      </div>
                      <div class="confirm-password-input">
                        <div class="new-password-placeholders-child" />
                        <div class="enter-your-old">
                          Confirm your new password ...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rectangle-parent7">
              <div class="frame-child13" />
              <div class="category15">Save</div>
            </div>
          </div>
          <div class="scroll-wrapper">
            <img
              class="scroll-icon5"
              loading="lazy"
              alt=""
              src="/scroll1.svg"
            />
          </div>
        </div>
      </div>
    </section>
    <header class="discover14">
      <div class="discover15">
        <h3 class="settings1">Settings</h3>
        <img class="icon11" loading="lazy" alt="" src="/icon1.svg" />
      </div>
      <div class="profile9">
        <img class="image-icon11" loading="lazy" alt="" src="/image@2x.png" />
        <div class="detail7">
          <div class="text12">
            <a class="wade-warren8">Wade Warren</a>
            <div class="premium7">Premium</div>
          </div>
        </div>
      </div>
    </header>
    <FrameComponent1 /><BottomBar
      propTop="718px"
      propLeft="334px"
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
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FrameComponent1 from "../components/FrameComponent1.vue";
  import BottomBar from "../components/BottomBar.vue";

  export default defineComponent({
    name: "Settings",
    components: { FrameComponent1, BottomBar },
  });
</script>
<style scoped>
  .frame-child11 {
    width: 1044px;
    height: 578px;
    position: relative;
    border-radius: var(--br-5xl);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .category10 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 84px;
  }
  .text11 {
    background-color: var(--color-foundation-surface-white);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-8xs) 0px 0px;
    z-index: 1;
  }
  .category11 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
  }
  .password-icon-instances {
    width: 18px;
    height: 18px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-black);
    border: 0px solid var(--color-black);
    box-sizing: border-box;
  }
  .instruction-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .category12 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 52px;
  }
  .new-password-input-fields {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xl) 0px 0px;
    gap: var(--gap-xl);
  }
  .cancel-button-child {
    width: 18px;
    height: 18px;
    position: relative;
    border-radius: 50%;
    background-color: var(--color-foundation-surface-white);
    border: 0px solid var(--color-black);
    box-sizing: border-box;
  }
  .category13 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 48px;
  }
  .cancel-button-parent {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-smi);
  }
  .password-change {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .category14 {
    position: relative;
    font-size: var(--font-size-xl);
    letter-spacing: 1px;
    line-height: 120%;
    color: var(--color-foundation-dark-dark);
  }
  .old-password {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 111px;
  }
  .new-password-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .enter-your-old {
    flex: 1;
    position: relative;
    letter-spacing: 1px;
    line-height: 14px;
    z-index: 1;
  }
  .instruction-elements {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .new-password {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 118px;
  }
  .new-password-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xs) 0px 0px;
  }
  .new-password-placeholders-child {
    height: 22px;
    width: 331px;
    position: relative;
    border-radius: var(--br-8xs);
    background-color: var(--color-gray-300);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .new-password-placeholders {
    width: 333px;
    border-radius: var(--br-8xs);
    background-color: var(--color-gray-300);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px var(--padding-12xs) var(--padding-2xs);
    max-width: 100%;
    font-size: var(--font-size-3xs);
    color: var(--color-lightgray);
  }
  .new-password-box {
    width: 540px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    max-width: 100%;
  }
  .new-password-input {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
  }
  .confirm-new-password {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
  }
  .confirm-password-input {
    flex: 1;
    border-radius: var(--br-8xs);
    background-color: var(--color-gray-300);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px var(--padding-12xs) var(--padding-2xs);
    min-width: 216px;
    max-width: 100%;
    font-size: var(--font-size-3xs);
    color: var(--color-lightgray);
  }
  .confirm-input {
    width: 540px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xl);
    max-width: 100%;
  }
  .category-parent {
    width: 592px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 14px;
    max-width: 100%;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
  }
  .old-password-box {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-27xl);
    max-width: 100%;
  }
  .old-password-input {
    width: 639px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 96px;
    box-sizing: border-box;
    min-height: 301px;
    max-width: 100%;
  }
  .frame-child13 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-orange-normal);
    width: 150px;
    height: 41px;
  }
  .category15 {
    position: absolute;
    top: 9px;
    left: 52px;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    width: 110px;
    z-index: 1;
  }
  .rectangle-parent7 {
    height: 41px;
    width: 162px;
    position: relative;
  }
  .old-password-input-parent {
    flex: 1;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    padding: var(--padding-8xl) var(--padding-10xl) 49px 36px;
    max-width: 100%;
    gap: var(--gap-xl);
    z-index: 1;
  }
  .scroll-icon5 {
    width: 0px;
    flex: 1;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: normal;
    z-index: 1;
  }
  .scroll-wrapper {
    height: 195px;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 135px 0px 0px;
    box-sizing: border-box;
  }
  .frame-parent1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 0px var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
    gap: 24.2px;
    max-width: 100%;
  }
  .frame-wrapper1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px 8px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .rectangle-parent5 {
    position: absolute;
    top: 119px;
    left: 348px;
    border-radius: var(--br-5xl);
    background-color: var(--color-foundation-surface-white);
    width: 1044px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-6xs) 130px 23px;
    box-sizing: border-box;
    gap: var(--gap-11xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .settings1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 29px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 94px;
    white-space: nowrap;
  }
  .icon11 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover15 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 80px;
    gap: var(--gap-6xs);
  }
  .image-icon11 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren8 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium7 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text12 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail7 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .profile9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover14 {
    position: absolute;
    top: 37px;
    left: 276px;
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
  .settings {
    width: 100%;
    height: 960px;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 925px) {
    .old-password-input-parent {
      flex-wrap: wrap;
      min-width: 100%;
    }

    .settings {
      height: auto;
      min-height: 960;
    }
  }
  @media screen and (max-width: 700px) {
    .password-change {
      flex-wrap: wrap;
    }

    .instruction-elements {
      flex-wrap: wrap;
    }

    .confirm-input {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 450px) {
    .category10 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category11 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category12 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category13 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category14 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category15 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }
  }
</style>
