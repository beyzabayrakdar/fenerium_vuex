import { mount } from "@vue/test-utils";

import Sepet from "../components/Sepet.vue";

describe("Sepet.vue", () => {
    let wrapper = mount(Sepet);
    it("There is a Sepetim", () => {
        expect(wrapper.text()).toContain("Sepetim");
    });
    it("There is a Sepeti Temizle", () => {
        expect(wrapper.text()).toContain("Sepeti Temizle");
    });
    it("There is a Erkek Antrasit Tribün Nos Tek Alt", () => {
        expect(wrapper.text()).toContain("Erkek Antrasit Tribün Nos Tek Alt");
    });
    it("There is a İndirim Tutarı", () => {
        expect(wrapper.text()).toContain("İndirim Tutarı");
    });
    it("There is a Toplam Tutar", () => {
        expect(wrapper.text()).toContain("Toplam Tutar");
    });
    it("There is a Ürünü Sil", () => {
        expect(wrapper.text()).toContain("Ürünü Sil");
    });
    it("There is a Ürünü Satın Almak İçin Kalan Süreniz:", () => {
        expect(wrapper.text()).toContain("Ürünü Satın Almak İçin Kalan Süreniz:");
    });
    it("There is a SATIN AL", () => {
        expect(wrapper.text()).toContain("SATIN AL");
    });
    it("There is a Sepetinizde ürün bulunmamaktadır.", () => {
        expect(wrapper.text()).toContain("Sepetinizde ürün bulunmamaktadır.");
    });
});