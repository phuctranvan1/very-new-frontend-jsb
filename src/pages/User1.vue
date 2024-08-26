<template>
  <div class="user">
    <main class="frame">
      <header class="frame1">
        <img
          class="logo-icon"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          @click="onLogoImageClick"
        />
      </header>
      <div class="main-content">
        <div class="discover2">
          <div class="discover3">
            <h3 class="user1">User</h3>
            <img class="icon3" loading="lazy" alt="" src="/icon-7.svg" />
          </div>
          <div class="profile3">
            <img
              class="image-icon1"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div class="detail1">
              <div class="text1">
                <a class="wade-warren2">Wade Warren</a>
                <div class="premium1">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="rectangle-parent">
        <div class="frame-child" />
        <img class="image-icon2" loading="lazy" alt="" src="/image-11@2x.png" />
        <img class="image-icon3" alt="" src="/image-2@2x.png" />
        <img class="image-icon4" loading="lazy" alt="" src="/image-3@2x.png" />
        <div class="gallery-category">
          <div class="category2">List of users</div>
          <div class="see-all-button">
            <div class="see-all">See All</div>
          </div>
        </div>
        <div class="user-cards">
          <div class="card-container">
            <div class="card-list">
              <UserPair tranphuc="tranphuc" admin="Admin" />
              <div class="card-details">
                <img class="bg-icon" loading="lazy" alt="" src="/bg.svg" />
                <div class="listerine">Listerine</div>
                <div class="sysadmin-wrapper">
                  <div class="sysadmin">Sysadmin</div>
                </div>
              </div>
              <UserPair
                propWidth="898.8px"
                tranphuc="User1"
                propMinWidth="42px"
                admin="User"
                propMinWidth1="31px"
              />
            </div>
            <div class="scroll-container">
              <img
                class="scroll-icon"
                loading="lazy"
                alt=""
                src="/scroll.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <Sidebar />
      <section class="frame2">
        <MobileStream
          propAlignSelf="unset"
          appStore="/app-store@2x.png"
          googlePlay="/google-play@2x.png"
          mobileStreamAlignSelf="unset"
          mobileStreamWidth="270px"
          mobileStreamPadding="0px 20px 0px 0px"
        />
      </section>
      <BottomBar
        propTop="730px"
        propLeft="356px"
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
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import UserPair from "../components/UserPair.vue";
  import Sidebar from "../components/Sidebar.vue";
  import MobileStream from "../components/MobileStream.vue";
  import BottomBar from "../components/BottomBar.vue";

  export default defineComponent({
    name: "User1",
    components: { UserPair, Sidebar, MobileStream, BottomBar },
    methods: {
      onLogoImageClick() {
        this.$router.push("/discover");
      },
    },
  });
</script>
<style scoped>
  .logo-icon {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    max-height: 100%;
    width: 250px;
    object-fit: cover;
    cursor: pointer;
  }
  .frame1 {
    position: absolute;
    top: 30px;
    left: 35px;
    width: 1370px;
    height: 63px;
    overflow: hidden;
    z-index: 1;
  }
  .user1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 29px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 52px;
  }
  .icon3 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover3 {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
  .image-icon1 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren2 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
  }
  .premium1 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .profile3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover2 {
    width: 1235px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 115px;
    box-sizing: border-box;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .main-content {
    position: absolute;
    top: 38px;
    left: 10px;
    width: 1420px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0px var(--padding-21xl);
    box-sizing: border-box;
    max-width: 100%;
    z-index: 2;
  }
  .frame-child {
    width: 1033.9px;
    height: 578px;
    position: relative;
    border-radius: var(--br-5xl);
    background-color: var(--color-snow-500);
    display: none;
    max-width: 100%;
    z-index: 0;
  }
  .image-icon2 {
    width: 84px;
    height: 84px;
    position: absolute;
    margin: 0 !important;
    bottom: 108px;
    left: 32.2px;
    border-radius: var(--br-base);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 2;
  }
  .image-icon3 {
    width: 84px;
    height: 84px;
    position: absolute;
    margin: 0 !important;
    bottom: 244px;
    left: 32.2px;
    border-radius: var(--br-base);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 2;
  }
  .image-icon4 {
    width: 84px;
    height: 84px;
    position: absolute;
    margin: 0 !important;
    top: 114px;
    left: 32.2px;
    border-radius: var(--br-base);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 2;
  }
  .category2 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 126px;
    z-index: 1;
  }
  .see-all {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    z-index: 1;
  }
  .see-all-button {
    width: 315px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
    box-sizing: border-box;
    text-align: right;
    font-size: var(--font-size-sm);
    color: var(--color-foundation-dark-lighter);
  }
  .gallery-category {
    width: 911px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .bg-icon {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: var(--br-base);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    z-index: 1;
  }
  .listerine {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    display: inline-block;
    min-width: 67px;
    z-index: 2;
  }
  .sysadmin {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 17px;
    display: inline-block;
    min-width: 64px;
    z-index: 2;
  }
  .sysadmin-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xl) 0px 0px;
    margin-left: -67px;
    font-size: var(--font-size-sm);
    color: var(--color-foundation-dark-lighter);
  }
  .card-details {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xl) var(--padding-44xl);
    position: relative;
    row-gap: 20px;
  }
  .card-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-17xl);
    min-width: 588px;
    max-width: 100%;
  }
  .scroll-icon {
    width: 0px;
    flex: 1;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .scroll-container {
    height: 169px;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 109px 0px 0px;
    box-sizing: border-box;
  }
  .card-container {
    width: 960.1px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 56.1px;
    max-width: 100%;
  }
  .user-cards {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    font-size: var(--font-size-base);
  }
  .rectangle-parent {
    position: absolute;
    top: 106px;
    left: 356px;
    border-radius: var(--br-5xl);
    background-color: var(--color-snow-500);
    width: 1036px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xl) 0px 100px var(--padding-13xl);
    box-sizing: border-box;
    gap: 56px;
    max-width: 100%;
    z-index: 1;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .frame2 {
    position: absolute;
    top: 759px;
    left: 32px;
    width: 1376px;
    height: 157px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
  }
  .frame {
    height: 960px;
    flex: 1;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .user {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 900px) {
    .discover2 {
      flex-wrap: wrap;
    }

    .frame {
      height: auto;
      min-height: 960;
    }
  }
  @media screen and (max-width: 675px) {
    .profile3 {
      flex-wrap: wrap;
    }

    .gallery-category {
      flex-wrap: wrap;
    }

    .card-list {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .user1 {
      font-size: var(--font-size-lgi);
      line-height: 23px;
    }

    .category2 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .sysadmin-wrapper {
      margin-left: 0;
    }

    .card-details {
      flex-wrap: wrap;
    }
  }
</style>
