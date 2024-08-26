<template>
  <div class="search1">
    <div class="frame3">
      <img
        class="logo-icon2"
        loading="lazy"
        alt=""
        src="/logo@2x.png"
        @click="onLogoImageClick"
      />
      <div class="frame4">
        <div class="frame5">
          <Menu1
            icon1="/icon-15.svg"
            :onFollowingContainerClick="onFollowingContainerClick"
            icon4="/icon-51.svg"
          /><General
            :onSettingsContainerClick="onSettingsContainerClick"
            icon="/icon-5.svg"
            propColor="#99938f"
          />
        </div>
        <MobileStream
          appStore="/app-store@2x.png"
          googlePlay="/google-play@2x.png"
        />
      </div>
    </div>
    <div class="charts-501" />
    <main class="search-inner">
      <section class="frame-section">
        <div class="discover-group">
          <div class="discover12">
            <div class="discover13">
              <div class="search2">Search</div>
              <img class="icon9" alt="" src="/icon-7.svg" />
            </div>
            <div class="profile8">
              <img
                class="image-icon10"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div class="detail6">
                <div class="text10">
                  <a class="wade-warren7">Wade Warren</a>
                  <div class="premium6">Premium</div>
                </div>
                <img class="icon9" loading="lazy" alt="" />
              </div>
            </div>
          </div>
          <div class="category-header-parent">
            <v-text-field
              class="category-header-vtextfield"
              color="#080809"
              clearable
              variant="underlined"
              :append-inner-icon="showPasswordEr ? 'mdi-eye' : 'mdi-eye-off'"
              v-model="passwordEr"
              :type="'undefined'"
              @click:appendInner="togglePasswordVisibilityEr"
              name="Search"
              placeholder="Enter your search here"
            />
            <div class="category-list1">
              <div class="category-item1">
                <div class="frame6">
                  <div class="category9">Search Result</div>
                </div>
              </div>
              <div class="see-all-button3">
                <div class="see-all4">See All</div>
              </div>
              <div class="category-scroll">
                <img
                  class="scroll-icon4"
                  loading="lazy"
                  alt=""
                  src="/scroll.svg"
                />
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
  import Menu1 from "../components/Menu1.vue";
  import General from "../components/General.vue";
  import MobileStream from "../components/MobileStream.vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "Search",
    data() {
      return { showPasswordEr: false, passwordEr: "" };
    },
    components: { Menu1, General, MobileStream, FrameComponent },
    methods: {
      togglePasswordVisibilityEr() {
        this.showPasswordEr = !this.showPasswordEr;
      },
      onFollowingContainerClick() {
        this.$router.push("/profile");
      },
      onSettingsContainerClick() {
        this.$router.push("/settings");
      },
      onLogoImageClick() {
        this.$router.push("/discover");
      },
    },
  });
</script>
<style scoped>
  .logo-icon2 {
    align-self: stretch;
    height: 63px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    cursor: pointer;
  }
  .frame5 {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-84xl);
    flex-shrink: 0;
  }
  .frame4 {
    align-self: stretch;
    height: 760px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 311px;
    box-sizing: border-box;
    gap: var(--gap-135xl);
  }
  .frame3 {
    width: 306px;
    border-radius: var(--br-xl);
    background-color: var(--color-snow-600);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) var(--padding-3xl) var(--padding-25xl)
      var(--padding-15xl);
    box-sizing: border-box;
    gap: var(--gap-44xl);
  }
  .charts-501 {
    height: 44px;
    width: 1008px;
    display: none;
    max-width: 100%;
  }
  .search2 {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 29px;
    display: inline-block;
    min-width: 77px;
  }
  .icon9 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover13 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px var(--padding-159xl) 0px 0px;
    gap: var(--gap-6xs);
  }
  .image-icon10 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren7 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium6 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text10 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xl);
  }
  .profile8 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover12 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .category-header-vtextfield {
    border: none;
    background-color: transparent;
    align-self: stretch;
    height: 67px;
    font-family: var(--font-baloo-da);
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    z-index: 1;
  }
  .category9 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .frame6 {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-xs) 0px 0px;
  }
  .category-item1 {
    width: 814px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: calc(100% - 207px);
  }
  .see-all4 {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
  }
  .see-all-button3 {
    width: 81px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
    box-sizing: border-box;
    text-align: right;
    font-size: var(--font-size-sm);
    color: var(--color-foundation-dark-lighter);
  }
  .scroll-icon4 {
    width: 0px;
    flex: 1;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .category-scroll {
    align-self: stretch;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 106px 0px 0px;
    box-sizing: border-box;
  }
  .category-list1 {
    flex: 1;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-surface-white);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-lg) 0px var(--padding-145xl) var(--padding-10xl);
    box-sizing: border-box;
    gap: var(--gap-44xl);
    max-width: 100%;
  }
  .category-header-parent {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-12xs);
    box-sizing: border-box;
    gap: var(--gap-lgi);
    max-width: 100%;
    font-size: var(--font-size-xl);
  }
  .discover-group {
    width: 1051px;
    height: 529px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-25xl);
    max-width: 100%;
  }
  .frame-section {
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
  .search-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 41px 0px 0px;
    box-sizing: border-box;
    max-width: calc(100% - 346px);
  }
  .search1 {
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
    .category-list1 {
      gap: var(--gap-12xl);
    }

    .frame-section {
      gap: var(--gap-58xl);
    }
  }
  @media screen and (max-width: 1000px) {
    .frame4 {
      padding-bottom: 202px;
      box-sizing: border-box;
    }

    .frame3 {
      display: none;
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-10xl);
      box-sizing: border-box;
    }

    .search-inner {
      padding-top: var(--padding-8xl);
      box-sizing: border-box;
      max-width: 100%;
    }

    .search1 {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 725px) {
    .category-list1 {
      gap: var(--gap-base);
    }

    .discover-group {
      gap: var(--gap-3xl);
    }

    .frame-section {
      gap: var(--gap-19xl);
    }

    .search1 {
      gap: var(--gap-xl);
    }
  }
  @media screen and (max-width: 450px) {
    .frame4 {
      gap: var(--gap-58xl);
      padding-bottom: 131px;
      box-sizing: border-box;
    }

    .frame3 {
      gap: var(--gap-12xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }

    .discover13 {
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .category9 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .frame-section {
      gap: var(--gap-lgi);
    }

    .search-inner {
      padding-top: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
