export const state = () => ({
  orderBy: '0',
  searchProducts: [],
  filteredProducts: [],
  filters: {
    body: [],
    brand: []
  },
  productDetail: null,
  selectedFilters: {
    category: null,
    body: [],
    brand: []
  }
});
export const mutations = {
  _setProducts(state, items){
    state.products = items;
  },
  _addFilter(state, {key, value}) {
    if (key === 'category') return false;
    if (state.selectedFilters[key]){
      state.selectedFilters[key].push(value);
    }else{
      state.selectedFilters[key] = [
        value
      ]
    }
  },
  _setFilters(state, filters){
    state.filters = filters;
  },
  _setCategoryFilter(state, category){
    state.selectedFilters.category = category;
  },
  _setFilteredProducts(state, items) {
    state.filteredProducts = items;
  },
  _setProduct(state, product){
    state.productDetail = product;
  },
  _removeFilter(state, { key, index }) {
    state.selectedFilters[key].splice(index, 1);
  },
  _setOrderBy(state, value){
    state.orderBy = value;
  }
};
export const actions = {
  sort({commit, state, dispatch}) {
    if (state.orderBy === '0') {
      dispatch("retrieveProducts");
    }
    else if (state.orderBy === '1') {
      const newArr = state.filteredProducts.sort((a, b) => {
        return a.price - b.price;
      })
      commit("_setFilteredProducts", newArr);
    }
    else if(state.orderBy === '2') {
      const newArr = state.filteredProducts.sort((a, b) => {
        return b.price - a.price;
      })
      commit("_setFilteredProducts", newArr);
    }
    else if(state.orderBy === '3') {
      const calculateStar = (comments) => {
        if (comments === undefined || comments === null || Array.isArray(comments) === false) return 0;
        let total = 0;
        for(let i = 0; i < comments.length; i++) {
          total += comments[i].star;
        }
        return total;
      }
      const newArr = state.filteredProducts.sort((a, b) => {
        return  calculateStar(b.comments)- calculateStar(a.comments);
      })
      commit("_setFilteredProducts", newArr);
    }
    else if(state.orderBy === '2') {
      const newArr = state.filteredProducts.sort((a, b) => {
        const bSize = Array.isArray(b.comments) === false ? 0 : b.comments.length;
        const aSize = Array.isArray(a.comments) === false ? 0 : a.comments.length;
        return bSize - aSize;
      })
      commit("_setFilteredProducts", newArr);
    }
  },
  setCategoryFilter({commit}, category){
    commit("_setCategoryFilter", category);
  },
  setOrderBy({commit, dispatch}, value){
    commit('_setOrderBy', value);
    dispatch("sort");
  },
  addFilter({commit, dispatch}, context) {
    commit("_addFilter", context);
    dispatch("retrieveProducts");
  },
  removeFilter({commit, dispatch}, context) {
    commit("_removeFilter", context);
    dispatch("retrieveProducts");
  },
  retrieveProducts({state,commit}){
    this.$fire.firestore.collection('products').get().then(snapshot => {
      let filters = {
        brand: [],
        body: []
      };
      let tempItems = [];
      snapshot.forEach(data => {
        const item = data.data();
        if (filters.brand.includes(item.brand) === false) {
          filters.brand.push(item.brand);
        }
        if (item.body !== null && Array.isArray(item.body)){
          for (let i = 0; i < item.body.length; i++) {
            if (filters.body.includes(item.body[i].type) === false) {
              filters.body.push(item.body[i].type);
            }
          }
        }
        if (state.selectedFilters.category !== undefined && state.selectedFilters.category !== null) {
          let found = false;
          if (item.parent_category === state.selectedFilters.category) found = true;
          if (item.child_category === state.selectedFilters.category) found = true;
          if (item.category === state.selectedFilters.category) found = true;
          if (found === false) return true;
        }
        if (state.selectedFilters.brand.length > 0) {
          if (state.selectedFilters.brand.includes(item.brand) === false) {
            return true;
          }
        }
        if (state.selectedFilters.body.length > 0) {
          let found = false;
          if (Array.isArray(item.body)) {
            for (let i = 0; i < item.body.length; i++) {
              if (state.selectedFilters.body.includes(item.body[i].type)){
                found = true;
                break;
              }
            }
          }
          if (found === false) return true;
        }
        tempItems.push(data.data());
      });
      commit("_setFilters", filters);
      commit("_setFilteredProducts", tempItems);
    });
  },
  getProductDetail({commit}, product_id) {
    this.$fire.firestore.collection('products').get().then(snapshot => {
      let selected = null;
      snapshot.forEach(data => {
        if(data.data().id === product_id) {
          selected = data.data();
          return false;
        }
      });
      commit('_setProduct', selected);
    });
  }
};
export const getters = {
  getProduct(state) {
    return state.productDetail;
  },
  getFilteredProducts(state){
    return state.filteredProducts;
  },
  getFilters(state) {
    return state.filters;
  },
  getSelectedFilters(state){
    return state.selectedFilters;
  },
  getOrderBy(state) {
    return state.orderBy;
  }
};
