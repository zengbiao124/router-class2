import shop from "../api/shop";

// initial state
const state = {
  all: []
  // num:0
};

// getters
const getters = {};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit("setAll", products);
    });
  }
};

const mutations = {
  setAll(state, products) {
    state.all = products;
  },
  // 购买后产品数量减少
  deleteProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id);
    console.log("deleteProductInventory" + product);
    product.inventory--;
  },
  //清空购物车后回调商品数量
  addProduct(state, { products }) {
    console.log(state.all.length + "回调" + products.length);
    //传入的products是数组时
    if (products.length>0) {
      for (const i in products) {
        const product = state.all.find(product => product.id === products[i].id);
        console.log(product);
        if (product != null) {
          product.inventory++;
        }
      }
    }else if (products!=null){
      const product = state.all.find(product => product.id === products.id);
      if (product != null) {
        product.inventory++;
      }
    }
  },
  // 获取产品的库存量
  getProductCount(state, { id }) {
    return state.all.find(product => product.id === id).inventory;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
