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
      <div class="row pg_first_row no-gutters">
        <div class="col-4 pg_first_product">
          <div class="pg_product_image" style="background-image: url('/static/img/1.jpg');"></div>
        </div>
        <div class="col-4 pg_second_product d-flex align-items-center justify-content-center">
          <div class="pg_product_image" style="background-image: url('/static/img/3.jpg');"></div>
        </div>
      </div>
      <div class="grid_height_2"></div>
      <div class="row pg_second_row no-gutters">
        <div class="col-4 pg_three_product">
          <div class="pg_product_image" style="background-image: url('/static/img/5.jpg');"></div>
        </div>
        <div class="offset-2 col-2 pg_four_product">
          <div class="pg_product_image" style="background-image: url('/static/img/7.jpg');"></div>
        </div>
      </div>
      <div class="row pg_third_row no-gutters">
        <div class="offset-2 col-2 pg_five_product">
          <div class="pg_product_image" style="background-image: url('/static/img/6.jpg');"></div>
        </div>
      </div>
      <div class="row pg_forth_row no-gutters">
        <div class="col-2 pg_six_product d-flex align-items-end">
          <div class="pg_product_image" style="background-image: url('/static/img/4.jpg');"></div>
        </div>
        <div class="offset-2 col-2 pg_seven_product">
          <div class="pg_product_image" style="background-image: url('/static/img/2.jpg');"></div>
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
