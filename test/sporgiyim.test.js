import { mount } from "@vue/test-utils";

import sporgiyim from "../pages/giyim/sporgiyim.vue";

describe("sporgiyim.vue", () => {
    let wrapper = mount(sporgiyim);
    it("There is a DEVAMINI GÖR", () => {
        expect(wrapper.text()).toContain("DEVAMINI GÖR");
    });


});