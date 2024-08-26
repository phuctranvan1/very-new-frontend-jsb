<template>
  <section class="content1">
    <div class="input-fields">
      <v-text-field
        class="email-field-vtextfield"
        color="#8150ca"
        clearable
        variant="underlined"
        label="Username/Email"
        placeholder="Enter Username or Email"
      />
    </div>
    <div class="password-field">
      <v-text-field
        class="email-field-vtextfield"
        color="#a6a1ad"
        variant="underlined"
        :append-inner-icon="showPasswordAu ? 'mdi-eye' : 'mdi-eye-off'"
        v-model="passwordAu"
        :type="'undefined'"
        @click:appendInner="togglePasswordVisibilityAu"
        label="Password"
        placeholder="Enter password"
      />
    </div>
    <div class="login-form">
      <div class="frame7">
        <div class="recover-password">Recover password</div>
      </div>
    </div>
    <div class="submit-button-wrapper">
      <div class="submit-button">
        <div class="rectangle-parent12" @click="onGroupContainerClick">
          <div class="frame-child22" />
          <div class="sign-in1">Sign In</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Content",
    data() {
      return { showPasswordAu: false, passwordAu: "" };
    },
    methods: {
      togglePasswordVisibilityAu() {
        this.showPasswordAu = !this.showPasswordAu;
      },
      onGroupContainerClick() {
        this.$router.push("/discover");
      },
    },
  });
</script>
<style scoped>
  .email-field-vtextfield {
    border: none;
    background-color: transparent;
    height: 80px;
    flex: 1;
    font-family: var(--font-baloo-da);
    font-size: var(--font-size-xl);
    color: var(--color-snow-700);
    max-width: 100%;
  }
  .input-fields {
    margin-top: -97px;
    align-self: stretch;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .password-field {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .recover-password {
    width: 438px;
    position: relative;
    text-transform: capitalize;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
  }
  .frame7 {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .login-form {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-46xl);
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
  }
  .frame-child22 {
    height: 80px;
    width: 1157.2px;
    position: relative;
    box-shadow: var(--xzz);
    border-radius: var(--br-11xl);
    background-color: var(--color-orangered);
    display: none;
    max-width: 100%;
  }
  .sign-in1 {
    width: 516.3px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
    max-width: 100%;
    z-index: 1;
  }
  .rectangle-parent12 {
    flex: 1;
    box-shadow: var(--xzz);
    border-radius: var(--br-11xl);
    background-color: var(--color-orangered);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-8xl) var(--padding-xl) var(--padding-lgi);
    box-sizing: border-box;
    max-width: 100%;
    cursor: pointer;
  }
  .submit-button {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-base);
    box-sizing: border-box;
    max-width: 100%;
  }
  .submit-button-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-sm);
    box-sizing: border-box;
    max-width: 100%;
    flex-shrink: 0;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-surface-white);
  }
  .content1 {
    width: 1202px;
    height: 317px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-77xl-5) 0px;
    box-sizing: border-box;
    gap: var(--gap-mid);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-snow-100);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 1200px) {
    .login-form {
      padding-left: var(--padding-13xl);
      padding-right: var(--padding-13xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 750px) {
    .content1 {
      padding-top: var(--padding-44xl);
      padding-bottom: var(--padding-44xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .sign-in1 {
      font-size: var(--font-size-base);
    }
  }
</style>
