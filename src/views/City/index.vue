<template>
  <div>
    <van-nav-bar
      title="城市列表"
      left-arrow
      @click-left="$router.go(-1)"
      fixed
    />
    <van-index-bar :index-list="cityIndex" style="font-size: 14px">
      <div v-for="(item, index) in cityList" :key="index">
        <van-index-anchor :index="index">{{
          index === "#" ? "当前城市" : index === "热" ? "热门城市" : index
        }}</van-index-anchor>
        <van-cell
          v-for="(item1, ind) in item"
          :key="ind"
          :title="item1.label"
          @click="checkCity(item1)"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getHotCity, getCityList } from '@/api/index'
import city from '@/Untuls/city.sort'
import { Toast } from 'vant'
export default {
  name: 'city',
  async created () {
    const res = await getHotCity()
    const res1 = await getCityList(1)
    const obj = {
      '#': [this.$store.state.defaultCity],
      // eslint-disable-next-line quote-props
      '热': res.data.body
    }
    this.cityList = { ...obj, ...city(res1.data.body) }
    this.cityIndex = Object.keys(this.cityList)
    res.data.body.forEach(item => this.hotCity.push(item.label))
  },
  data () {
    return {
      cityIndex: [],
      cityList: [],
      hotCity: []
    }
  },
  methods: {

    checkCity (item1) {
      if (this.hotCity.findIndex(ind => ind === item1.label) !== -1) {
        this.$store.commit('checkCity', item1)
        this.$router.push({ name: 'home' })
        return
      }
      Toast('当前城市尚未开通服务')
    }
  }
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  z-index: 2;
  background-color: rgb(33, 185, 122);
}
.van-index-bar {
  margin-top: 46px;
}
/deep/.van-index-bar__index {
  padding: 0;
  text-align: center;
  font-size: 14px;
  width: 15px;
  height: 15px;
  margin: 2px 10px 3px 0;
}
/deep/.van-index-bar__index--active {
  color: #fff;
  background-color: #21b97a;
  border-radius: 100%;
}
</style>
