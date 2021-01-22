<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      商品：{{ product.title }} ----> 价格：{{ product.price }} 库存：x{{ product.inventory }}
      <br />
      <button :disabled="!product.inventory" @click="addProductToCart(product)">
        加入购物车
      </button>
    </li>

    <h2>{{ $store.state.userInfo.username }}的购物车</h2>
    <br>
    <h3>商品</h3>
    <br>
    <h4>名称</h4>
    <li v-for="product in items" :key="product.id">
      商品:{{ product.title }}---->价格:{{ product.price }}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>购买</button>
      &nbsp;&nbsp;&nbsp;&nbsp;<button @click="deleteCartById(product)">|删除</button>
    </li>
    <button :disabled="!items.length" @click="deleteAllCart">清空购物车</button>
  </ul>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.all;
    },
    items() {
      return this.$store.state.cart.items;
    }
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("cart/addProductToCart", product);
    },
    deleteAllCart() {
      this.$store.dispatch("cart/deleteAllCart");
    },
    deleteCartById(product){
      this.$store.dispatch("cart/deleteCartById",product);
    }
  },
   created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>
