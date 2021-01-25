import { mount } from "@vue/test-utils";

import Sectiklerimiz from "../components/Sectiklerimiz.vue";

describe("Sectiklerimiz.vue", () => {
    let wrapper = mount(Sectiklerimiz);
    it("There is a Sizin İçin Seçtiklerimiz", () => {
        expect(wrapper.text()).toContain("Sizin İçin Seçtiklerimiz");
    });
    it("There is a TÜM ÜRÜNLER", () => {
        expect(wrapper.text()).toContain("TÜM ÜRÜNLER");
    });
    it("There is a TRENDLER", () => {
        expect(wrapper.text()).toContain("TRENDLER");
    });
    it("There is a Kadın Lacivert Gri Tribün Sarı Biyeli Logo Sweatshirt", () => {
        expect(wrapper.text()).toContain("Kadın Lacivert Gri Tribün Sarı Biyeli Logo Sweatshirt");
    });
    it("There is a Kadın Beyaz Tribün Yaldızlı Emboss Sweatshirt", () => {
        expect(wrapper.text()).toContain("Kadın Beyaz Tribün Yaldızlı Emboss Sweatshirt");
    });
    it("There is a Çocuk Sarı Lacivert Basket Full Zip Dik Yaka Sweatshirt", () => {
        expect(wrapper.text()).toContain("Çocuk Sarı Lacivert Basket Full Zip Dik Yaka Sweatshirt");
    });
    it("There is a Çocuk Lacivert Tribün Yakmalı Polar Sweatshirt", () => {
        expect(wrapper.text()).toContain("Çocuk Lacivert Tribün Yakmalı Polar Sweatshirt");
    });
    it("There is a Erkek Lacivert Gri Tribün Şal Yaka Sweatshirt", () => {
        expect(wrapper.text()).toContain("Erkek Lacivert Gri Tribün Şal Yaka Sweatshirt");
    });
    it("There is a Erkek Gri Tribün Kol Baskılı Sweatshirt", () => {
        expect(wrapper.text()).toContain("Erkek Gri Tribün Kol Baskılı Sweatshirt");
    });
    it("There is a Erkek Lacivert Tribün Kol Cep Detaylı Sweatshirt", () => {
        expect(wrapper.text()).toContain("Erkek Lacivert Tribün Kol Cep Detaylı Sweatshirt");
    });
    it("There is a Sarı-Lacivert FB Çubuklu Logo Maske", () => {
        expect(wrapper.text()).toContain("Sarı-Lacivert FB Çubuklu Logo Maske");
    });
});