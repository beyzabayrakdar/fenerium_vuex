import { realDb, auth } from '../plugins/firebase.js';
import firebase from "firebase";
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
        var ref = realDb.ref('Products')
        ref.once('value').then(function (snapshot) {
            let arr = []
            if (snapshot.val() != null) {
                arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
            }
            commit('setProducts', arr)
        });
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