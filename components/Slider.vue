<template>
<main>
<div id="primaryOverlay"></div>
  <div class="banner-slider">
    <div class="owl-carousel owl-loaded owl-drag">
      <div class="owl-stage-outer">
        <div class="owl-stage" style="transition: all 0.25s ease 0s;" :style="`transform: translate3d(${sliderLocation}px, 0px, 0px);width: ${totalWidth}px; `">
          <div v-for="(item, index) in sliders" :class="selectedSlider === index ? 'active' : ''" :key="'slider' + index" class="owl-item" :style="`width: ${screenWidth}px;`">
            <a class="item" href="https://fenerium.com/acik-artirma" target="&quot;_blank&quot;" :style="`background-image: url(${item});`">
              <img class="img-fluid d-none d-md-block hidden" data-toggle="itb" :src="item" alt="">
              <img class="img-fluid d-md-none" data-toggle="itb" :src="item" alt="">
              <div class="slider-content" data-bannerid="{&quot;id&quot;:26838,&quot;name&quot;:&quot;Açık Artırma&quot;,&quot;creative&quot;:&quot;home&quot;,&quot;position&quot;:1}">
                <div class="container">
                  <div class="row">
                    <div class="col-md-9 col-20 text-wrapper"></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="owl-nav disabled">
        <button type="button" role="presentation" @click="sliderLocationPrev()" class="owl-prev">
          <span aria-label="Previous">‹</span>
        </button>
        <button type="button" role="presentation" @click="sliderLocationNext()" class="owl-next">
          <span aria-label="Next">›</span>
        </button>
      </div>
      <div class="owl-dots">
        <button v-for="(item, index) in sliders" @click="setLocation(index)" :key="'sliderdot' + index" :class="index === selectedSlider ? 'active' : ''" role="button" class="owl-dot">
          <span></span>
        </button>
      </div>
    </div>
    <div class="slider-counter">
      <div class="container">
        <span data-toggle="current">{{selectedSlider+1}}</span>
        <span class="sm">/</span>
        <span class="sm" data-toggle="total">{{ sliders.length }}</span>
      </div>
    </div>
  </div>
  </main>
</template>

<script>
export default {
  data: () => {
    return {
      selectedSlider: 1,
      sliders: [
        "https://fenerium.com/Fenerium/media/images/banner/Untitled.jpg?ext=.jpg",
        "https://fenerium.com/Fenerium/media/images/banner/forma-web_1.jpg?ext=.jpg",
        "https://fenerium.com/Fenerium/media/images/banner/denizlispor-acik-artirma-webbbb.jpeg?ext=.jpeg",
        "https://fenerium.com/Fenerium/media/images/banner/mac-urunleri-web.jpg?ext=.jpg",
        "https://fenerium.com/Fenerium/media/images/banner/kirtasiye-urunleri.jpg?ext=.jpg",
      ],
      totalWidth: 0,
      disabledNext: false,
      disabledPrev: true,
      screenWidth: 1450,
      sliderLocation: 0,
    };
  },
  created() {
    this.totalWidth = this.sliders.length * this.screenWidth;
    setInterval(() => {
      if (this.selectedSlider === this.sliders.length - 1) {
        this.selectedSlider = 0;
        this.sliderLocation = 0;
        this.disabledNext = false;
        this.disabledPrev = true;
      } else {
        this.selectedSlider++;
        this.sliderLocationNext();
      }
    }, 4000);
  },
  computed: {},
  methods: {
    setLocation(index){
      this.selectedSlider = index;
      this.sliderLocation = -(this.selectedSlider * this.screenWidth);
    },
    sliderLocationNext() {
      if (this.disabledNext) return false;
      this.sliderLocation = this.sliderLocation - this.screenWidth;
      this.disabledPrev = this.sliderLocation >= 0;
      this.disabledNext = this.sliderLocation - 4 * this.screenWidth <= -this.totalWidth;
    },
    sliderLocationPrev() {
      if (this.disabledPrev) return false;
      this.sliderLocation = this.sliderLocation + this.screenWidth;
      this.disabledPrev = this.sliderLocation >= 0;
      this.disabledNext = this.sliderLocation <= -this.totalWidth;
    },
  },
};
</script>
