<template>
  <div class="pg_detail">
    <div class="container">
      <div class="row no-gutters grid_height_1">
        <div class="col-1 d-flex align-items-center justify-content-end">
          <router-link :to="{ name: 'Home' }">
            <font-awesome-icon class="pg_back_icon"
                                :icon="['fas', 'arrow-left']"></font-awesome-icon>
          </router-link>
        </div>
        <div class="col-1 d-flex align-items-center justify-content-start">
          <div class="pg_logo"><p>CCCLOTHES</p></div>
        </div>
      </div>
      <div class="row no-gutters grid_height_1"></div>
      <div class="row no-gutters grid_height_4">
        <div class="offset-1 col-6">
          <div class="pg_product_image pg_720x400 position-relative background-img2"></div>
          <div class="pg_fill_squre pg_240x200 pg_decorate_1"></div>
          <div class="pg_hollow_squre pg_480x200 pg_decorate_2"></div>
          <span class="pg_first_name">VINTAGE</span>
          <span class="pg_last_name rotate_90">DENIM</span>
          <span class="pg_top rotate_180">TOP</span>
          <span class="pg_number rotate_270">06</span>
        </div>
      </div>
      <div class="row no-gutters grid_height_2"></div>
      <div class="row no-gutters grid_height_4">
        <div class="offset-1 col-1 position-relative">
          <span class="pg_detail_description rotate_90">PRODUCT DETAILS</span>
        </div>
        <div class="col-5">
          <div class="grid_height_1">
            <span class="pg_detail_title d-block">VINTAGE DENIM</span>
            <span class="pg_detail_subtitle">Kogi Cosby sweater ethical squid irony</span>
          </div>
          <div class="grid_height_4">
            <p class="pg_detail_content">
              In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene. 
            </p>
            <p class="pg_detail_content">
              We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back, the blubber-hook was inserted into the original hole there cut by the spades of the mates. But how did so clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted there by my particular friend Queequeg, whose duty it was, as harpooneer.
            </p>
          </div>
        </div>
      </div>
      <div class="row no-gutters grid_height_1"></div>
      <div class="row no-gutters grid_height_6">
        <div class="offset-1 col-6 position-relative">
          <div class="pg_product_image pg_360x300 pg_detail_img_2 background-img8"></div>
          <div class="pg_product_image pg_480x400 pg_detail_img_3 background-img9"></div>
          <div class="pg_fill_squre pg_240x200 pg_decorate_3"></div>
          <div class="pg_hollow_squre pg_480x200 pg_decorate_4"></div>
          <div class="pg_stripe_squre pg_240x100 pg_decorate_5"></div>
        </div>
      </div>
      <div class="row no-gutters grid_height_1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
    };
  },
};
</script>
