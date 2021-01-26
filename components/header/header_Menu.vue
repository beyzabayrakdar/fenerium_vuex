<template>
    <header>
<div id="header-wrapper">
    <div class="header-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-24 col-xl-22 wrapper offset-xl-1">
                    <button class="menu-btn" type="button" data-toggle="open-nav">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <i class="icon icon-close"></i>
                    </button>
                    <nav class="category-nav">
                        <ul>
                                <li class="active">
                                    <a href="/Home/GenderChanged?code=E" title="Erkek">Erkek</a>
                                </li>
                                <li class="">
                                    <a href="/Home/GenderChanged?code=K" title="Kadın">Kadın</a>
                                </li>
                                <li class="">
                                    <a href="/Home/GenderChanged?code=C" title="Çocuk">Çocuk</a>
                                </li>
                            <li class="d-md-none">
                                <a href="/favorilerim" title="FAVORİLER">
                                    <div class="icon-wrapper">
                                        <i class="icon icon-heart-outline"></i>
                                        <span class="number primary hidden" data-toggle="favoriteCount">0</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a href="/" class="logo">
                        <img src="/images/logo.svg" alt="">
                    </a>
                    <nav class="right-nav">
                        <ul>
                            <li class="hidden-mobile">
                                    <a href="#loginModal" data-toggle="modal" title="GİRİŞ YAP">GİRİŞ YAP</a>
                            </li>
                            <li class="hidden-mobile">
                                <a href="/favorilerim" title="FAVORİLER">
                                    FAVORİLER
                                    <div class="icon-wrapper">
                                        <i class="icon icon-heart-outline"></i>
                                        <span class="number primary hidden" data-toggle="favoriteCount">0</span>
                                    </div>
                                </a>
                            </li>
                                <li class="">
                                    <a href="" title="SEPETİM" data-toggle="open-shopping-basket">
                                        <span class="hidden-mobile">SEPETİM</span>
                                        <div class="icon-wrapper">
                                            <i class="icon icon-basket"></i>
                                            <span class="number secondary hidden" data-toggle="basketCount"></span>
                                        </div>
                                    </a>
                                    <div class="shopping-basket" data-toggle="basket">
                                        <div class="inner hidden" data-toggle="innerBasket">
                                            <div class="head">
                                                <div class="total">
                                                    Sepetim
                                                    <span class="count">( <span data-toggle="totalCount"></span>Ürün)</span>
                                                </div>
                                                <a href="" class="clear" data-toggle="clearBasket">
                                                    Sepeti Temizle
                                                    <i class="fa fa-trash"></i>
                                                </a>
                                            </div>

                                            <div class="content">
                                                <ul class="basket-card-list"></ul>
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
                                                    <div class="total-price"><span data-toggle="totalPrice"></span> TL</div>
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

                                        <div class="inner" data-toggle="innerEmptyBasket">
                                            <div class="content">
                                                Sepetinizde ürün bulunmamaktadır.
                                                <br>
                                                <br>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            <li class="mobile-search-link">
                                <a href="#" title="" data-toggle="btnSearch">
                                    <i class="icon icon-search"></i>
                                </a>
                            </li>
                            <li class="lang-wrap">
                                    <a class="lang-link" href="#" title="" data-toggle="btnLang" data-value="en-US">
                                        <span>EN</span>
                                        <div class="icon-wrapper">
                                            <i class="icon icon-globe-bordered"></i>
                                        </div>
                                    </a>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div class="header-bottom ">
        <div class="container-fluid">
            <div class="row">
                

