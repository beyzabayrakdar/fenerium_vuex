import { mount } from "@vue/test-utils";

import mackombinleri from "../pages/mackombinleri.vue";

describe("mackombinleri.vue", () => {
    let wrapper = mount(mackombinleri);
    it("There is a Anasayfa", () => {
        expect(wrapper.text()).toContain("Anasayfa");
    });
});