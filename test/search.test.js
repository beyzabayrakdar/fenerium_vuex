import { mount } from "@vue/test-utils";

import search from "../pages/search.vue";

describe("search.vue", () => {
    let wrapper = mount(search);
    it("There is a Erkek", () => {
        expect(wrapper.text()).toContain("Erkek");
    });
    it("There is a Kadın", () => {
        expect(wrapper.text()).toContain("Kadın");
    });
    it("There is a Çocuk", () => {
        expect(wrapper.text()).toContain("Çocuk");
    });
    it("There is a Hepsi", () => {
        expect(wrapper.text()).toContain("Hepsi");
    });
    it("There is a POPÜLER ARAMLAR:", () => {
        expect(wrapper.text()).toContain("POPÜLER ARAMLAR:");
    });
    it("There is a Forma", () => {
        expect(wrapper.text()).toContain("Forma");
    });
    it("There is a Atkı", () => {
        expect(wrapper.text()).toContain("Atkı");
    });
    it("There is a Şort", () => {
        expect(wrapper.text()).toContain("Şort");
    });
});