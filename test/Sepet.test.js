import { mount, createLocalVue, config, shallowMount } from "@vue/test-utils";
import sepetim from "../pages/header/sepetim.vue";
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

describe("sepetim.vue", () => {
    it("Render", () => {
        let wrapper = shallowMount(sepetim);
        expect(wrapper.text()).toContain("Sepetim");
    });
    it("Render", () => {
        let wrapper = shallowMount(sepetim);
        expect(wrapper.text()).toContain("Sepeti Temizle");
    });
    it("Render", () => {
        let wrapper = shallowMount(sepetim);
        expect(wrapper.text()).toContain("İndirim Tutarı");
    });
    it("Render", () => {
        let wrapper = shallowMount(sepetim);
        expect(wrapper.text()).toContain("Toplam Tutar");
    });
    it("Render", () => {
        let wrapper = shallowMount(sepetim);
        expect(wrapper.text()).toContain("Ürünü Sil");
    });
    it("Render", () => {
        let wrapper = shallowMount(sepetim);
        expect(wrapper.text()).toContain("SATIN AL");
    });
});