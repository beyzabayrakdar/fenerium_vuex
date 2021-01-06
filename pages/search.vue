<template>
    <div class="header-search">
        <form id="header-search-form" action="/kategori-urunarama" method="post" autocomplete="off" novalidate="novalidate">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-24 col-xl-17 offset-xl-1">
                        <div class="main-search-box">
                            <input id="header-search-bar" class="form-control" type="text" name="filter" minlength="3" maxlength="50" placeholder="Aramak İstediğiniz Kelimeyi Yazın" required="" autocomplete="off">
                            <button class="btn btn-submit" type="submit">
                                 <i class="fas fa-search"></i>
                            </button>
                        </div>
                        <div class="checkbox-group-wrapper quaternary search-radio-section" data-toggle="addressType">
                            <label class="check-wrapper">
                                <div class="icheckbox_quaternary" style="position: relative;"><input class="quaternary-icheck" type="radio" name="addressType" value="E" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                                <span class="text">Erkek</span>
                            </label>
                            <label class="check-wrapper">
                                <div class="icheckbox_quaternary" style="position: relative;"><input class="quaternary-icheck" type="radio" name="addressType" value="K" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                                <span class="text">Kadın</span>
                            </label>
                            <label class="check-wrapper">
                                <div class="icheckbox_quaternary" style="position: relative;"><input class="quaternary-icheck" type="radio" name="addressType" value="C" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                                <span class="text">Çocuk</span>
                            </label>
                            <label class="check-wrapper">
                                <div class="icheckbox_quaternary" style="position: relative;"><input class="quaternary-icheck" type="radio" name="addressType" value="" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
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
</template>