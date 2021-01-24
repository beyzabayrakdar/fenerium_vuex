import { mount } from "@vue/test-utils";

import Footer from "../components/Footer.vue";

describe("Footer.vue", () => {
    let wrapper = mount(Footer);
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
    it("There is a İletişim", () => {
        expect(wrapper.text()).toContain("İletişim");
    });
});