<template>
  <div id="app">
    <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <img src="./assets/images/logo.png" slot="right">
      <router-link to="/user" slot="right">发帖</router-link>
    </mt-header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.mint-header {
  height: 50px;
  background-color: #41b883;
}
.mint-header img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
</style>
