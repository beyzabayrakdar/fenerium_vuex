import { mount } from "@vue/test-utils";

import Sayfa from "../components/Sayfa.vue";

describe("Sayfa.vue", () => {
    let wrapper = mount(Sayfa);
    it("There is a 20/21 Kış Ürünler", () => {
        expect(wrapper.text()).toContain("20/21 Kış Ürünler");
    });
    it("There is a Antrenman ürünleri", () => {
        expect(wrapper.text()).toContain("Antrenman ürünleri");
    });
    it("There is a İNCELE", () => {
        expect(wrapper.text()).toContain("İNCELE");
    });
    it("There is a Basketbol Ürünleri", () => {
        expect(wrapper.text()).toContain("Basketbol Ürünleri");
    });
    it("There is a Fenerbahçelinin Günlük Tarzı", () => {
        expect(wrapper.text()).toContain("Fenerbahçelinin Günlük Tarzı");
    });
    it("There is a Maç Günü Kombinleri", () => {
        expect(wrapper.text()).toContain("Maç Günü Kombinleri");
    });
    it("There is a Hediye Seçenekleri", () => {
        expect(wrapper.text()).toContain("Hediye Seçenekleri");
    });
});