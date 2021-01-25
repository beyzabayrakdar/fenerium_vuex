import { mount, createLocalVue, config, shallowMount } from "@vue/test-utils";
import sepettekiurun from "../pages/sepettekiurun.vue";
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

describe("sepettekiurun.vue", () => {
    it("Render", () => {
        let wrapper = shallowMount(sepettekiurun);
        expect(wrapper.text()).toContain("Sipariş Özeti");
    });
});