<div class="col-24 col-xl-22 offset-xl-1 wrapper">
    <nav class="main-nav">
        <ul>

                <li class="has-sub">
                    <a href="/kategori-urun/mac-malzemeleri" title="Maç Malzemeleri">
                        Maç Malzemeleri
                        <span class="btn-sub">
                            <i class="fa"></i>
                        </span>
                    </a>
                        <div class="mega-menu">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-24 col-xl-22 offset-xl-1">
                                        <div class="row menu-outer">
                                            <div class="col-lg-4 col-md-6 hidden-mobile">
                                                <ul class="ymi-list">
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/yeni-urunler" title="Yeni Ürünler">Yeni Ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/sizin-icin-sectiklerimiz" title="Yeni Ürünler">Sizin İçin Seçtiklerimiz</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/fener-ol" title="Yeni Ürünler">Fener Ol</a>
                                                            </li>

                                                </ul>
                                            </div>

                                            <div class="col-lg-20 col-md-18 col-24">
                                                <div class="menu-outer" data-toggle="isotope-wrapper">

                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/mac-malzemeleri/futbol" title="FUTBOL">
                                                                    FUTBOL
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/futbol/cubuklu-forma" title="Çubuklu Forma">Çubuklu Forma</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/futbol/gold-forma" title="Gold Forma">Gold Forma</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/futbol/laci-forma" title="Lacivert Forma">Lacivert Forma</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/futbol/kaleci-forma" title="Kaleci Forma">Kaleci Forma</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/mac-malzemeleri/basketbol" title="BASKETBOL">
                                                                    BASKETBOL
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/basketbol/cubuklu-forma" title="Çubuklu Forma">Çubuklu Forma</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/mac-malzemeleri/voleybol" title="VOLEYBOL">
                                                                    VOLEYBOL
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/voleybol/beyaz-forma" title="Beyaz Forma">Beyaz Forma</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/voleybol/cubuklu-forma" title="Çubuklu Forma">Çubuklu Forma</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/voleybol/lacivert-forma" title="Lacivert Forma">Lacivert Forma</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/voleybol/sari-forma" title="Sarı Forma">Sarı Forma</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/mac-malzemeleri/espor" title="ESPOR">
                                                                    ESPOR
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/mac-malzemeleri/espor/forma" title="Forma">Forma</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </li>
                <li class="has-sub">
                    <a href="/kategori-urun/antrenman" title="Antrenman">
                        Antrenman
                        <span class="btn-sub">
                            <i class="fa"></i>
                        </span>
                    </a>
                        <div class="mega-menu">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-24 col-xl-22 offset-xl-1">
                                        <div class="row menu-outer">
                                            <div class="col-lg-4 col-md-6 hidden-mobile">
                                                <ul class="ymi-list">
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/yeni-urunler" title="Yeni Ürünler">Yeni Ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/sizin-icin-sectiklerimiz" title="Yeni Ürünler">Sizin İçin Seçtiklerimiz</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/fener-ol" title="Yeni Ürünler">Fener Ol</a>
                                                            </li>

                                                </ul>
                                            </div>

                                            <div class="col-lg-20 col-md-18 col-24">
                                                <div class="menu-outer" data-toggle="isotope-wrapper">

                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/antrenman/futbol" title="FUTBOL">
                                                                    FUTBOL
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/futbol/tshirt" title="Tshirt">Tshirt</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/futbol/polo-tshirt" title="Polo Tshirt">Polo Tshirt</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/futbol/sort" title="Şort">Şort</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/futbol/kapri" title="Kapri">Kapri</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/futbol/sweatshirt" title="Sweatshirt">Sweatshirt</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/futbol/esofman-alti" title="Eşofman Altı">Eşofman Altı</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/futbol/yagmurluk" title="Yağmurluk">Yağmurluk</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/antrenman/basketbol" title="BASKETBOL">
                                                                    BASKETBOL
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/basketbol/aksesuar" title="Aksesuar">Aksesuar</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/basketbol/esofman-alti" title="Eşofman Altı">Eşofman Altı</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/basketbol/sweatshirt" title="Sweatshirt">Sweatshirt</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/basketbol/tshirt" title="Tshirt">Tshirt</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/antrenman/voleybol" title="VOLEYBOL">
                                                                    VOLEYBOL
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/voleybol/sweatshirt" title="Sweatshirt">Sweatshirt</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/antrenman/voleybol/tshirt" title="Tshirt">Tshirt</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </li>
                <li class="has-sub">
                    <a href="/kategori-urun/giyim" title="Giyim">
                        Giyim
                        <span class="btn-sub">
                            <i class="fa"></i>
                        </span>
                    </a>
                        <div class="mega-menu">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-24 col-xl-22 offset-xl-1">
                                        <div class="row menu-outer">
                                            <div class="col-lg-4 col-md-6 hidden-mobile">
                                                <ul class="ymi-list">
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/yeni-urunler" title="Yeni Ürünler">Yeni Ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/sizin-icin-sectiklerimiz" title="Yeni Ürünler">Sizin İçin Seçtiklerimiz</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/fener-ol" title="Yeni Ürünler">Fener Ol</a>
                                                            </li>

                                                </ul>
                                            </div>

                                            <div class="col-lg-20 col-md-18 col-24">
                                                <div class="menu-outer" data-toggle="isotope-wrapper">

                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/giyim/tshirt" title="TSHIRT">
                                                                    TSHIRT
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/giyim/sweatshirt" title="SWEATSHIRT">
                                                                    SWEATSHIRT
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/giyim/gomlek" title="GÖMLEK">
                                                                    GÖMLEK
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/giyim/dis-giyim" title="DIŞ GİYİM">
                                                                    DIŞ GİYİM
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/giyim/ust-giyim" title="ÜST GİYİM">
                                                                    ÜST GİYİM
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/giyim/alt-giyim" title="ALT GİYİM">
                                                                    ALT GİYİM
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/giyim/spor-giyim" title="SPOR GİYİM">
                                                                    SPOR GİYİM
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </li>
                <li class="has-sub">
                    <a href="/kategori-urun/ev-yasam" title="Ev/Yaşam">
                        Ev/Yaşam
                        <span class="btn-sub">
                            <i class="fa"></i>
                        </span>
                    </a>
                        <div class="mega-menu">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-24 col-xl-22 offset-xl-1">
                                        <div class="row menu-outer">
                                            <div class="col-lg-4 col-md-6 hidden-mobile">
                                                <ul class="ymi-list">
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/yeni-urunler" title="Yeni Ürünler">Yeni Ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/sizin-icin-sectiklerimiz" title="Yeni Ürünler">Sizin İçin Seçtiklerimiz</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/fener-ol" title="Yeni Ürünler">Fener Ol</a>
                                                            </li>

                                                </ul>
                                            </div>

                                            <div class="col-lg-20 col-md-18 col-24">
                                                <div class="menu-outer" data-toggle="isotope-wrapper">

                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/ev-yasam/ev-tekstili" title="EV TEKSTİLİ">
                                                                    EV TEKSTİLİ
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/ev-yasam/ev-tekstili/bornoz" title="Bornoz">Bornoz</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/ev-yasam/ev-tekstili/nevresim-takimi" title="Nevresim Takımı">Nevresim Takımı</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/ev-yasam/ev-aksesuarlari" title="EV AKSESUARLARI">
                                                                    EV AKSESUARLARI
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/ev-yasam/ev-aksesuarlari/bayrak" title="Bayrak">Bayrak</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/ev-yasam/ev-aksesuarlari/biblo" title="Biblo">Biblo</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/ev-yasam/ev-aksesuarlari/oyuncak" title="Oyuncak">Oyuncak</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </li>
                <li class="has-sub">
                    <a href="/kategori-urun/aksesuar" title="Aksesuar">
                        Aksesuar
                        <span class="btn-sub">
                            <i class="fa"></i>
                        </span>
                    </a>
                        <div class="mega-menu">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-24 col-xl-22 offset-xl-1">
                                        <div class="row menu-outer">
                                            <div class="col-lg-4 col-md-6 hidden-mobile">
                                                <ul class="ymi-list">
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/yeni-urunler" title="Yeni Ürünler">Yeni Ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/sizin-icin-sectiklerimiz" title="Yeni Ürünler">Sizin İçin Seçtiklerimiz</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/fener-ol" title="Yeni Ürünler">Fener Ol</a>
                                                            </li>

                                                </ul>
                                            </div>

                                            <div class="col-lg-20 col-md-18 col-24">
                                                <div class="menu-outer" data-toggle="isotope-wrapper">

                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/aksesuar/giyim-aksesuarlari" title="GİYİM AKSESUARLARI">
                                                                    GİYİM AKSESUARLARI
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/atki" title="Atkı">Atkı</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/ayakkabi" title="Ayakkabı">Ayakkabı</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/bere" title="Bere">Bere</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/bileklik" title="Bileklik">Bileklik</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/boyunluk" title="Boyunluk">Boyunluk</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/canta" title="Çanta">Çanta</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/corap" title="Çorap">Çorap</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/eldiven" title="Eldiven">Eldiven</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/gozluk" title="Gözlük">Gözlük</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/maske" title="Maske">Maske</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/sal" title="Şal">Şal</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/giyim-aksesuarlari/sapka" title="Şapka">Şapka</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari" title="EV/YAŞAM AKSESUARLARI">
                                                                    EV/YAŞAM AKSESUARLARI
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                                    <ul class="sub-menu row">
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/anahtarlik" title="Anahtarlık">Anahtarlık</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/ayakkabi" title="Ayakkabı">Ayakkabı</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/bardak" title="Bardak">Bardak</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/bileklik" title="Bileklik">Bileklik</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/canta" title="Çanta">Çanta</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/corap" title="Çorap">Çorap</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/cuzdan" title="Cüzdan">Cüzdan</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/kirtasiye" title="Kırtasiye">Kırtasiye</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/kisisel-bakim" title="Kişisel Bakım">Kişisel Bakım</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/saat" title="Saat">Saat</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/kravat" title="Kravat">Kravat</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/oyuncak" title="Oyuncak">Oyuncak</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/rozet" title="Rozet">Rozet</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/telefon-aksesuari" title="Telefon Aksesuarı">Telefon Aksesuarı</a>
                                                                            </li>
                                                                            <li class="col-lg-12">
                                                                                <a href="/kategori-urun/aksesuar/ev-yasam-aksesuarlari/top" title="Top">Top</a>
                                                                            </li>
                                                                    </ul>
                                                            </div>
                                                        </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </li>
                <li class="has-sub">
                    <a href="/kategori-urun/outlet" title="Outlet">
                        Outlet
                        <span class="btn-sub">
                            <i class="fa"></i>
                        </span>
                    </a>
                        <div class="mega-menu">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-24 col-xl-22 offset-xl-1">
                                        <div class="row menu-outer">
                                            <div class="col-lg-4 col-md-6 hidden-mobile">
                                                <ul class="ymi-list">
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/yeni-urunler" title="Yeni Ürünler">Yeni Ürünler</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/sizin-icin-sectiklerimiz" title="Yeni Ürünler">Sizin İçin Seçtiklerimiz</a>
                                                            </li>
                                                            <li>
                                                                <a class="title-link" href="/kategori-urun/fener-ol" title="Yeni Ürünler">Fener Ol</a>
                                                            </li>

                                                </ul>
                                            </div>

                                            <div class="col-lg-20 col-md-18 col-24">
                                                <div class="menu-outer" data-toggle="isotope-wrapper">

                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/outlet/mac-malzemeleri" title="MAÇ MALZEMELERİ">
                                                                    MAÇ MALZEMELERİ
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/outlet/antrenman" title="ANTRENMAN">
                                                                    ANTRENMAN
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/outlet/giyim" title="GİYİM">
                                                                    GİYİM
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="menu-item isotop-item">
                                                            <div class="sub-menu-wrapper">
                                                                <a class="title-link" href="/kategori-urun/outlet/aksesuar" title="AKSESUAR">
                                                                    AKSESUAR
                                                                    <span class="btn-sub">
                                                                        <i class="fa"></i>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                </li>
                <li class="">
                    <a href="/acik-artirma" title="Açık Artırma">
                        Açık Artırma
                        <span class="btn-sub">
                            <i class="fa"></i>
                        </span>
                    </a>

                </li>

        </ul>
    </nav>
    <div class="search-box">
        <span class="text">Ürün, Model Ara</span>
        <i class="icon icon-search"></i>
    </div>
