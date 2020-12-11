<template>
  <main>
    <div id="primaryOverlay"></div>

    <div id="BasketPageApp">
      <section class="section secondary-section bg-alabaster">
        <div class="container">
          <div class="row">
            <div class="col-xl-14 col-24">
              <section class="section primary-section">
                <div class="section-header secondary">
                  <h3 class="section-title">Alışveriş Sepetim</h3>
                  <button type="button" class="btn btn-text">
                    <span @click="clearBasket()" class="text-underline">Tümünü Temizle</span
                    ><i class="icon icon-trash"></i>
                  </button>
                </div>
                <div class="card article-card d-none">
                  <div v-if="basket.length <= 0" class="desc type-2">
                    Alışveriş sepetinizde ürün bulunmamaktadır.
                  </div>
                </div>
                <ul v-if="basket.length > 0" class="basket-card-list shopping-summary">
                  <li
                    v-for="item in basket" :key="'basket'+item.id"
                    class="basket-card"
                    data-guid="19fb01a0-633c-4e0f-971b-3ca75ce2c5c3"
                    data-product-id="TK050EAK08305"
                  >
                    <div class="row">
                      <div class="col-lg-20 col-md-18 col-16">
                        <div class="left">
                          <div class="image-wrapper">

                            <img
                              :src="item.product.image"
                              alt=""
                              class="img-fluid"
                            />
                            <button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TK050EAK08305"
                            >
                              <i class="icon icon-heart-outline d-none d-md-block"></i>
                            </button>
                          </div>
                          <div class="content">
                            <div class="product-title">
                              <nuxt-link :to="'/urun-detay/' + item.product.id" class="name">
                                {{ item.product.title }} ( {{ item.body }} )
                              </nuxt-link>
                            </div>
                            <div class="product-code d-none d-md-block">
                              <span class="code-title">Ürün kodu:</span
                              ><span>{{item.product.id}}</span>
                            </div>
                            <div>
                              <div class="info-list d-none d-md-flex">
                                <div class="list-item">
                                  <div class="item-text">Beden :</div>
                                  <div class="item-select">
                                    <select
                                      name="size"
                                      class="quaternary-select choose-body select2-hidden-accessible binded"
                                      data-placeholder=""
                                      data-container-class="quaternary-select-container"
                                      data-dropdown-class="quaternary-select-dropdown"
                                      data-select2-id="1"
                                      tabindex="-1"
                                      aria-hidden="true"
                                    >
                                      <option value=""></option>
                                      <option value="XS">XS</option>
                                      <option value="S">S</option>
                                      <option value="M">M</option>
                                      <option value="4XL">4XL</option></select
                                    ><span
                                      class="select2 select2-container select2-container--default"
                                      dir="ltr"
                                      data-select2-id="2"
                                      style="width: 100%"
                                      ><span class="selection"
                                        ><span
                                          class="select2-selection select2-selection--single quaternary-select-container"
                                          role="combobox"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          tabindex="0"
                                          aria-labelledby="select2-size-iq-container"
                                          ><span
                                            class="select2-selection__rendered"
                                            id="select2-size-iq-container"
                                            role="textbox"
                                            aria-readonly="true"
                                            title="S"
                                            >{{item.body}}</span
                                          ><span
                                            class="select2-selection__arrow"
                                            role="presentation"
                                            ><b
                                              role="presentation"
                                            ></b></span></span></span
                                      ><span
                                        class="dropdown-wrapper"
                                        aria-hidden="true"
                                      ></span
                                    ></span>
                                  </div>
                                </div>
                                <div class="list-item">
                                  <div class="item-text">
                                    Adet :</div>
                                  <div class="item-select">
                                    <select
                                      name="piece"
                                      class="quaternary-select choose-quantity select2-hidden-accessible binded"
                                      data-placeholder=""
                                      data-container-class="quaternary-select-container"
                                      data-dropdown-class="quaternary-select-dropdown"
                                      data-select2-id="4"
                                      tabindex="-1"
                                      aria-hidden="true"
                                    >
                                      <option value=""></option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                      <option value="11">11</option>
                                      <option value="12">12</option>
                                      <option value="13">13</option>
                                      <option value="14">14</option>
                                      <option value="15">15</option></select
                                    ><span
                                      class="select2 select2-container select2-container--default"
                                      dir="ltr"
                                      data-select2-id="5"
                                      style="width: 100%"
                                      ><span class="selection"
                                        ><span
                                          class="select2-selection select2-selection--single quaternary-select-container"
                                          role="combobox"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                          tabindex="0"
                                          aria-labelledby="select2-piece-sb-container"
                                          ><span
                                            class="select2-selection__rendered"
                                            id="select2-piece-sb-container"
                                            role="textbox"
                                            aria-readonly="true"
                                            title="1"
                                            >{{ item.count }}</span
                                          ><span
                                            class="select2-selection__arrow"
                                            role="presentation"
                                            ><b
                                              role="presentation"
                                            ></b></span></span></span
                                      ><span
                                        class="dropdown-wrapper"
                                        aria-hidden="true"
                                      ></span
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-8">
                        <div class="right">
                          <div class="price">{{ (item.product.price * item.count).toFixed(2) }} TL</div>
                          <a @click="removeBasketItem(item.id)" href="javascript:void(0);" class="remove-item"
                            ><i class="icon icon-close"></i>X</a
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
            <div class="col-xl-10 col-24">
              <div class="cards-wrapper">
                <div class="card article-card">
                  <div class="header bordered">
                    <h3 class="title">Sipariş Özeti</h3>
                    <span class="product-number">{{count}}</span>
                  </div>
                  <div class="body">
                    <div class="col-wrapper">
                      <div class="left">
                        <div class="text">Ürün Tutarı (KDV Dahil)</div>
                      </div>
                      <div class="right"><div class="price-text">{{total}}</div></div>
                    </div>
                  </div>
                  <div class="footer">
                    <a
                      href="/odeme"
                      class="btn large btn-block bg-cobalt text-white text-bold"
                      >ALIŞVERİŞİ TAMAMLA</a
                    >
                    <div class="card-img">
                      <img src="images/credit-cards-img.png" alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="discount-code-form" data-ajax-url="discountCodeForm.json">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="İndirim Kodunuz var mı?"
                    /><button class="btn" type="button" data-toggle="submit">
                      <i class="icon icon-long-arrow-right"></i>
                    </button>
                  </div>
                  <input id="discountCode" name="discountCode" type="hidden" />
                </div>
              </div>
              <div>
                <div class="cards-wrapper secondary">
                  <div class="card article-card">
                    <div class="col-wrapper">
                      <div class="left">
                        <div class="icon icon-return text-cobalt"></div>
                      </div>
                      <div class="right">
                        <div class="header text-cobalt">
                          <h3 class="subtitle">Ücretsiz İade İmkanı</h3>
                        </div>
                        <div class="desc">
                          Almış olduğunuz ürünü anlaşmalı olduğumuz UPS Kargo firmasına,
                          ambalajını açmadan/tahrip etmeden/bozmadan, ürünü kullanmadan
                          teslim tarihinden itibaren on dört (14) günlük süre içinde
                          teslim aldığınız şekli ile iade edebilirsiniz. Ürünü, faturası
                          ve iade formu ile iade ediniz. Kişiselleştirilmiş ürünler olan,
                          sırt baskılı forma ve üzerine alıcı talebi ile yazı yazdırılmış
                          diğer ürünlerin iadesi alınamaz.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card article-card">
                    <div class="col-wrapper">
                      <div class="left">
                        <div class="icon icon-box-open text-cobalt"></div>
                      </div>
                      <div class="right">
                        <div class="header text-cobalt">
                          <h3 class="subtitle">Gönderim ve Teslimat Hakkında</h3>
                        </div>
                        <div class="desc">
                          Sipariş etmiş olduğunuz ürünleri aynı gün kargoya teslim etmeye
                          gayret ediyoruz. Temini zaman alan ürünler için kargo teslim
                          süresi ürün detayında belirtildiği gibi 3-5 iş günüdür.
                          Gecikmesi muhtemel teslimat durumunda size bilgi verilecektir.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div id="partialHtml" class="d-none">
      <div class="cards-wrapper secondary">
        <div class="card article-card">
          <div class="col-wrapper">
            <div class="left">
              <div class="icon icon-return text-cobalt"></div>
            </div>
            <div class="right">
              <div class="header text-cobalt">
                <h3 class="subtitle">Ücretsiz İade İmkanı</h3>
              </div>
              <div class="desc">
                Almış olduğunuz ürünü anlaşmalı olduğumuz UPS Kargo firmasına, ambalajını
                açmadan/tahrip etmeden/bozmadan, ürünü kullanmadan teslim tarihinden
                itibaren on dört (14) günlük süre içinde teslim aldığınız şekli ile iade
                edebilirsiniz. Ürünü, faturası ve iade formu ile iade ediniz.
                Kişiselleştirilmiş ürünler olan, sırt baskılı forma ve üzerine alıcı
                talebi ile yazı yazdırılmış diğer ürünlerin iadesi alınamaz.
              </div>
            </div>
          </div>
        </div>
        <div class="card article-card">
          <div class="col-wrapper">
            <div class="left">
              <div class="icon icon-box-open text-cobalt"></div>
            </div>
            <div class="right">
              <div class="header text-cobalt">
                <h3 class="subtitle">Gönderim ve Teslimat Hakkında</h3>
              </div>
              <div class="desc">
                Sipariş etmiş olduğunuz ürünleri aynı gün kargoya teslim etmeye gayret
                ediyoruz. Temini zaman alan ürünler için kargo teslim süresi ürün
                detayında belirtildiği gibi 3-5 iş günüdür. Gecikmesi muhtemel teslimat
                durumunda size bilgi verilecektir.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script
      src="https://unpkg.com/react@16/umd/react.production.min.js"
      crossorigin=""
    ></script>
    <script
      src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
      crossorigin=""
    ></script>
  </main>
</template>


<script>

export default {
  data: () => {
    return {

    };
  },
  created() {

  },
  computed: {
    basket(){
      return this.$store.getters['basket/getBasketItems'];
    },
    subtotal(){
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += this.basket[i].product.price;
      }
      return total.toFixed(2);
    },
    total() {
      let total = 0;
      for (let i = 0; i < this.basket.length; i++) {
        total += (this.basket[i].product.price * this.basket[i].count);
      }
      return total.toFixed(2);
    }
  },
  methods: {
    clearBasket() {
      this.$store.dispatch('basket/clearBasket');
    },
    removeBasketItem(id){
      this.$store.dispatch('basket/removeBasketItem', id);
    },
    increase(id){
      this.$store.dispatch('basket/increaseBasketItem', id);
    },
    decrease(id){
      this.$store.dispatch("basket/decreaseBasketItem", id);
    }
  }
}
</script>
