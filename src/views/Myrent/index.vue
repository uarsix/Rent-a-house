<template>
  <div>
    <van-nav-bar
      title="房屋管理"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <div v-if="routerShow">
      <van-image width="100" height="100" src="../../assets/6.png" />
      还没有房源去发布<span style="color: red">点击发布房源</span>
    </div>
    <div v-else>
      <template v-if="!show">
        <van-grid
          class="content"
          v-for="item in cityMessage"
          :key="item.houseCode"
        >
          <van-image width="100" height="100" :src="$imgUrl + item.houseImg">
            <template v-slot:error>加载失败</template></van-image
          >
          <div class="text">
            <p>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
            <van-button
              plain
              type="info"
              disabled
              size="mini"
              v-for="(item1, ind) in item.tags"
              :key="ind"
              >{{ item1 }}</van-button
            >
            <p>
              <span>{{ item.price }}</span
              >元/月
            </p>
          </div>
        </van-grid>
      </template>
      <template v-else>
        <div class="load">
          <van-loading type="spinner" size="60px" color="rgb(33, 185, 122)">
            <template #default> 正在加载</template>
          </van-loading>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { myHourses } from '@/api/index'
export default {
  created () { setTimeout(this.getMyHourse(), 5000) },
  data () {
    return {
      cityMessage: [],
      show: false,
      routerShow: true
    }
  },
  methods: {
    async getMyHourse () {
      this.routerShow = false
      this.show = true
      try {
        const res = await myHourses(this.$store.state.userToken)
        this.cityMessage = res.data.body
        this.show = false
      } catch (err) {
        console.log(err)
        this.show = false
        this.routerShow = true
      }
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: rgb(33, 185, 122);
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
}
.content {
  display: flex;

  width: 345px;
  height: 120px;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 12px;
  padding: 5px;
  .text {
    width: 180px;
    height: 102px;
  }
}
.load {
  margin-top: 200px;
  text-align: center;
}
</style>
