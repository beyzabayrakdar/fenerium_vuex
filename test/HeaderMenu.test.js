import { mount } from "@vue/test-utils";
import 'firebase/auth'

import header_Menu from "../components/header/header_Menu.vue";

describe("header_Menu.vue", () => {
    let wrapper = mount(header_Menu);
    it("There is a Erkek", () => {
        expect(wrapper.text()).toContain("Erkek");
    });
    it("There is a Kadın", () => {
        expect(wrapper.text()).toContain("Kadın");
    });
    it("There is a Çocuk", () => {
        expect(wrapper.text()).toContain("Çocuk");
    });
    it("There is a GİRİŞ YAP", () => {
        expect(wrapper.text()).toContain("GİRİŞ YAP");
    });
    it("There is a FAVORİLER", () => {
        expect(wrapper.text()).toContain("FAVORİLER");
    });
    it("There is a SEPETİM", () => {
        expect(wrapper.text()).toContain("SEPETİM");
    });
    it("There is a Ürün, Model Ara", () => {
        expect(wrapper.text()).toContain("Ürün, Model Ara");
    });
});