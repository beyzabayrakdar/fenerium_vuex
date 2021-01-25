import { mount } from "@vue/test-utils";
import 'firebase/auth'

import HeaderMenu from "../components/HeaderMenu.vue";

describe("HeaderMenu.vue", () => {
    let wrapper = mount(HeaderMenu);
    it("There is a FUTBOL", () => {
        expect(wrapper.text()).toContain("FUTBOL");
    });
});