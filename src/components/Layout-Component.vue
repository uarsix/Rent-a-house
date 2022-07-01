<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item replace :to="{ name: 'home' }" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace :to="{ name: 'find' }" icon="search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item replace :to="{ name: 'info' }" icon="newspaper-o"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item replace :to="{ name: 'my' }" icon="user-circle-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
