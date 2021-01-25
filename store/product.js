export const state = () => ({
    isInitialized: true,
    products: [],
    product: null
});
export const mutations = {
    setProducts(state, item) {
        state.products = item;
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
    },
    getProductDetail({ commit }, product_id) {
        this.$fire.firestore.collection('products').get().then(snapshot => {
            let selected = null;
            snapshot.forEach(data => {
                if (data.data().id === product_id) {
                    selected = data.data();
                    return false;
                }
            });
            commit('setProduct', selected);
        });
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