import { mount } from "@vue/test-utils";

import sepetim from "../pages/header/sepetim.vue";

describe("sepetim.vue", () => {
    let wrapper = mount(sepetim);
    it("There is a Sepetim", () => {
        expect(wrapper.text()).toContain("Sepetim");
    });
    it("There is a Sepeti Temizle", () => {
        expect(wrapper.text()).toContain("Sepeti Temizle");
    });
    it("There is a İndirim Tutarı", () => {
        expect(wrapper.text()).toContain("İndirim Tutarı");
    });
    it("There is a Ürünü Sil", () => {
        expect(wrapper.text()).toContain("Ürünü Sil");
    });
    it("There is a Ürünü Satın Almak İçin Kalan Süreniz:", () => {
        expect(wrapper.text()).toContain("Ürünü Satın Almak İçin Kalan Süreniz:");
    });
    it("There is a (KDV Dahil)", () => {
        expect(wrapper.text()).toContain("(KDV Dahil)");
    });
});