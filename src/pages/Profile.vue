<template>
  <div class="profile">
    <GroupComponent />
    <main class="content">
      <section class="profile-content">
        <div class="profile-card">
          <div class="discover-parent">
            <div class="discover">
              <div class="discover1">
                <h3 class="profile1">Profile</h3>
                <img class="icon" loading="lazy" alt="" src="/icon-7.svg" />
              </div>
              <div class="profile2">
                <img
                  class="image-icon"
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
                <div class="detail">
                  <div class="text">
                    <a class="wade-warren">Wade Warren</a>
                    <div class="premium">Premium</div>
                  </div>
                  <img class="icon" loading="lazy" alt="" />
                </div>
              </div>
            </div>
            <div class="contact-info-wrapper">
              <div class="contact-info">
                <div class="shadow" />
                <div class="contact-details">
                  <div class="contact-details-child" />
                  <div class="category">Wade Warren - Admin</div>
                  <div class="email-info">
                    <div class="email-wadewarrenhotmailco">
                      Email: : wadewarren@hotmail.co
                    </div>
                    <div class="joined-info">
                      <div class="name-and-role">
                        <div class="name-wade-warren">Name: Wade Warren</div>
                        <div class="role-admin">Role: Admin</div>
                      </div>
                      <div class="name-wade-warren">Joined at: June 2024</div>
                    </div>
                    <div class="life-info">
                      <div class="life-quote">
                        <div class="quote-highlight" />
                        <div class="living-my-best">Update</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="similar-profiles">
            <div class="similar-profiles-child" />
            <div class="profile-list">
              <div class="profile-item">
                <div class="category">Update Profile</div>
                <div class="profile-summary">
                  <div class="summary-details">
                    <div class="email">Email: :</div>
                    <div class="name">Name:</div>
                    <div class="role">Role:</div>
                  </div>
                  <div class="contact-summary">
                    <div class="contact-items">
                      <div class="contact-values">
                        <div class="contact-values-child" />
                        <div class="wadewarrenhotmailco">
                          wadewarren@hotmail.co
                        </div>
                      </div>
                      <div class="contact-values">
                        <div class="contact-values-child" />
                        <div class="wade-warren1">Wade Warren</div>
                      </div>
                      <div class="contact-values2">
                        <div class="contact-values-child" />
                        <img
                          class="icon2"
                          loading="lazy"
                          alt=""
                          src="/icon-9.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navigation-buttons">
              <div class="button-container">
                <div class="previous-next">
                  <div class="shadow1" />
                </div>
              </div>
              <div class="quote-preview">
                <div class="preview-highlight" />
                <div class="living-my-best">Save</div>
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
  import GroupComponent from "../components/GroupComponent.vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "Profile",
    components: { GroupComponent, FrameComponent },
  });
