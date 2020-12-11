const data = require("@/data/products.json");

export const state = () => ({
    isInitialized: false,
    products: [],
    product: null
});
export const mutations = {
    setProducts(state, param) {
        state.products = param;
    },
    setProduct(state, product) {
        state.product = product;
    }
};
export const actions = {
    initData({ state, commit }, ) {
        if (state.isInitialized === false) {
            commit("setProducts", data);
            state.isInitialized = true;
        }
    },
    setProduct({ state, commit }, id) {
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].id === id) {
                commit("setProduct", state.products[i]);
            }
        }
    }
};
export const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        return state.product;
    }
};