<template>
  <div class="pg_home">
    <div class="container">
      <div class="row no-gutters">
        <div class="pg_header col-8 d-flex flex-column align-items-center">
          <div class="pg_logo"><p>CCCLOTHES</p></div>
          <span class="pg_title">MEN’S TOPS</span>
        </div>
      </div>
      <div class="row grid_height_1"></div>
      <div class="row grid_height_4 no-gutters">
        <div class="col-4 pg_product_1">
          <div class="pg_product_image pg_480x400 position-relative background-img1"></div>
          <div class="pg_hollow_squre pg_240x200 pg_decorate_1"></div>
          <div class="pg_stripe_squre pg_240x100 pg_decorate_2"></div>
          <div class="pg_product_title"><span>LINEN BLAZER</span></div>
          <span class="pg_number">01</span>
          <span class="pg_depiction rotate_90">Men’s outfit</span>
        </div>
        <div class="col-4
                    d-flex
                    align-items-center
                    justify-content-center
                    position-relative
                    pg_product_2">
          <div class="pg_product_image pg_240x200 background-img3"></div>
          <div class="pg_fill_squre pg_240x200 pg_decorate_3"></div>
          <div class="pg_hollow_squre pg_240x200 pg_decorate_4"></div>
          <div class="pg_product_title"><span>FREELIFT</span></div>
          <span class="pg_number">02</span>
          <span class="pg_depiction">Men’s basics</span>
        </div>
      </div>
      <div class="grid_height_2"></div>
      <div class="row grid_height_4 no-gutters">
        <div class="col-4 pg_product_3">
          <div class="pg_product_image pg_480x200 position-relative background-img5"></div>
          <div class="pg_fill_squre pg_240x200 pg_decorate_5"></div>
          <div class="pg_hollow_squre pg_240x200 pg_decorate_6"></div>
          <div class="pg_product_title"><span>SUPER SKINNY</span></div>
          <span class="pg_number">03</span>
          <span class="pg_depiction">Men’s pattern shirts</span>
        </div>
        <div class="offset-2 col-2 pg_product_4">
          <div class="pg_product_image pg_240x400 position-relative background-img7"></div>
          <div class="pg_hollow_squre pg_240x200 pg_decorate_7"></div>
          <div class="pg_stripe_squre pg_240x100 pg_decorate_8"></div>
          <div class="pg_product_title_rotate pg_rotate_270"><span>DENIM</span></div>
          <span class="pg_number">04</span>
          <span class="pg_depiction rotate_90">Men’s cadual</span>
        </div>
      </div>
      <div class="row grid_height_2 no-gutters">
        <div class="offset-2 col-2 pg_product_5">
          <div class="pg_product_image pg_240x200 pg_image_reverse position-relative background-img6"></div>
          <div class="pg_stripe_squre pg_240x100 pg_decorate_9"></div>
          <div class="pg_hollow_squre pg_240x100 pg_decorate_10"></div>
          <div class="pg_product_title"><span>SWEATSHIRTS</span></div>
          <span class="pg_number">05</span>
          <span class="pg_depiction">Men’s jacket</span>
        </div>
      </div>
      <div class="row grid_height_6 no-gutters">
        <div class="col-2 d-flex align-items-end pg_product_7">
          <div class="pg_product_image pg_240x400 position-relative background-img4"></div>
          <div class="pg_hollow_squre pg_240x400 pg_decorate_11"></div>
          <div class="pg_fill_squre pg_240x200 pg_decorate_12"></div>
          <div class="pg_product_title_rotate pg_rotate_90"><span>EDITION</span></div>
          <span class="pg_number">07</span>
          <span class="pg_depiction">Men’s shirts</span>
        </div>
        <div class="offset-2 col-2 pg_product_6">
          <router-link :to="{ name: 'Detail' }">
            <div class="pg_product_image pg_480x400 position-relative background-img2"></div>
          </router-link>
          <div class="pg_hollow_squre pg_480x200 pg_decorate_13"></div>
          <div class="pg_fill_squre pg_240x200 pg_decorate_14"></div>
          <div class="pg_product_title"><span>VINTAGE DENIM</span></div>
          <span class="pg_number">06</span>
          <span class="pg_depiction">Men’s classic</span>
        </div>
      </div>
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
