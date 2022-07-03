<template>
  <div>
    <div>
      <van-nav-bar>
        <template #title>
          <div class="search-city">
            <span class="nowCity"
              >{{ $store.state.defaultCity.label
              }}<van-icon
                class="icor"
                name="play"
                color="rgb(80,74,74)"
                @click="$router.push({ name: 'city' })"
            /></span>
            <van-search v-model="value" placeholder="请输入小区或地址" />
            <i class="mapIco"
              ><van-icon name="location-o" color="#fff" size="15"
            /></i>
          </div>
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .van-search {
  width: unset;
  height: 34px;
  padding: 0;
}

/deep/ .van-nav-bar__title {
  max-width: unset;
}
.nowCity {
  border-right: 1px solid rgb(212, 198, 198);
}
.search-city {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px 5px 8px;
  width: 250px;
  height: 24px;
  background-color: #fff;
}
.icor {
  transform: rotate(90deg);
}
/deep/ .mapIco {
  position: absolute;
  right: 15px;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 14px;
  line-height: 20px;
}
</style>