</script>
<style scoped>
  .profile1 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 29px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 76px;
  }
  .icon {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: center;
    padding: 0px 179px 0px 0px;
    gap: 8px 7px;
  }
  .image-icon {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
  }
  .premium {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xl);
  }
  .profile2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .shadow {
    height: 44px;
    width: 92px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: -56px;
    filter: blur(150px);
    border-radius: var(--br-25xl);
    background-color: var(--color-coral-100);
    z-index: 1;
  }
  .contact-details-child {
    width: 1052px;
    height: 247.5px;
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .category {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    z-index: 1;
  }
  .email-wadewarrenhotmailco {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    z-index: 1;
  }
  .name-wade-warren {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 19.3px;
    z-index: 1;
  }
  .role-admin {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 19.3px;
    display: inline-block;
    min-width: 92px;
    z-index: 1;
  }
  .name-and-role {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 14.1px;
  }
  .joined-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 17.2px;
  }
  .quote-highlight {
    position: absolute;
    top: 0px;
    left: 33px;
    border-radius: var(--br-3xs);
    background-color: var(--color-foundation-orange-normal);
    width: 179px;
    height: 36px;
    z-index: 1;
  }
  .living-my-best {
    position: absolute;
    top: 4px;
    left: 0px;
    letter-spacing: 0.5px;
    line-height: 150%;
    display: inline-block;
    width: 248px;
    z-index: 2;
  }
  .life-quote {
    height: 36px;
    width: 248px;
    position: relative;
  }
  .life-info {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-foundation-dark-dark);
  }
  .email-info {
    width: 1025px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-sm-8);
    max-width: 104%;
    flex-shrink: 0;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
  }
  .contact-details {
    width: 1052px;
    border-radius: var(--br-5xs);
    background-color: var(--color-foundation-surface-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) var(--padding-10xl) 17.5px var(--padding-11xl);
    box-sizing: border-box;
    gap: 23.3px;
    max-width: 100%;
  }
  .contact-info {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
  }
  .contact-info-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-xl);
  }
  .discover-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-12xl);
    max-width: 100%;
  }
  .similar-profiles-child {
    height: 231px;
    width: 1052px;
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .email {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 56px;
    z-index: 1;
  }
  .name {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 19.3px;
    display: inline-block;
    min-width: 49px;
    z-index: 1;
  }
  .role {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 19.3px;
    display: inline-block;
    min-width: 39px;
    z-index: 1;
  }
  .summary-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-sm-8);
  }
  .contact-values-child {
    height: 26px;
    width: 522px;
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: none;
    max-width: 100%;
  }
  .wadewarrenhotmailco {
    width: 240px;
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    flex-shrink: 0;
    white-space: nowrap;
    z-index: 2;
  }
  .contact-values {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) var(--padding-4xs) 0px;
    max-width: 100%;
    z-index: 1;
  }
  .wade-warren1 {
    width: 240px;
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    flex-shrink: 0;
    z-index: 2;
  }
  .icon2 {
    height: 24px;
    width: 24px;
    position: relative;
    z-index: 2;
  }
  .contact-values2 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-foundation-surface-white);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-6xs);
    max-width: 100%;
    z-index: 1;
  }
  .contact-items {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 6.5px;
    max-width: 100%;
  }
  .contact-summary {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px 3.6px;
    box-sizing: border-box;
    min-width: 339px;
    max-width: 100%;
  }
  .profile-summary {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
  }
  .profile-item {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    max-width: 100%;
  }
  .profile-list {
    width: 586px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0px 0px;
    box-sizing: border-box;
    min-width: 586px;
    max-width: 100%;
    flex-shrink: 0;
  }
  .shadow1 {
    position: absolute;
    top: 0px;
    left: 0px;
    filter: blur(150px);
    border-radius: var(--br-25xl);
    background-color: var(--color-coral-100);
    width: 100%;
    height: 100%;
  }
  .previous-next {
    height: 44px;
    flex: 1;
    position: relative;
    z-index: 1;
  }
  .button-container {
    width: 124px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-base);
    box-sizing: border-box;
  }
  .preview-highlight {
    position: absolute;
    top: 0px;
    left: 33px;
    border-radius: var(--br-3xs);
    background-color: var(--color-gainsboro);
    width: 179px;
    height: 36px;
    z-index: 1;
  }
  .quote-preview {
    align-self: stretch;
    height: 36px;
    position: relative;
  }
  .navigation-buttons {
    width: 248px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 127px;
    min-width: 248px;
    flex-shrink: 0;
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-foundation-dark-light-hover);
  }
  .similar-profiles {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-foundation-surface-white);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) var(--padding-11xl) var(--padding-xl);
    box-sizing: border-box;
    gap: 192px;
    max-width: 100%;
    font-size: var(--font-size-xl);
  }
  .profile-card {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 33.5px;
    max-width: 100%;
  }
  .profile-content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 80px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-25xl) 0px 0px;
    box-sizing: border-box;
    max-width: calc(100% - 346px);
  }
  .profile {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-8xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-13xl);
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 1050px) {
    .profile-list {
      flex: 1;
    }

    .navigation-buttons {
      flex: 1;
    }

    .similar-profiles {
      gap: 96px;
      flex-wrap: wrap;
    }

    .profile-content {
      gap: var(--gap-21xl);
    }
  }
  @media screen and (max-width: 1000px) {
    .content {
      padding-top: var(--padding-10xl);
      box-sizing: border-box;
      max-width: 100%;
    }

    .profile {
      padding-left: var(--padding-8xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 750px) {
    .discover {
      flex-wrap: wrap;
    }

    .discover-parent {
      gap: var(--gap-mini);
    }

    .contact-summary {
      min-width: 100%;
    }

    .profile-summary {
      flex-wrap: wrap;
    }

    .profile-list {
      min-width: 100%;
    }

    .similar-profiles {
      gap: 48px;
    }

    .profile-card {
      gap: var(--gap-mid);
    }

    .profile-content {
      gap: var(--gap-xl);
    }

    .profile {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 450px) {
    .profile1 {
      font-size: var(--font-size-lgi);
      line-height: 23px;
    }

    .discover1 {
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .category {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .similar-profiles {
      gap: var(--gap-5xl);
    }

    .content {
      padding-top: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
