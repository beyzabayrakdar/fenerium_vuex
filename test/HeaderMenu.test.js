import { mount } from "@vue/test-utils";

import HeaderMenu from "../components/HeaderMenu.vue";

describe("HeaderMenu.vue", () => {
    let wrapper = mount(HeaderMenu);
    it("There is a Maç Malzemeleri", () => {
        expect(wrapper.text()).toContain("Maç Malzemeleri");
    });
    it("There is a Antrenman", () => {
        expect(wrapper.text()).toContain("Antrenman");
    });
    it("There is a Giyim", () => {
        expect(wrapper.text()).toContain("Giyim");
    });
    it("There is a Ev/Yaşam", () => {
        expect(wrapper.text()).toContain("Ev/Yaşam");
    });
    it("There is a Aksesuar", () => {
        expect(wrapper.text()).toContain("Aksesuar");
    });
    it("There is a Outlet", () => {
        expect(wrapper.text()).toContain("Outlet");
    });
    it("There is a Açık Arttırma", () => {
        expect(wrapper.text()).toContain("Açık Arttırma");
    });
});