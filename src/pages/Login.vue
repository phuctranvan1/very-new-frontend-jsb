<template>
  <div class="login">
    <section class="branding-wrapper">
      <div class="branding">
        <img class="logo-icon1" loading="lazy" alt="" src="/logo@2x.png" />
        <div class="navigation">
          <div class="text2">
            <div class="category3">
              Millions of songs. Crystal-clear audio. Any device, anywhere.
            </div>
          </div>
        </div>
        <div class="auth">
          <h3 class="sign-in">Sign in</h3>
        </div>
      </div>
    </section>
    <content />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Content from "../components/Content.vue";

  export default defineComponent({
    name: "Login",
    components: { Content },
  });
</script>
<style scoped>
  .logo-icon1 {
    width: 250px;
    height: 63px;
    position: relative;
    object-fit: cover;
  }
  .category3 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
  }
  .text2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .navigation {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0px 0px 0px var(--padding-5xl);
  }
  .sign-in {
    margin: 0;
    width: 341.8px;
    position: relative;
    font-size: inherit;
    text-transform: capitalize;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    max-width: 100%;
  }
  .auth {
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0px var(--padding-sm);
    box-sizing: border-box;
    max-width: 100%;
    font-size: 30px;
    color: #383838;
  }
  .branding {
    width: 634px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-3xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-xs);
    max-width: 100%;
  }
  .branding-wrapper {
    width: 1202px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .login {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-19xl) 108px 333px;
    box-sizing: border-box;
    gap: var(--gap-47xl);
    background-image: url("/public/login@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1200px) {
    .login {
      padding-left: var(--padding-35xl);
      padding-right: var(--padding-35xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1050px) {
    .sign-in {
      font-size: var(--font-size-5xl);
    }
  }
  @media screen and (max-width: 750px) {
    .login {
      gap: 33px;
      padding-left: var(--padding-8xl);
      padding-right: var(--padding-8xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .category3 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .sign-in {
      font-size: var(--font-size-lg);
    }

    .login {
      gap: var(--gap-base);
    }
  }
</style>
