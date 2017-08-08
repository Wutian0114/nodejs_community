<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" slot="right">
      <router-link to="/user" slot="right">发帖</router-link>
    </mt-header>
  
    <!-- 路由视图 -->
    <router-view></router-view>
  
    <!-- 底部导航 -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab1">
        <router-link to="/">
          <i class="iconfont icon-homefill"></i>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <router-link to="/">
          <i class="iconfont icon-markfill"></i>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <router-link to="/">
          <i class="iconfont icon-peoplefill"></i>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      selected: 'tab1'
    }
  }
}
</script>

<style>
.mint-header {
  height: 50px;
  background-color: #333;
}

.mint-header img {
  height: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mint-tabbar {
  background-color: #333;

}
.mint-tab-item {
  padding: 10px 0;
}
.mint-tab-item i{
  font-size: 30px;
  color: #fff;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
}
.mint-tabbar > .mint-tab-item.is-selected i {
  color: #80bd01;
}
</style>
