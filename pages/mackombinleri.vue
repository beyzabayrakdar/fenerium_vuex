<template>
  <main>
    <div id="primaryOverlay"></div>

    <script>
      window.MainCategoryCode = [
        "BE",
        "TB",
        "TA",
        "AT",
        "SM",
        "HA",
        "EG",
        "PU",
        "AŞ",
        "TK",
        "KR",
        "SA",
        "KN",
        "KS",
        "CN",
        "ET",
        "AY",
        "DK",
        "OK",
        "MC",
        "ZC",
        "OY",
        "EL",
      ];
      window.CategoryCode = ["erkek-mac-gunu-kombinleri"];
      window.Gender = "E";
      window.Season = [
        "0Y",
        "0S",
        "0K",
        "1Y",
        "1S",
        "1K",
        "2Y",
        "2S",
        "2K",
        "3Y",
        "3S",
        "3K",
        "4Y",
        "4S",
        "4K",
        "5Y",
        "5S",
        "5K",
        "6Y",
        "6S",
        "6K",
        "7Y",
        "7S",
        "7K",
        "8Y",
        "8S",
        "8K",
        "9Y",
        "9S",
        "9K",
        "AY",
        "AS",
        "AK",
      ];
      window.Keyword = "";
      window.Favourites = [];
      window.Key = "5cedd178-2d7b-4984-a20b-f8fbb11e4c93";
    </script>

    <section class="primary-breadcrumb d-none d-lg-block">
      <div class="container">
        <ul class="list" itemscope="" itemtype="http://schema.org/BreadcrumbList">
          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="http://schema.org/ListItem"
          >
            <a itemprop="item" href="/">
              <span itemprop="name">Anasayfa</span>
            </a>
            <meta itemprop="position" content="1" />
          </li>
          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="http://schema.org/ListItem"
          >
            <a itemprop="item" href="/kategori-urun/erkek">
              <span itemprop="name">Erkek</span>
            </a>
            <meta itemprop="position" content="2" />
          </li>
          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="http://schema.org/ListItem"
          >
            <a itemprop="item" href="/kategori-urun/erkek/mac-gunu-kombinleri">
              <span itemprop="name">Maç günü kombinleri</span>
            </a>
            <meta itemprop="position" content="2" />
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h1 class="d-none">Maç günü kombinleri</h1>
      <div id="ProductListApp">
        <div class="container">
          <div class="row product-list-page">
            <div class="product-sidebar">
              <div class="sidebar-filter" data-toggle="filterSidebar">
                <form action="" method="post" class="product-filter-form">
                  <div class="filter-header d-flex d-lg-none">
                    <h4 class="filter-title">Filtrele</h4>
                    <button
                      type="button"
                      class="btn btn-close"
                      data-toggle="filter-sidebar"
                    >
                      <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div class="accordion tertiary" id="accordionFilter">
                    <div class="card filter-card">
                      <h2
                        class="card-title secondary"
                        data-toggle="collapse"
                        data-target="#collapseTypeFilter"
                        aria-expanded="true"
                        aria-controls="collapseTypeFilter"
                        data-index="0"
                      >
                        <a href="#" class="stpp link d-none">Tüm Ürünler</a>
                      </h2>
                      <div
                        id="collapseTypeFilter"
                        class="collapse show"
                        aria-labelledby="headingOne"
                      >
                        <div class="card-body">
                          <div class="category-filter-wrapper">
                            <div class="form-group">
                              <label class="check-wrapper"
                                ><div
                                  class="icheckbox_tertiary"
                                  style="position: relative"
                                >
                                  <input
                                    class="tertiary-icheck rendered"
                                    type="checkbox"
                                    name="categoryFilter"
                                    value="erkek-mac-gunu-kombinleri"
                                    style="position: absolute; opacity: 0"
                                  /><ins
                                    class="iCheck-helper"
                                    style="
                                      position: absolute;
                                      top: 0%;
                                      left: 0%;
                                      display: block;
                                      width: 100%;
                                      height: 100%;
                                      margin: 0px;
                                      padding: 0px;
                                      background: rgb(255, 255, 255);
                                      border: 0px;
                                      opacity: 0;
                                    "
                                  ></ins>
                                </div>
                                <span class="text"
                                  >ERKEKLER İÇİN MAÇ GÜNÜ KOMBİNLERİ</span
                                ></label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card filter-card">
                      <h2
                        class="card-title collapsed"
                        data-toggle="collapse"
                        data-target="#collapseGenderFilter"
                        aria-expanded="false"
                        aria-controls="collapseGenderFilter"
                        data-index="0"
                      >
                        Cinsiyet
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </h2>
                      <div
                        id="collapseGenderFilter"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        style=""
                      >
                        <div class="card-body">
                          <div class="btn-group-toggle">
                            <label class="btn btn-filter type2 block active">
                              <input type="checkbox" name="gender" value="E" />
                              <span class="text">Erkek</span>
                            </label>
                            <label class="btn btn-filter type2 block">
                              <input type="checkbox" name="gender" value="K" />
                              <span class="text">Kadın</span></label
                            ><label class="btn btn-filter type2 block"
                              ><input type="checkbox" name="gender" value="C" /><span
                                class="text"
                                >Çocuk</span
                              ></label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card filter-card">
                      <h2
                        class="card-title"
                        data-toggle="collapse"
                        data-target="#collapsePriceFilter"
                        aria-expanded="false"
                        aria-controls="collapsePriceFilter"
                        data-index="0"
                      >
                        Fiyat
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </h2>
                      <div
                        id="collapsePriceFilter"
                        class="collapse"
                        aria-labelledby="headingThree"
                      >
                        <div class="card-body">
                          <div class="form-group">
                            <select
                              id="price"
                              name="price"
                              class="tertiary-select select2-hidden-accessible rendered"
                              data-placeholder=""
                              data-container-class="tertiary-select-container"
                              data-dropdown-class="tertiary-select-dropdown"
                              data-select2-id="price"
                              tabindex="-1"
                              aria-hidden="true"
                            >
                              <option value="all" data-select2-id="2">Hepsi</option>
                              <option value="0-100">0 - 100 TL</option>
                              <option value="100-200">100 TL - 200 TL</option>
                              <option value="200-400">200 TL - 400 TL</option>
                              <option value="400-999999">400+ TL</option></select
                            ><span
                              class="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id="1"
                              style="width: 100%"
                              ><span class="selection"
                                ><span
                                  class="select2-selection select2-selection--single tertiary-select-container"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabindex="0"
                                  aria-labelledby="select2-price-container"
                                  ><span
                                    class="select2-selection__rendered"
                                    id="select2-price-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Hepsi"
                                    >Hepsi</span
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
                    <div class="card filter-card">
                      <h2
                        class="card-title"
                        data-toggle="collapse"
                        data-target="#collapseSizeFilter"
                        aria-expanded="false"
                        aria-controls="collapseSizeFilter"
                        data-index="0"
                      >
                        Beden<i class="fa fa-plus" aria-hidden="true"></i>
                      </h2>
                      <div
                        id="collapseSizeFilter"
                        class="collapse"
                        aria-labelledby="headingThree"
                      >
                        <div class="card-body">
                          <div class="btn-group-toggle btn-full-size">
                            <label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="56" /><span
                                class="text"
                                >56</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="58" /><span
                                class="text"
                                >58</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="STD" /><span
                                class="text"
                                >STD</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="XS" /><span
                                class="text"
                                >XS</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="S" /><span
                                class="text"
                                >S</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="M" /><span
                                class="text"
                                >M</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="L" /><span
                                class="text"
                                >L</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="XL" /><span
                                class="text"
                                >XL</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="2XL" /><span
                                class="text"
                                >2XL</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="3XL" /><span
                                class="text"
                                >3XL</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="4XL" /><span
                                class="text"
                                >4XL</span
                              ></label
                            ><label class="btn btn-filter"
                              ><input type="checkbox" name="size" value="5XL" /><span
                                class="text"
                                >5XL</span
                              ></label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card filter-card">
                      <h2
                        class="card-title"
                        data-toggle="collapse"
                        data-target="#collapseColorFilter"
                        aria-expanded="false"
                        aria-controls="collapseColorFilter"
                        data-index="0"
                      >
                        Renk<i class="fa fa-plus" aria-hidden="true"></i>
                      </h2>
                      <div
                        id="collapseColorFilter"
                        class="collapse"
                        aria-labelledby="headingThree"
                      >
                        <div class="card-body">
                          <div class="btn-group-toggle">
                            <label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="00417f"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="background-color: rgb(0, 65, 127)"
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="ffed00"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="background-color: rgb(255, 237, 0)"
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="2a9df4"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="background-color: rgb(42, 157, 244)"
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="000"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="background-color: rgb(0, 0, 0)"
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="fff"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="background-color: rgb(255, 255, 255)"
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="a9a9a9"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="background-color: rgb(169, 169, 169)"
                              ></div
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="link-wrap d-flex flex-column justify-content-center align-items-center"
                  >
                    <button type="button" class="btn-link dove-gray clearfilter">
                      Tüm Seçimleri Temizle
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="product-list-wrapper">
              <section class="section">
                <div class="section-header">
                  <h3 class="section-title secondary">Maç günü kombinleri</h3>
                  <form action="" class="listing-form" method="post">
                    <div class="form-group">
                      <select
                        name="sort"
                        class="tertiary-select select2-hidden-accessible rendered"
                        data-placeholder="Trendler"
                        data-container-class="tertiary-select-container"
                        data-dropdown-class="tertiary-select-dropdown"
                        data-select2-id="3"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="all" data-select2-id="5">Trendler</option>
                        <option value="priceLow">Fiyata göre artan</option>
                        <option value="priceHigh">Fiyata göre azalan</option>
                        <option value="date">Son Eklenenler</option></select
                      ><span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="4"
                        style="width: 100%"
                        ><span class="selection"
                          ><span
                            class="select2-selection select2-selection--single tertiary-select-container"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-labelledby="select2-sort-j9-container"
                            ><span
                              class="select2-selection__rendered"
                              id="select2-sort-j9-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Trendler"
                              >Trendler</span
                            ><span class="select2-selection__arrow" role="presentation"
                              ><b role="presentation"></b></span></span></span
                        ><span class="dropdown-wrapper" aria-hidden="true"></span
                      ></span>
                    </div>
                    <div class="form-group d-flex d-lg-none">
                      <button class="btn-filter primary" data-toggle="filter-sidebar">
                        <i class="icon fas fa-heart"></i>
                        <span class="text">Filtre</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="product-card-list">
                  <div class="row">
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/sari-lacivert-fenerin-maci-var-sapka-p-TA019UAY074SR"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TA019UAY074SR.jpg"
                              alt="Sarı Lacivert Fenerin Maçı Var Şapka"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TA019UAY074SR"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Sarı Lacivert Fenerin Maçı Var Şapka
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">40.95 TL</div>
                              <div class="text type-fade">54.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/sari-lacivert-est-1907-sal-p-TA145UAK034SR"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TA145UAK034SR.jpg"
                              alt="Sarı Lacivert Est 1907 Şal"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TA145UAK034SR"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">Sarı Lacivert Est 1907 Şal</div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">20.95 TL</div>
                              <div class="text type-fade">34.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/sari-lacivert-kalpler-beraber-sal-p-TA145U9Y095LC"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TA145U9Y095LC.jpg"
                              alt="Sarı Lacivert Kalpler Beraber Şal"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TA145U9Y095LC"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Sarı Lacivert Kalpler Beraber Şal
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">17.50 TL</div>
                              <div class="text type-fade">34.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/sari-basket-18-19-kalkan-sapka-p-TA019U9S04500"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TA019U9S04500.jpg"
                              alt="Sarı Basket 18-19 Kalkan Şapka"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TA019U9S04500"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">Sarı Basket 18-19 Kalkan Şapka</div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">24.95 TL</div>
                              <div class="text type-fade">49.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a href="/sari-6-renk-logo-sapka-p-TA019UAY01500" class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TA019UAY01500.jpg"
                              alt="Sarı 6 Renk Logo Şapka"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TA019UAY01500"
                            >
                            <i class="icon fas fa-heart"></i>
                              
                            </button>
                            <div class="color-chart">
                              <div
                                class="chart-item active"
                                style="background-color: rgb(255, 237, 0)"
                              ></div>
                              <div
                                class="chart-item"
                                style="background-color: rgb(0, 65, 127)"
                              ></div>
                              <div
                                class="chart-item"
                                style="background-color: rgb(255, 255, 255)"
                              ></div>
                            </div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">Sarı 6 Renk Logo Şapka</div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">40.95 TL</div>
                              <div class="text type-fade">54.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/lacivert-est-1907-kadikoy-sal-p-TA145UAY03407"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TA145UAY03407.jpg"
                              alt="Lacivert Est 1907 Kadıköy Şal"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TA145UAY03407"
                            >
                              <i class="icon fas fa-shopping-basket"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">Lacivert Est 1907 Kadıköy Şal</div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">25.95 TL</div>
                              <div class="text type-fade">34.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/fenerbahce-lacivert-yarim-logo-sal-p-TA145UAY01407"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TA145UAY01407.jpg"
                              alt="Fenerbahçe Lacivert Yarım Logo Şal"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TA145UAY01407"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Fenerbahçe Lacivert Yarım Logo Şal
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">25.95 TL</div>
                              <div class="text type-fade">34.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/sari-19-20-basket-offense-sal-p-TA145UAS01500"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TA145UAS01500.jpg"
                              alt="Sarı 19/20 Basket Offense Şal"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TA145UAS01500"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">Sarı 19/20 Basket Offense Şal</div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">30.00 TL</div>
                              <div class="text type-fade">34.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-lacivert-2019-20-a-takim-hoca-antrenman-t-shirt-p-AT010E9S024MV"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/AT010E9S024MV.jpg"
                              alt="Erkek Lacivert 2019/20 A Takım Hoca Antrenman T-Shirt "
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="AT010E9S024MV"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Lacivert 2019/20 A Takım Hoca Antrenman T-Shirt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">94.95 TL</div>
                              <div class="text type-fade">129.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-cubuklu-fenerbahce-2020-21-mac-formasi-p-AT013EAS015LC"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/AT013EAS015LC-03.jpg"
                              alt="Erkek Çubuklu Fenerbahçe 2020/21 Maç Forması"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="AT013EAS015LC"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Çubuklu Fenerbahçe 2020/21 Maç Forması
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">289.00 TL</div>
                              <div class="text type-fade d-none">289.00 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-lacivert-beyaz-2020-21-a-takim-futbolcu-kamp-ust-p-AT017EAS014BZ"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/AT017EAS014BZ.jpg"
                              alt="Erkek Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="AT017EAS014BZ"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Lacivert Beyaz 2020/21 A Takım Futbolcu Kamp Üst
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">449.00 TL</div>
                              <div class="text type-fade d-none">449.00 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-lacivert-beyaz-2020-21-a-takim-kamp-tek-alt-p-AT050EAS014BZ"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/AT050EAS014BZ.jpg"
                              alt="Erkek Lacivert Beyaz 2020/21 A Takım Kamp Tek Alt"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="AT050EAS014BZ"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Lacivert Beyaz 2020/21 A Takım Kamp Tek Alt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">279.00 TL</div>
                              <div class="text type-fade d-none">279.00 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-lacivert-beyaz-2020-21-a-takim-futbolcu-antrenman-tshirt-p-AT010EAS014BZ"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/AT010EAS014BZ.jpg"
                              alt="Erkek Lacivert Beyaz 2020/21 A Takım Futbolcu Antrenman T-shirt"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="AT010EAS014BZ"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Lacivert Beyaz 2020/21 A Takım Futbolcu Antrenman
                                T-shirt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">209.00 TL</div>
                              <div class="text type-fade d-none">209.00 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-mavi-beyaz-2020-21-a-takim-hoca-antrenman-tshirt-p-AT010EAS021BZ"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/AT010EAS021BZ.jpg"
                              alt="Erkek Mavi Beyaz 2020/21 A Takım Hoca Antrenman T-shirt"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="AT010EAS021BZ"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Mavi Beyaz 2020/21 A Takım Hoca Antrenman T-shirt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">209.00 TL</div>
                              <div class="text type-fade d-none">209.00 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-gold-fenerbagce-2020-21-mac-formasi-p-AT013EAS02506"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/AT013EAS02506.jpg"
                              alt="Erkek Gold Fenerbahçe 2020/21 Maç Forması"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="AT013EAS02506"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Gold Fenerbahçe 2020/21 Maç Forması
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">289.00 TL</div>
                              <div class="text type-fade d-none">289.00 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-lacivert-fenerbahce-2020-21-mac-formasi-p-AT013EAS03400"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/AT013EAS03400.jpg"
                              alt="Erkek Lacivert Fenerbahçe 2020/21 Maç Forması"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="AT013EAS03400"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Lacivert Fenerbahçe 2020/21 Maç Forması
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">289.00 TL</div>
                              <div class="text type-fade d-none">289.00 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-lacivert-beyaz-2020-21-a-takim-antrenman-tek-alt-p-AT050EAS024BZ"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/AT050EAS024BZ.jpg"
                              alt="Erkek 2020/21 A Takım Antrenman Tek Alt"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="AT050EAS024BZ"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek 2020/21 A Takım Antrenman Tek Alt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">339.00 TL</div>
                              <div class="text type-fade d-none">339.00 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-sari-tribun-bin-dokuz-yuz-yedi-t-shirt-p-TK010E9Y33500"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TK010E9Y33500.jpg"
                              alt="Erkek Sarı Tribün Bin Dokuz Yüz Yedi T-Shirt "
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TK010E9Y33500"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Sarı Tribün Bin Dokuz Yüz Yedi T-Shirt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">54.95 TL</div>
                              <div class="text type-fade">89.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-lacivert-tribun-basic-kapri-p-TK012E9Y02407"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TK012E9Y02407.jpg"
                              alt="Erkek Lacivert Tribün Basic Kapri "
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TK012E9Y02407"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Lacivert Tribün Basic Kapri
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">94.95 TL</div>
                              <div class="text type-fade">129.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-lacivert-basket-top-tshirt-p-TK010E9S24407"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TK010E9S24407.jpg"
                              alt="Erkek Lacivert Basket Top T-Shirt"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TK010E9S24407"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Lacivert Basket Top T-Shirt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">59.95 TL</div>
                              <div class="text type-fade">79.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/basket-lacivert-kalkan-t-shirt-p-TK010E9S23407"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TK010E9S23407.jpg"
                              alt="Basket Lacivert Kalkan T-Shirt"
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TK010E9S23407"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart"></div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">Basket Lacivert Kalkan T-Shirt</div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">54.95 TL</div>
                              <div class="text type-fade">74.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-mavi-tribun-kisa-kollu-emboss-t-shirt-p-TK010E9S02100"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TK010E9S02100-01.jpg"
                              alt="Erkek Mavi Tribün Kısa Kollu Emboss T-Shirt "
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TK010E9S02100"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart">
                              <div
                                class="chart-item active"
                                style="background-color: rgb(42, 157, 244)"
                              ></div>
                              <div
                                class="chart-item"
                                style="background-color: rgb(255, 255, 255)"
                              ></div>
                              <div
                                class="chart-item"
                                style="background-color: rgb(0, 65, 127)"
                              ></div>
                              <div
                                class="chart-item"
                                style="background-color: rgb(21, 158, 45)"
                              ></div>
                            </div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Mavi Tribün Kısa Kollu Emboss T-Shirt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">64.95 TL</div>
                              <div class="text type-fade">89.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-beyaz-tribun-yarim-logo-t-shirt-p-TK010E9S04001"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TK010E9S04001.jpg"
                              alt="Erkek Beyaz Tribün Yarım Logo T-Shirt "
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TK010E9S04001"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart">
                              <div
                                class="chart-item active"
                                style="background-color: rgb(255, 255, 255)"
                              ></div>
                              <div
                                class="chart-item"
                                style="background-color: rgb(0, 65, 127)"
                              ></div>
                              <div
                                class="chart-item"
                                style="background-color: rgb(255, 237, 0)"
                              ></div>
                            </div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Beyaz Tribün Yarım Logo T-Shirt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">79.95 TL</div>
                              <div class="text type-fade d-none">79.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                    <div class="col-xl-6 col-md-8 col-12">
                      <a
                        href="/erkek-fume-tribun-kisa-kollu-emboss-t-shirt-p-TK010E9S06304"
                        class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img
                              src="https://fenerium.com/Fenerium/media/images/urunler/TK010E9S06304.jpg"
                              alt="Erkek Füme Tribün Kısa Kollu Emboss T-Shirt "
                              class="img-fluid"
                            /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TK010E9S06304"
                            >
                              <i class="icon fas fa-heart"></i>
                            </button>
                            <div class="color-chart">
                              <div
                                class="chart-item active"
                                style="background-color: rgb(169, 169, 169)"
                              ></div>
                              <div
                                class="chart-item"
                                style="background-color: rgb(255, 255, 255)"
                              ></div>
                              <div
                                class="chart-item"
                                style="background-color: rgb(0, 65, 127)"
                              ></div>
                            </div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                Erkek Füme Tribün Kısa Kollu Emboss T-Shirt
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">89.95 TL</div>
                              <div class="text type-fade d-none">89.95 TL</div>
                            </div>
                          </div>
                        </div></a
                      >
                    </div>
                  </div>
                </div>
              </section>
              <div class="filter-section">
                <div class="section-footer">
                  <div class="content-counter">
                    <span class="current-count">Toplam <span class="count">24</span></span
                    ><span class="text">/</span
                    ><span class="total-count"><span class="count">42</span> İçerik</span>
                    <div class="counter-bar">
                      <span class="bar" style="width: 57.1429%"></span>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline brownish-grey type-2"
                    data-toggle="btn-load-more"
                  >
                    DEVAMINI GÖR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
