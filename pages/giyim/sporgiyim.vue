<template>
  <main>
    <div id="primaryOverlay" ></div>
    <section class="primary-breadcrumb d-none d-lg-block">
      <div class="container">
        <ul
          class="list"
          itemscope=""
          itemtype="http://schema.org/BreadcrumbList"
        >
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
            <a itemprop="item" href="/kategori-urun/giyim">
              <span itemprop="name">Giyim</span>
            </a>
            <meta itemprop="position" content="2" />
          </li>
          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="http://schema.org/ListItem"
          >
            <a itemprop="item" href="/kategori-urun/giyim/spor-giyim">
              <span itemprop="name">Spor giyim</span>
            </a>
            <meta itemprop="position" content="2" />
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h1 class="d-none">Spor giyim</h1>
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
                        <a href="#" class="stpp link">Tüm Ürünler</a>
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
                                    value="010"
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
                                      opacity: 100;
                                      --darkreader-inline-bgimage: initial;
                                      --darkreader-inline-bgcolor: #181a1b;
                                      --darkreader-inline-border-top: initial;
                                      --darkreader-inline-border-right: initial;
                                      --darkreader-inline-border-bottom: initial;
                                      --darkreader-inline-border-left: initial;
                                    "
                                    data-darkreader-inline-bgimage=""
                                    data-darkreader-inline-bgcolor=""
                                    data-darkreader-inline-border-top=""
                                    data-darkreader-inline-border-right=""
                                    data-darkreader-inline-border-bottom=""
                                    data-darkreader-inline-border-left=""
                                  ></ins>
                                </div>
                                <span class="text">T-SHIRT</span></label
                              >
                            </div>
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
                                    value="012"
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
                                      opacity: 100;
                                      --darkreader-inline-bgimage: initial;
                                      --darkreader-inline-bgcolor: #181a1b;
                                      --darkreader-inline-border-top: initial;
                                      --darkreader-inline-border-right: initial;
                                      --darkreader-inline-border-bottom: initial;
                                      --darkreader-inline-border-left: initial;
                                    "
                                    data-darkreader-inline-bgimage=""
                                    data-darkreader-inline-bgcolor=""
                                    data-darkreader-inline-border-top=""
                                    data-darkreader-inline-border-right=""
                                    data-darkreader-inline-border-bottom=""
                                    data-darkreader-inline-border-left=""
                                  ></ins>
                                </div>
                                <span class="text">KAPRİ</span></label
                              >
                            </div>
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
                                    value="015"
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
                                      opacity: 100;
                                      --darkreader-inline-bgimage: initial;
                                      --darkreader-inline-bgcolor: #181a1b;
                                      --darkreader-inline-border-top: initial;
                                      --darkreader-inline-border-right: initial;
                                      --darkreader-inline-border-bottom: initial;
                                      --darkreader-inline-border-left: initial;
                                    "
                                    data-darkreader-inline-bgimage=""
                                    data-darkreader-inline-bgcolor=""
                                    data-darkreader-inline-border-top=""
                                    data-darkreader-inline-border-right=""
                                    data-darkreader-inline-border-bottom=""
                                    data-darkreader-inline-border-left=""
                                  ></ins>
                                </div>
                                <span class="text">YAĞMURLUK</span></label
                              >
                            </div>
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
                                    value="016"
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
                                      opacity: 100;
                                      --darkreader-inline-bgimage: initial;
                                      --darkreader-inline-bgcolor: #181a1b;
                                      --darkreader-inline-border-top: initial;
                                      --darkreader-inline-border-right: initial;
                                      --darkreader-inline-border-bottom: initial;
                                      --darkreader-inline-border-left: initial;
                                    "
                                    data-darkreader-inline-bgimage=""
                                    data-darkreader-inline-bgcolor=""
                                    data-darkreader-inline-border-top=""
                                    data-darkreader-inline-border-right=""
                                    data-darkreader-inline-border-bottom=""
                                    data-darkreader-inline-border-left=""
                                  ></ins>
                                </div>
                                <span class="text">KABAN</span></label
                              >
                            </div>
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
                                    value="017"
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
                                      opacity: 100;
                                      --darkreader-inline-bgimage: initial;
                                      --darkreader-inline-bgcolor: #181a1b;
                                      --darkreader-inline-border-top: initial;
                                      --darkreader-inline-border-right: initial;
                                      --darkreader-inline-border-bottom: initial;
                                      --darkreader-inline-border-left: initial;
                                    "
                                    data-darkreader-inline-bgimage=""
                                    data-darkreader-inline-bgcolor=""
                                    data-darkreader-inline-border-top=""
                                    data-darkreader-inline-border-right=""
                                    data-darkreader-inline-border-bottom=""
                                    data-darkreader-inline-border-left=""
                                  ></ins>
                                </div>
                                <span class="text">SWEATSHIRT</span></label
                              >
                            </div>
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
                                    value="050"
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
                                      opacity: 100;
                                      --darkreader-inline-bgimage: initial;
                                      --darkreader-inline-bgcolor: #181a1b;
                                      --darkreader-inline-border-top: initial;
                                      --darkreader-inline-border-right: initial;
                                      --darkreader-inline-border-bottom: initial;
                                      --darkreader-inline-border-left: initial;
                                    "
                                    data-darkreader-inline-bgimage=""
                                    data-darkreader-inline-bgcolor=""
                                    data-darkreader-inline-border-top=""
                                    data-darkreader-inline-border-right=""
                                    data-darkreader-inline-border-bottom=""
                                    data-darkreader-inline-border-left=""
                                  ></ins>
                                </div>
                                <span class="text">EŞOFMAN ALTI</span></label
                              >
                            </div>
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
                                    value="115"
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
                                      opacity: 100;
                                      --darkreader-inline-bgimage: initial;
                                      --darkreader-inline-bgcolor: #181a1b;
                                      --darkreader-inline-border-top: initial;
                                      --darkreader-inline-border-right: initial;
                                      --darkreader-inline-border-bottom: initial;
                                      --darkreader-inline-border-left: initial;
                                    "
                                    data-darkreader-inline-bgimage=""
                                    data-darkreader-inline-bgcolor=""
                                    data-darkreader-inline-border-top=""
                                    data-darkreader-inline-border-right=""
                                    data-darkreader-inline-border-bottom=""
                                    data-darkreader-inline-border-left=""
                                  ></ins>
                                </div>
                                <span class="text">MONT</span></label
                              >
                            </div>
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
                                    value="138"
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
                                      opacity: 100;
                                      --darkreader-inline-bgimage: initial;
                                      --darkreader-inline-bgcolor: #181a1b;
                                      --darkreader-inline-border-top: initial;
                                      --darkreader-inline-border-right: initial;
                                      --darkreader-inline-border-bottom: initial;
                                      --darkreader-inline-border-left: initial;
                                    "
                                    data-darkreader-inline-bgimage=""
                                    data-darkreader-inline-bgcolor=""
                                    data-darkreader-inline-border-top=""
                                    data-darkreader-inline-border-right=""
                                    data-darkreader-inline-border-bottom=""
                                    data-darkreader-inline-border-left=""
                                  ></ins>
                                </div>
                                <span class="text">RÜZGARLIK</span></label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card filter-card">
                      <h2
                        class="card-title"
                        data-toggle="collapse"
                        data-target="#collapseGenderFilter"
                        aria-expanded="false"
                        aria-controls="collapseGenderFilter"
                        data-index="0"
                      >
                        Cinsiyet<i class="fa fa-plus" aria-hidden="true"></i>
                      </h2>
                      <div
                        id="collapseGenderFilter"
                        class="collapse"
                        aria-labelledby="headingTwo"
                      >
                        <div class="card-body">
                          <div class="btn-group-toggle">
                            <label class="btn btn-filter type2 block active"
                              ><input
                                type="checkbox"
                                name="gender"
                                value="E"
                              /><span class="text">Erkek</span></label
                            ><label class="btn btn-filter type2 block"
                              ><input
                                type="checkbox"
                                name="gender"
                                value="K"
                              /><span class="text">Kadın</span></label
                            ><label class="btn btn-filter type2 block"
                              ><input
                                type="checkbox"
                                name="gender"
                                value="C"
                              /><span class="text">Çocuk</span></label
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
                        Fiyat<i class="fa fa-plus" aria-hidden="true"></i>
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
                              <option value="all" data-select2-id="2">
                                Hepsi
                              </option>
                              <option value="0-100">0 - 100 TL</option>
                              <option value="100-200">100 TL - 200 TL</option>
                              <option value="200-400">200 TL - 400 TL</option>
                              <option value="400-999999">
                                400+ TL
                              </option></select
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
                              ><input
                                type="checkbox"
                                name="size"
                                value="XS"
                              /><span class="text">XS</span></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="size"
                                value="S"
                              /><span class="text">S</span></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="size"
                                value="M"
                              /><span class="text">M</span></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="size"
                                value="L"
                              /><span class="text">L</span></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="size"
                                value="XL"
                              /><span class="text">XL</span></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="size"
                                value="2XL"
                              /><span class="text">2XL</span></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="size"
                                value="3XL"
                              /><span class="text">3XL</span></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="size"
                                value="4XL"
                              /><span class="text">4XL</span></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="size"
                                value="5XL"
                              /><span class="text">5XL</span></label
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
                                value="a9a9a9"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="
                                  background-color: rgb(169, 169, 169);
                                  --darkreader-inline-bgcolor: #494f52;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="00417f"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="
                                  background-color: rgb(0, 65, 127);
                                  --darkreader-inline-bgcolor: #003466;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="ffed00"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="
                                  background-color: rgb(255, 237, 0);
                                  --darkreader-inline-bgcolor: #ccbe00;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="fff"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="
                                  background-color: rgb(255, 255, 255);
                                  --darkreader-inline-bgcolor: #181a1b;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="000"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="
                                  background-color: rgb(0, 0, 0);
                                  --darkreader-inline-bgcolor: #000000;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="2a9df4"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="
                                  background-color: rgb(42, 157, 244);
                                  --darkreader-inline-bgcolor: #0968b0;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="159e2d"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="
                                  background-color: rgb(21, 158, 45);
                                  --darkreader-inline-bgcolor: #117e24;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="f6f2e6"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="
                                  background-color: rgb(246, 242, 230);
                                  --darkreader-inline-bgcolor: #342c13;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div></label
                            ><label class="btn btn-filter"
                              ><input
                                type="checkbox"
                                name="color"
                                value="D8F781"
                                class="rendered" />
                              <div
                                class="bg-color"
                                style="
                                  background-color: rgb(216, 247, 129);
                                  --darkreader-inline-bgcolor: #657c08;
                                "
                                data-darkreader-inline-bgcolor=""
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
                    <button
                      type="button"
                      class="btn-link dove-gray clearfilter"
                    >
                      Tüm Seçimleri Temizle
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="product-list-wrapper">
              <section class="section">
                <div class="section-header">
                  <h3 class="section-title secondary">Spor giyim</h3>
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
                        <option value="all" data-select2-id="5">
                          Trendler
                        </option>
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
                            aria-labelledby="select2-sort-37-container"
                            ><span
                              class="select2-selection__rendered"
                              id="select2-sort-37-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Trendler"
                              >Trendler</span
                            ><span
                              class="select2-selection__arrow"
                              role="presentation"
                              ><b role="presentation"></b></span></span></span
                        ><span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span
                      ></span>
                    </div>
                    <div class="form-group d-flex d-lg-none">
                      <button
                        class="btn-filter primary"
                        data-toggle="filter-sidebar"
                      >
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        ><span class="text">Filtre</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="product-card-list">
                  <div
                    class="deneme"
                    v-if="productLength<0"
                  >
                    <img
                      src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
                      alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif"
                    />
                  </div>
                  <div class="row" v-else>
                    <div
                      v-for="(item, index) in products"
                      :key="index"
                      class="col-xl-6 col-md-8 col-12"
                    >
                      <a :to="'/urun-detay/' + item.id" class="card-link"
                        ><div class="card product-card">
                          <div class="card-img">
                            <img :src="item.image" class="img-fluid" /><button
                              class="btn btn-icon-link"
                              data-toggle="addToFavorite"
                              data-id="TK050EAK08305"
                            >
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </button>
                            <div class="color-chart">
                              <div
                                class="chart-item active"
                                style="
                                  background-color: rgb(169, 169, 169);
                                  --darkreader-inline-bgcolor: #494f52;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div>
                              <div
                                class="chart-item"
                                style="
                                  background-color: rgb(0, 65, 127);
                                  --darkreader-inline-bgcolor: #003466;
                                "
                                data-darkreader-inline-bgcolor=""
                              ></div>
                            </div>
                          </div>
                          <div class="card-content">
                            <div class="text-wrapper">
                              <div class="card-title">
                                {{ item.title }}
                              </div>
                            </div>
                            <div class="text-wrapper price">
                              <div class="text">149.95 TL</div>
                              <div class="text type-fade d-none">
                                {{ item.price }} TL
                              </div>
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
                    <span class="current-count"
                      >Toplam <span class="count">24</span></span
                    ><span class="text">/</span
                    ><span class="total-count"
                      ><span class="count">197</span> İçerik</span
                    >
                    <div class="counter-bar">
                      <span class="bar" style="width: 12.1827%"></span>
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
  </main>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import axios from "axios";
export default {
  mounted() {
    const messageRef = this.$fire.database.ref("/");
    axios.get(messageRef.toString() + ".json").then((res) => {
      console.log(res.data);
      this.urunler = res.data;
    });
  },
  data() {
    return {
      urunler: [],
    };
  },
  created() {
    this.$store.dispatch("product/initData");
  },
  methods: {
    addBasket(item) {
      const payload = {
        id: Math.random() * 1000,
        count: 1,
        product: item,
      };
      this.$store.dispatch("basket/addBasket", payload);
    },
  },
};
</script>
