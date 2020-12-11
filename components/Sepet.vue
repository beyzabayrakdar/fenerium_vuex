<template>
  <div class="shopping-basket" data-toggle="basket">
    <div class="inner" data-toggle="innerBasket">
      <div class="head">
        <div href="/header/sepetim" class="total">
          Sepetim
          <span class="count">( <span data-toggle="totalCount">{{ totalBasketItemCount > 0 ? "("+totalBasketItemCount+")" : "" }}</span> ürün )</span>
        </div>
        <a href="" class="clear" data-toggle="clearBasket">
          Sepeti Temizle
          <i class="fa fa-trash"></i>
        </a>
      </div>

      <div class="content">
        <ul class="basket-card-list"><li class="basket-card">
          <div class="row">
            <div class="col-17 col-md-13">
              <div class="left">
                <div class="image-wrapper">
                  <img src="https://fenerium.com/Fenerium/media/images/urunler/TK050EAK08305.jpg" alt="" class="img-fluid">
                </div>
                <div>
                  <div class="product-title">
                    Erkek Antrasit Tribün Nos Tek Alt
                  </div>
                  <table class="info-list">
                    <tbody>
                    <tr class="d-none">
                      <td>Ürün Kodu :</td>
                      <td>TK050EAK08305</td>
                    </tr>
                    <tr class="">
                      <td>Beden :</td>
                      <td>S</td>
                    </tr>
                    <tr class="">
                      <td>Adet :</td>
                      <td>1</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-7 col-md-11">
              <div class="right">
                <div class="price">149.95 TL</div>
                <div class="old-price d-none">NaN TL</div>
                <a href="" class="remove-item" data-toggle="removeBasketItem" data-id="[&quot;19fb01a0-633c-4e0f-971b-3ca75ce2c5c3&quot;]">
                  <span class="d-none d-md-inline">Ürünü Sil</span>
                  <i class="fa fa-trash"></i>
                </a>
              </div>
            </div>
          </div>
        </li></ul>
        <div id="basketAuctionTimer" class="d-none">
          <div class="d-flex align-items-center align-items-md-stretch flex-md-column mt-4">
            <div class="auction-time-card-title">
              <span class="d-none d-md-block">Ürünü Satın Almak İçin Kalan Süreniz:</span>
              <span class="d-md-none">KALAN SÜRE:</span>
            </div>

            <div class="auction-time-card flex-grow-1" data-toggle="basketExpireDate" data-expire-date="">
              <div class="item ">
                <span class="number">00</span>
                <span>GÜN</span>
              </div>
              <div class="item">
                <span class="number">00</span>
                <span>SAAT</span>
              </div>
              <div class="item">
                <span class="number">00</span>
                <span>DAKİKA</span>
              </div>
              <div class="item d-none">
                <span class="number">00</span>
                <span>SANİYE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="total-price-info d-none">
          <div class="price-desc">
            İndirim Tutarı
          </div>
          <div class="total-price"><span data-toggle="discountPrice"></span> TL</div>
        </div>
        <div class="total-price-info">
          <div class="price-desc">
            Toplam Tutar <span>(KDV Dahil)</span>
          </div>
          <div class="total-price"><span data-toggle="totalPrice">149.95</span> TL</div>
        </div>
        <div class="links">
          <div class="row">
            <div class="col-md-12 col-24 order-md-1 order-2">
              <a href="/sepetim" class="btn btn-block md btn-outline brownish-grey" title="SEPETİ GÖRÜNTÜLE">SEPETİ GÖRÜNTÜLE</a>
            </div>
            <div class="col-md-12 col-24 order-md-2 order-1">
              <a href="/odeme" class="btn btn-block md btn-primary" title="SATIN AL">SATIN AL</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="inner hidden" data-toggle="innerEmptyBasket">
      <div class="content">
        Sepetinizde ürün bulunmamaktadır.
        <br>
        <br>
      </div>
    </div>
  </div>
</template>
