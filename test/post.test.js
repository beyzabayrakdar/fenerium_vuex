import { mount } from "@vue/test-utils";

import post from "../pages/post.vue";

describe("post.vue", () => {
    let wrapper = mount(post);
    it("There is a What is this", () => {
        expect(wrapper.text()).toContain("What is this");
    });
    it("There is a Deneme yazısı.", () => {
        expect(wrapper.text()).toContain("Deneme yazısı.");
    });
});