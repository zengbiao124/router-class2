const state = {
  items: [],
  checkoutStatus: null,
  namespaced: true
};

// getters
const getters = {};
// actions
const actions = {
  addProductToCart({ commit }, product) {
    if (product.inventory > 0) {
      commit(
        "products/deleteProductInventory",
        { id: product.id },
        { root: true }
      );
      commit("setProduct", product);
    }
  },
  deleteAllCart({ commit }) {
    console.log("进入");
    if (state.items.length > 0) {
      const products = state.items;
      console.log("products.length:" + products.length);
      commit("products/addProduct", { products }, { root: true });
      state.items.splice(0, state.items.length);
      console.log("删除");
    }
  },
  deleteCartById({ commit }, product) {
    const products = product;
    console.log("deleteCartById:" + products.title);
    commit("products/addProduct", { products }, { root: true });
    const i = state.items.indexOf(products);
    state.items.splice(i, 1);
  }
};

// mutations
const mutations = {
  setProduct(state, product) {
    // state.items[state.items.length] = product;
    state.items.push(product);
    console.log("name:" + product.title);
    console.log("id:" + product.id);
    console.log(state.items.length);
  }

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
