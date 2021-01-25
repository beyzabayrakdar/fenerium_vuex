import { mount } from "@vue/test-utils";

import Footer from "../components/Footer.vue";

describe("Footer.vue", () => {
    let wrapper = mount(Footer);
    it("There is a Özel Fırsatlardan Haberdar Olmak İçin E-Bültenimize Kayıt Olun", () => {
        expect(wrapper.text()).toContain("Özel Fırsatlardan Haberdar Olmak İçin E-Bültenimize Kayıt Olun");
    });
    it("There is a E-Posta Adresinizi Giriniz", () => {
        expect(wrapper.text()).toContain("E-Posta Adresinizi Giriniz");
    });
    it("There is a Antrenman", () => {
        expect(wrapper.text()).toContain("ANTRENMAN");
    });
    it("There is a FUTBOL", () => {
        expect(wrapper.text()).toContain("FUTBOL");
    });
    it("There is a BASKETBOL", () => {
        expect(wrapper.text()).toContain("BASKETBOL");
    });
    it("There is a VOLEYBOL", () => {
        expect(wrapper.text()).toContain("VOLEYBOL");
    });
    it("There is a Giyim", () => {
        expect(wrapper.text()).toContain("GİYİM");
    });
    it("There is a TSHIRT", () => {
        expect(wrapper.text()).toContain("TSHIRT");
    });
    it("There is a SWEATSHIRT", () => {
        expect(wrapper.text()).toContain("SWEATSHIRT");
    });
    it("There is a KAZAK", () => {
        expect(wrapper.text()).toContain("KAZAK");
    });
    it("There is a GÖMLEK", () => {
        expect(wrapper.text()).toContain("GÖMLEK");
    });
    it("There is a ÜST GİYİM", () => {
        expect(wrapper.text()).toContain("ÜST GİYİM");
    });
    it("There is a DIŞ GİYİM", () => {
        expect(wrapper.text()).toContain("DIŞ GİYİM");
    });
    it("There is a ALT GİYİM", () => {
        expect(wrapper.text()).toContain("ALT GİYİM");
    });
    it("There is a SPOR GİYİM", () => {
        expect(wrapper.text()).toContain("SPOR GİYİM");
    });
    it("There is a EV GİYİM", () => {
        expect(wrapper.text()).toContain("EV GİYİM");
    });
    it("There is a Ev/Yaşam", () => {
        expect(wrapper.text()).toContain("EV/YAŞAM");
    });
    it("There is a EV TEKSTİLİ", () => {
        expect(wrapper.text()).toContain("EV TEKSTİLİ");
    });
    it("There is a AkseEV AKSESUARLARIsuar", () => {
        expect(wrapper.text()).toContain("EV AKSESUARLARI");
    });
    it("There is a Aksesuar", () => {
        expect(wrapper.text()).toContain("AKSESUAR");
    });
    it("There is a GİYİM AKSESUARLARI", () => {
        expect(wrapper.text()).toContain("GİYİM AKSESUARLARI");
    });
    it("There is a EV/YAŞAM AKSESUARLARI", () => {
        expect(wrapper.text()).toContain("EV/YAŞAM AKSESUARLARI");
    });
    it("There is a Outlet", () => {
        expect(wrapper.text()).toContain("OUTLET");
    });
    it("There is a MAÇ MALZEMELERİ", () => {
        expect(wrapper.text()).toContain("MAÇ MALZEMELERİ");
    });
    it("There is a ANTRENMAN", () => {
        expect(wrapper.text()).toContain("ANTRENMAN");
    });
    it("There is a EV/YAŞAM", () => {
        expect(wrapper.text()).toContain("EV/YAŞAM");
    });
    it("There is a AKSESUAR", () => {
        expect(wrapper.text()).toContain("AKSESUAR");
    });
    it("There is a İletişim", () => {
        expect(wrapper.text()).toContain("İLETİŞİM");
    });
    it("There is a SIKÇA SORULAN SORULAR", () => {
        expect(wrapper.text()).toContain("SIKÇA SORULAN SORULAR");
    });
    it("There is a En Yakın Mağaza", () => {
        expect(wrapper.text()).toContain("En Yakın Mağaza");
    });
});