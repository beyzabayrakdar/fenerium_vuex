<template>
  <section id="productDetailPage" class="uniform-order-section">
    <div class="d-md-none d-block">
      <div class="uniform-detail-header">
        <a class="page-btn"
        ><i class="icon icon-chevron-left"></i
        ></a>
        <div class="content">
          <p class="title">{{product.title}}</p>
          <div class="price">
            <span class="price">149.95 TL</span>
            <span class="old-price"><span class="currency">TL</span></span>
          </div>
        </div>
        <a
          href="/erkek-lacivert-tribun-basic-esofman-alti-p-TK050E9Y01407"
          class="page-btn"
        ><i class="icon icon-chevron-right"></i
        ></a>
      </div>
    </div>
    <div class="container">
      <form action="" method="post" class="addBasketForm" novalidate="novalidate">
        <input type="hidden" name="productcode" value="TK050E9Y01301" />
        <input
          type="hidden"
          name="producuniformSizeInputMobiletcode"
          value="TK050E9Y01301"
        />
        <div class="row uniform-content-wrap">
          <div class="col-md-2 d-md-flex d-none uniform-content-item middle">
            <div class="product-thumbnail-slider swiper-container">
              <button
                type="button"
                class="swiper-prev swiper-button-disabled d-none"
                tabindex="0"
                role="button"
                aria-label="Previous slide"
                aria-disabled="true"
              >
                <i class="icon icon-chevron-up"></i>
              </button>
              <div
                class="swiper-container swiper-container-initialized swiper-container-vertical"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide swiper-slide-active" style="height: 87.5px">
                    <a
                      href="https://fenerium.com/Fenerium/media/images/urunler/TK050E9Y01301.jpg"
                      data-img-order="0"
                      class="slide-img active"
                      style="
                                 background-image: url('https://fenerium.com/Fenerium/media/images/urunler/TK050E9Y01301.jpg');
                                 "
                    ></a>
                  </div>
                </div>
                <span
                  class="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
              <button
                type="button"
                class="swiper-next swiper-button-disabled d-none"
                tabindex="0"
                role="button"
                aria-label="Next slide"
                aria-disabled="true"
              >
                <i class="icon icon-chevron-down"></i>
              </button>
            </div>
          </div>
          <div class="offset-md-2 col-lg-10 col-md-9 col-24 uniform-content-item">
            <div class="product-img-slider-wrapper">
              <div class="product-img-slider owl-carousel owl-loaded owl-drag">
                <div class="owl-stage-outer">
                  <div
                    class="owl-stage"
                    style="
                              transform: translate3d(0px, 0px, 0px);
                              transition: all 0s ease 0s;
                              width: 572px;
                              "
                  >
                    <div class="owl-item active" style="width: 571.656px">
                      <div data-img-order="0" class="item">
                        <img
                          :src="product.image"
                          alt="Erkek Gri Tribun Basic Eşofman Altı "
                          class="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="owl-nav disabled">
                  <button type="button" role="presentation" class="owl-prev">
                    <span aria-label="Previous">‹</span></button
                  ><button type="button" role="presentation" class="owl-next">
                  <span aria-label="Next">›</span>
                </button>
                </div>
                <div class="owl-dots disabled"></div>
              </div>
            </div>
          </div>
          <div class="offset-md-2 col-lg-6 col-md-7 col-24 uniform-content-item">
            <div class="product-detail-list">
              <div class="list-item">
                <h1 class="product-name">{{product.title}}</h1>
                <div class="product-price">
                  <div class="price-item price">
                    <span class="medium">149.95</span> TL
                  </div>
                  <div class="price-item discount"></div>
                </div>
              </div>
              <div class="list-item">
                <div class="item-content">
                  <span class="text">RENK:</span>
                  <a @click="color = 'gri'" href="javascript:void(0)" class="item" :class="color === 'gri' ? 'selected' : ''"> Siyah </a>
                  <a @click="color = 'mavi'" href="javascript:void(0)" class="item" :class="color === 'mavi' ? 'selected' : ''">Mavi</a>
                  <div class="product-detail-color-chart">
                    <a
                      href="#"
                      class="chart-item"
                      style="background-color: rgb(169, 169, 169)"
                    ></a>
                    <a
                      href="erkek-lacivert-tribun-basic-esofman-alti-p-TK050E9Y01407"
                      class="chart-item"
                      style="background-color: rgb(0, 65, 127)"
                    ></a>
                  </div>
                </div>
              </div>
              <div class="list-item">
                <div class="product-detail-content d-xl-block d-none">
                  <div class="product-code">
                    <span class="text">ÜRÜN KODU:</span>
                    <span class="code">TK050E9Y01301</span>
                  </div>
                </div>
              </div>
              <div class="product-detail-share">
                <a
                  href="#"
                  data-toggle="collapse"
                  data-target="#socialMediaShare"
                  aria-expanded="false"
                  class="btn btn-share"
                ><i class="icon icon-share"></i
                ></a>
                <div id="socialMediaShare" class="collapse">
                  <ul class="social-list">
                    <li>
                      <a
                        href="javascript: void(0)"
                        onclick="window.open('http://www.facebook.com/sharer.php?u=http://fenerium.com/erkek-gri-tribun-basic-esofman-alti-p-TK050E9Y01301', 'fb-share', 'width=640, height=480');"
                        title=""
                      ><i class="icon icon-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0)"
                        onclick="window.open('http://twitter.com/intent/tweet?url=http://fenerium.com/erkek-gri-tribun-basic-esofman-alti-p-TK050E9Y01301', 'twitter-share', 'width=640, height=480');"
                        title=""
                      ><i class="icon icon-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0)"
                        onclick="window.open('https://www.linkedin.com/shareArticle?mini=true&amp;url=http://fenerium.com/erkek-gri-tribun-basic-esofman-alti-p-TK050E9Y01301', 'linked-in-share', 'width=640, height=480');"
                      ><i class="icon icon-linkedin"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="product-detail-list-mobile mt-0">
              <div class="product-detail-form">
                <div class="row">
                  <div class="col-24">
                    <div class="form-item">
                      <span class="field-desc">RENK:</span>
                      <div class="product-detail-color-chart">
                        <a
                          href="#"
                          class="chart-item"
                          style="background-color: rgb(169, 169, 169)"
                        ></a>
                        <a
                          href="erkek-lacivert-tribun-basic-esofman-alti-p-TK050E9Y01407"
                          class="chart-item"
                          style="background-color: rgb(0, 65, 127)"
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="col-15">
                    <div class="row">
                      <div class="col-10">
                        <div class="form-item">
                          <label for="uniformSizeInputMobile" class="field-desc"
                          >BEDEN :</label
                          >
                          <select
                            name="uniformSizeInputMobile"
                            id="uniformSizeInputMobile"
                            data-placeholder="-"
                            class="primary-select uniformSizeInputMobile select2-hidden-accessible"
                            data-select2-id="uniformSizeInputMobile"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="" data-select2-id="2"></option>
                            <option value="XS" data-select2-id="7">
                              XS
                            </option>
                            <option value="S" data-select2-id="8">S</option>
                            <option value="M" data-select2-id="9">
                              M
                            </option>
                            <option value="L" data-select2-id="10">
                              L
                            </option>
                            <option value="XL" data-select2-id="11">
                              XL
                            </option>
                            <option value="2XL" data-select2-id="12">
                              2XL
                            </option>
                            <option value="3XL"data-select2-id="13">
                              3XL
                            </option>
                            <option value="4XL" data-select2-id="14">
                              4XL
                            </option>
                          </select
                          >
                          <span
                            class="select2 select2-container select2-container--default"
                            dir="ltr"
                            data-select2-id="15"
                            style="width: 100%"
                          ><span class="selection"
                          ><span
                            class="select2-selection select2-selection--single primary-select-container"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-labelledby="select2-uniformSizeInputMobile-container"
                          ><span
                            class="select2-selection__rendered"
                            id="select2-uniformSizeInputMobile-container"
                            role="textbox"
                            aria-readonly="true"
                          ><span class="select2-selection__placeholder"
                          >-</span
                          ></span
                          ><span
                            class="select2-selection__arrow"
                            role="presentation"
                          ><b role="presentation"></b></span></span></span
                          ><span class="dropdown-wrapper" aria-hidden="true"></span
                          ></span>
                        </div>
                      </div>
                      <div class="col-10">
                        <div class="form-item">
                          <label for="uniformCountInputMobile" class="field-desc"
                          >Adet :</label
                          >
                          <select
                            disabled=""
                            name="uniformCountInputMobile"
                            id="uniformCountInputMobile"
                            data-placeholder="-"
                            class="primary-select uniformCountInputMobile select2-hidden-accessible"
                            data-select2-id="uniformCountInputMobile"
                            tabindex="-1"
                            aria-hidden="true"
                          ></select
                          ><span
                          class="select2 select2-container select2-container--default select2-container--disabled"
                          dir="ltr"
                          data-select2-id="16"
                          style="width: 100%"
                        ><span class="selection"
                        ><span
                          class="select2-selection select2-selection--single primary-select-container"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabindex="-1"
                          aria-labelledby="select2-uniformCountInputMobile-container"
                        ><span
                          class="select2-selection__rendered"
                          id="select2-uniformCountInputMobile-container"
                          role="textbox"
                          aria-readonly="true"
                        ><span class="select2-selection__placeholder"
                        >-</span
                        ></span
                        ><span
                          class="select2-selection__arrow"
                          role="presentation"
                        ><b role="presentation"></b></span></span></span
                        ><span class="dropdown-wrapper" aria-hidden="true"></span
                        ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-9 d-flex align-items-end justify-content-end">
                    <div class="action-buttons">
                      <button
                        type="button"
                        data-toggle="addToFavorite"
                        data-id="TK050E9Y01301"
                        class="btn btn-outline"
                      >
                        <i class="icon icon-heart-outline"></i>
                      </button>
                      <div class="product-detail-share">
                        <a
                          href="#"
                          data-toggle="collapse"
                          data-target="#socialMediaShare2"
                          aria-expanded="false"
                          class="btn btn-share"
                        ><i class="icon icon-share"></i
                        ></a>
                        <div id="socialMediaShare2" class="collapse">
                          <ul class="social-list">
                            <li>
                              <a
                                href="javascript: void(0)"
                                onclick="window.open('http://www.facebook.com/sharer.php?u=http://fenerium.com/erkek-gri-tribun-basic-esofman-alti-p-TK050E9Y01301', 'fb-share', 'width=640, height=480');"
                                title=""
                              ><i class="icon icon-facebook"></i
                              ></a>
                            </li>
                            <li>
                              <a
                                href="javascript: void(0)"
                                onclick="window.open('http://twitter.com/intent/tweet?url=http://fenerium.com/erkek-gri-tribun-basic-esofman-alti-p-TK050E9Y01301', 'twitter-share', 'width=640, height=480');"
                                title=""
                              ><i class="icon icon-twitter"></i
                              ></a>
                            </li>
                            <li>
                              <a
                                href="javascript: void(0)"
                                onclick="window.open('https://www.linkedin.com/shareArticle?mini=true&amp;url=http://fenerium.com/erkek-gri-tribun-basic-esofman-alti-p-TK050E9Y01301', 'linked-in-share', 'width=640, height=480');"
                              ><i class="icon icon-linkedin"></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-24">
                    <div class="col-24">
                      <div class="product-code">
                        <span class="text">ÜRÜN KODU:</span>
                        <span class="code">TK050E9Y01301</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-2 col-24 d-md-flex flex-column d-none uniform-content-item middle"
          >
            <a
              href="/erkek-lacivert-tribun-basic-esofman-alti-p-TK050E9Y01407"
              class="page-link next"
            ><i class="icon icon-chevron-right"></i
            ></a>
            <a
              href="/erkek-gri-tribun-basic-esofman-alti-p-TK050E9K01305"
              class="page-link prev"
            ><i class="icon icon-chevron-left"></i
            ></a>
          </div>
        </div>
        <div class="d-xl-none d-md-block d-none">
          <div class="product-detail-content">
            <div class="product-code">
              <span class="text">ÜRÜN KODU:</span> <span class="code">TK050E9Y01301</span>
            </div>
          </div>
        </div>
        <div class="uniform-properties-card-wrapper">
          <div class="container">
            <div class="uniform-properties-card">
              <div class="row">
                <div class="col-lg-16 col-md-12 col-24 order-md-0 order-1">
                  <div class="select-wrap type-2 align-items-lg-center">
                    <div class="select-body">
                      <span class="text d-md-flex d-none">Beden:</span>
                      <div class="body-list-wrapper">
                        <div class="d-none d-md-block">
                          <div class="body-list">
                            <label
                                for="bodyXS"
                                class="list-item"
                                :class="body === 'XS' ? 'active' : ''"
                                @click="body = 'XS'"
                            ><input
                                id="bodyXS"
                                name="body"
                                type="radio"
                                value="XS"
                                hidden="hidden"
                              />
                              <span class="text">XS</span>
                            </label>
                            <label for="bodyS" class="list-item"
                                   :class="body === 'S' ? 'active' : ''"
                                   @click="body = 'S'"
                            ><input
                              id="bodyS"
                              name="body"
                              type="radio"
                              value="S"
                              hidden="hidden"
                            />
                              <span class="text">S</span></label
                            >
                            <label
                              for="bodyM"
                              class="list-item"
                              :class="body === 'M' ? 'active' : ''"
                              @click="body = 'M'"
                            ><input
                              id="bodyM"
                              name="body"
                              type="radio"
                              value="M"
                              hidden="hidden"
                            />
                              <span class="text">M</span></label
                            >
                            <label
                              for="bodyL"
                              class="list-item"
                              :class="body === 'L' ? 'active' : ''"
                              @click="body = 'L'"
                            ><input
                              id="bodyL"
                              name="body"
                              type="radio"
                              value="L"
                              hidden="hidden"
                            />
                              <span class="text">L</span></label
                            >
                            <label
                              for="bodyXL"
                              class="list-item "
                              :class="body === 'XL' ? 'active' : ''"
                              @click="body = 'XL'"
                            ><input
                              id="bodyXL"
                              name="body"
                              type="radio"
                              value="XL"
                              hidden="hidden"
                            />
                              <span class="text">XL</span></label
                            >
                            <label
                              for="body2XL"
                              class="list-item"
                              :class="body === '2XL' ? 'active' : ''"
                              @click="body = '2XL'"
                            ><input
                              id="body2XL"
                              name="body"
                              type="radio"
                              value="2XL"
                              hidden="hidden"
                            />
                              <span class="text">2XL</span></label
                            >
                            <label
                              for="body3XL"
                              class="list-item"
                              :class="body === '3XL' ? 'active' : ''"
                              @click="body = '3XL'"
                            ><input
                              id="body3XL"
                              name="body"
                              type="radio"
                              value="3XL"
                              hidden="hidden"
                            />
                              <span class="text">3XL</span></label
                            >
                            <label
                              for="body4XL"
                              class="list-item"
                              :class="body === '4XL' ? 'active' : ''"
                              @click="body = '4XL'"
                            ><input
                              id="body4XL"
                              name="body"
                              type="radio"
                              value="4XL"
                              hidden="hidden"
                            />
                              <span class="text">4XL</span></label
                            >
                          </div>
                        </div>
                        <div class="d-flex justify-content-between">
                          <button
                            type="button"
                            data-toggle="modal"
                            data-target="#uniformBodyForm"
                            class="btn-find-body"
                          >
                            <span class="text">Bedenimi Bul</span>
                            <i class="icon icon-hanger"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="select-body d-none d-md-flex">
                         <span class="text">
                         <span>{{count}}</span>
                         Adet:
                         </span>
                      <select class="cs-count-select" v-model="count">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-8 col-md-12 col-24 d-flex flex-column order-md-1 order-0"
                >
                  <div class="form-btn ml-md-auto">
                    <button
                      type="button"
                      data-toggle="addToFavorite"
                      data-id="TK050E9Y01301"
                      class="btn btn-outline d-none d-md-flex"
                      @click="addBasket"
                    >
                      <i class="icon icon-heart-outline"></i>
                    </button>
                    <button @click="addBasket" type="submit" class="btn btn-primary">SEPETE EKLE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div data-toggle="basketFormSection" class="basket-form-section d-none d-lg-block">
      <form action="" method="post" class="addBasketForm" novalidate="novalidate">
        <input type="hidden" name="productcode" value="TK050E9Y01301" />
        <div class="form-item">
          <div class="product-short-info">
            <div
              class="media-wrap"
              style="
                     background-image: url('https://fenerium.com/Fenerium/media/images/urunler/TK050E9Y01301.jpg');
                     "
            ></div>
            <h2 class="title">Erkek Gri Tribun Basic Eşofman Altı</h2>
          </div>
        </div>
        <div class="form-item">
          <div class="item">
            <label for="uniformSizeInputMobile" class="field-desc">BEDEN :</label>
          </div>
          <div class="item">
            <select
              name="body"
              data-placeholder="-"
              class="primary-select uniformSizeInputMobile select2-hidden-accessible"
              data-select2-id="4"
              tabindex="-1"
              aria-hidden="true"
            >
              <option value="" data-select2-id="6"></option>
              <option value="XS" data-select2-id="17">XS</option>
              <option value="S" data-select2-id="18">S</option>
              <option value="M" data-select2-id="19">M</option>
              <option value="L" data-select2-id="20">L</option>
              <option value="XL"  data-select2-id="21">XL</option>
              <option value="2XL"  data-select2-id="22">2XL</option>
              <option value="3XL" data-select2-id="23">3XL</option>
              <option value="4XL" data-select2-id="24">
                4XL
              </option>
            </select
            >
            <span
              class="select2 select2-container select2-container--default"
              dir="ltr"
              data-select2-id="25"
              style="width: 100%"
            ><span class="selection"
            ><span
              class="select2-selection select2-selection--single primary-select-container"
              role="combobox"
              aria-haspopup="true"
              aria-expanded="false"
              tabindex="0"
              aria-labelledby="select2-body-5o-container"
            ><span
              class="select2-selection__rendered"
              id="select2-body-5o-container"
              role="textbox"
              aria-readonly="true"
            ><span class="select2-selection__placeholder">-</span></span
            ><span class="select2-selection__arrow" role="presentation"
            ><b role="presentation"></b></span></span></span
            ><span class="dropdown-wrapper" aria-hidden="true"></span
            ></span>
          </div>
          <div class="item">
            <button
              type="button"
              data-toggle="modal"
              data-target="#uniformBodyForm"
              class="btn-find-body"
            >
              <span class="text">Bedenimi Bul</span> <i class="icon icon-hanger"></i>
            </button>
          </div>
        </div>
        <div class="form-item">
          <div class="item"><label class="field-desc">Adet :</label></div>
          <div class="item">
            <select
              disabled=""
              name="quantity"
              data-placeholder="-"
              data-container-class="quaternary-select-container"
              data-dropdown-class="quaternary-select-dropdown medium"
              class="quaternary-select select2-hidden-accessible"
              data-select2-id="28"
              tabindex="-1"
              aria-hidden="true"
            ></select
            ><span
            class="select2 select2-container select2-container--default select2-container--disabled"
            dir="ltr"
            data-select2-id="29"
            style="width: 100%"
          ><span class="selection"
          ><span
            class="select2-selection select2-selection--single quaternary-select-container"
            role="combobox"
            aria-haspopup="true"
            aria-expanded="false"
            tabindex="-1"
            aria-labelledby="select2-quantity-xp-container"
          ><span
            class="select2-selection__rendered"
            id="select2-quantity-xp-container"
            role="textbox"
            aria-readonly="true"
          ><span class="select2-selection__placeholder">-</span></span
          ><span class="select2-selection__arrow" role="presentation"
          ><b role="presentation"></b></span></span></span
          ><span class="dropdown-wrapper" aria-hidden="true"></span
          ></span>
          </div>
        </div>
        <div class="form-item">
          <div class="item">
            <div class="total-price"><span>149.95</span> TL</div>
          </div>
          <div class="item">
            <button
              type="button"
              data-toggle="addToFavorite"
              data-id="TK050E9Y01301"
              class="btn btn-outline"
            >
              <i class="icon icon-heart-outline"></i>
            </button>
          </div>
          <div class="item">
            <button type="submit" @click="addBasket" class="btn btn-primary">SEPETE EKLE</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      count: 1,
      body: null
    };
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("product/initData");
    this.$store.dispatch("product/setProduct", parseInt(id));
  },
  computed: {
    product(){
      return this.$store.getters['product/getProduct'];
    }
  },
  methods: {
    addBasket(e) {
      e.preventDefault();
      const payload = {
        id: Math.random() * 1000,
        count: this.count,
        body: this.body,
        product: this.product
      };
      this.$store.dispatch('basket/addBasket', payload);
    }
  }
}
</script>
<style>
.cs-count-select {
  height: 52px;
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  position: relative;
  padding: 0 20px 0 10px;
  font-size: 12px;
  font-weight: 500;
  color: #111;
  line-height: 38px;
  width: 90px;
  margin-left: 20px;
}
</style>
