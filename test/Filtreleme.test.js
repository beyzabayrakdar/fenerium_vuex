import { mount } from "@vue/test-utils";

import Filtreleme from "../components/Filtreleme.vue";

describe("Filtreleme.vue", () => {
    let wrapper = mount(Filtreleme);
    it("There is a Filtrele", () => {
        expect(wrapper.text()).toContain("Filtrele");
    });
    it("There is a T-SHIRT", () => {
        expect(wrapper.text()).toContain("T-SHIRT");
    });
    it("There is a POLO", () => {
        expect(wrapper.text()).toContain("POLO");
    });
    it("There is a AYAKKABI", () => {
        expect(wrapper.text()).toContain("AYAKKABI");
    });
    it("There is a EŞOFMAN ALTI", () => {
        expect(wrapper.text()).toContain("EŞOFMAN ALTI");
    });
    it("There is a KAZAK", () => {
        expect(wrapper.text()).toContain("KAZAK");
    });
    it("There is a Erkek", () => {
        expect(wrapper.text()).toContain("Erkek");
    });
    it("There is a Kadın", () => {
        expect(wrapper.text()).toContain("Kadın");
    });
    it("There is a Çocuk", () => {
        expect(wrapper.text()).toContain("Çocuk");
    });
    it("There is a Tüm Seçimleri Temizle", () => {
        expect(wrapper.text()).toContain("Tüm Seçimleri Temizle");
    });
});