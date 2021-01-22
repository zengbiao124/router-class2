<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>姓名: {{ $store.state.userInfo.username }}</p>
    <hr />
    <h2>产品</h2>
    <ProductList />
    <hr />
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
export default {
  name: "App",
  components: { ProductList }
};
</script>

<style></style>