</div>




                <div class="col-md-1 holder">
                </div>
            </div>
        </div>

        <div class="header-footer">
            <div class="quick-link-slider-wrap">
            </div>

            <div class="row-list">
                
                <div class="list-item">
                    <a class="btn-link" href="subeler" target="_blank" title=""><i class="icon icon-pointer"></i><span class="text">En Yakın Mağaza</span></a>
                </div>
            </div>

            <div class="login-wrap">
                    <div class="item flex-grow-1">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#loginModal">
                            <span class="text">GİRİŞ YAP</span>
                        </button>
                    </div>
            </div>

            <ul class="social-media-list">

                    <li class="list-item"><a class="social-media-link" href="https://www.instagram.com/Fenerium" target="_blank" title="Instagram"><i class="icon icon-instagram"></i></a></li>
                    <li class="list-item"><a class="social-media-link" href="https://www.twitter.com/Fenerium" target="_blank" title="Twitter"><i class="icon icon-twitter"></i></a></li>
                    <li class="list-item"><a class="social-media-link" href="https://www.facebook.com/Fenerium" target="_blank" title="Facebook"><i class="icon icon-facebook"></i></a></li>
                    <li class="list-item"><a class="social-media-link" href="https://www.youtube.com/Fenerbahce" target="_blank" title="Youtube"><i class="icon icon-youtube"></i></a></li>

            </ul>
        </div>
    </div>
    <div class="header-search d-none">
        <form id="header-search-form" action="/kategori-urunarama" method="post" autocomplete="off" novalidate="novalidate">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-24 col-xl-17 offset-xl-1">
                        <div class="main-search-box">
                            <input id="header-search-bar" class="form-control" type="text" name="filter" minlength="3" maxlength="50" placeholder="Aramak İstediğiniz Kelimeyi Yazın" required="" autocomplete="off">
                            <button class="btn btn-submit" type="submit">
                                <i class="icon icon-search"></i>
                            </button>
                        </div>
                        <div class="checkbox-group-wrapper quaternary search-radio-section" data-toggle="addressType">
                            <label class="check-wrapper">
                                <div class="icheckbox_quaternary" style="position: relative;"><input class="quaternary-icheck" type="radio" name="addressType" value="E" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#181a1b; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor="" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></ins></div>
                                <span class="text">Erkek</span>
                            </label>
                            <label class="check-wrapper">
                                <div class="icheckbox_quaternary" style="position: relative;"><input class="quaternary-icheck" type="radio" name="addressType" value="K" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#181a1b; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor="" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></ins></div>
                                <span class="text">Kadın</span>
                            </label>
                            <label class="check-wrapper">
                                <div class="icheckbox_quaternary" style="position: relative;"><input class="quaternary-icheck" type="radio" name="addressType" value="C" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#181a1b; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor="" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></ins></div>
                                <span class="text">Çocuk</span>
                            </label>
                            <label class="check-wrapper">
                                <div class="icheckbox_quaternary" style="position: relative;"><input class="quaternary-icheck" type="radio" name="addressType" value="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0; --darkreader-inline-bgimage: initial; --darkreader-inline-bgcolor:#181a1b; --darkreader-inline-border-top: initial; --darkreader-inline-border-right: initial; --darkreader-inline-border-bottom: initial; --darkreader-inline-border-left: initial;" data-darkreader-inline-bgimage="" data-darkreader-inline-bgcolor="" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left=""></ins></div>
                                <span class="text">Hepsi</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-12 col-xl-4 offset-xl-2">
                        <ul class="popular-searches">
                            <li><span>POPÜLER ARAMLAR:</span></li>
                                <li><a href="/kategori-urunarama?filter=Forma">Forma</a></li>
                                <li><a href="/kategori-urunarama?filter=Atkı">Atkı</a></li>
                                <li><a href="/kategori-urunarama?filter=Şort">Şort</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
    </header>
</template>