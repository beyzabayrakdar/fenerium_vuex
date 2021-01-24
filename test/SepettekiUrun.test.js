import { mount, createLocalVue, config, shallowMount } from "@vue/test-utils";
import SepettekiUrun from "../pages/SepettekiUrun.vue";
import { getters, mutations, actions, state } from "../store/basket";

config.mocks["$store"] = {
    state: {...state },
    getters: {
        "basket/getBasketItems": {...state }
    },
    actions: {
        "basket/removeBasketItem": {...actions }
    },
    mutations: {
        ...mutations
    }
};

describe("SepettekiUrun.vue", () => {
    it("Render", () => {
        let wrapper = shallowMount(SepettekiUrun);
        expect(wrapper.text()).toContain("Sepet Listesi");
    });
});