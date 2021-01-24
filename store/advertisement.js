export const state = () => ({
    rectangular_advertisement: []
});
export const mutations = {
    _setRectangularItems(state, item) {
        state.rectangular_advertisement = item;
    }
};
export const actions = {
    initializeRectangularAdvertisements({ commit }) {
        this.$fire.firestore.collection('advertisement').get().then(snapshot => {
            let tempItems = [];
            snapshot.forEach(data => {
                tempItems.push(data.data());
            });
            commit("_setRectangularItems", tempItems);
        });
    }
};
export const getters = {
    getRectangularAdvertisements(state) {
        return state.rectangular_advertisement;
    }
}