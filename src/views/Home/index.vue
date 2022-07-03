<template>
  <keep-alive>
    <div>
      <TopNav class="topSearch"></TopNav>
      <van-swipe :autoplay="3000" class="my-swipe">
        <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
          <img
            v-lazy="'http://liufusong.top:8080' + image"
            :width="375"
            :height="212"
          />
        </van-swipe-item>
      </van-swipe>
      <van-grid column-num="4">
        <van-grid-item icon="wap-home-o" text="整租" class="inner1" />
        <van-grid-item icon="friends-o" text="合租" class="inner1" />
        <van-grid-item icon="guide-o" text="地图找房" class="inner1" />
        <van-grid-item icon="home-o" text="去出租" class="inner1" />
      </van-grid>
      <div class="RentalGroup">
        <van-nav-bar
          right-text="更多"
          @click-right="$router.replace({ name: 'find' })"
          style="height: 47px"
          ><template #left>
            <div style="font-size: 20px">租房小组</div>
          </template></van-nav-bar
        >
        <div class="RentalGroupMain">
          <div
            class="RentalGroupConnect"
            v-for="(item, index) in RentalGroupMessage"
            :key="index"
          >
            <div>
              <van-image
                class="RentalGroupImg"
                width="50"
                height="50"
                :src="'http://liufusong.top:8080' + item.imgSrc"
              />
            </div>
            <div class="RentalGroupRight">
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <LayoutStar></LayoutStar>
    </div>
  </keep-alive>
</template>

<script>
import LayoutStar from '@/components/Layout-Component.vue'
import TopNav from '@/components/TopNav.vue'
import { getSwipeImg, getRentalGroup } from '@/api/index'
export default {
  async created () {
    try {
      const res = await getSwipeImg()
      res.data.body.forEach(item => {
        this.swipeImages.push(item.imgSrc)
      })
      const res1 = await getRentalGroup()
      this.RentalGroupMessage = res1.data.body
    } catch (err) { console.log(err) }
  },
  components: {
    LayoutStar,
    TopNav
  },
  name: 'home',
  data () {
    return {
      swipeImages: [],
      RentalGroupMessage: []
    }
  }
}
</script>

<style scoped lang="less">
.RentalGroupMain {
  display: flex;
  flex-wrap: wrap;
}
.RentalGroupImg {
  margin: 0 10px;
}
/deep/.van-grid-item__icon {
  font-size: 30px;
  color: rgb(33, 185, 122);
}
.my-swipe .van-swipe-item {
  position: relative;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  width: 375px;
  height: 212px;
}
.topSearch {
  width: 100%;
  position: fixed;
  z-index: 9;
}
.inner1 {
  width: 87.5px;
  height: 105px;
  padding: 0 10px;
}
.RentalGroup {
  /deep/ .RentalGroupConnect {
    flex: 1;
    background-color: #fff;
    width: 182px;
    height: 50px;
    display: flex;
    margin: 10px;
  }
  /deep/ .RentalGroupRight {
    padding-top: 10px;
    width: 70px;
    height: 50px;
  }
  /deep/ p,
  h4 {
    font-size: 14px;
    width: 70px;
    height: 17px;
    margin: 0;
    padding: 0;
  }
  background-color: rgb(246, 245, 246);
  height: 200px;
  .inner {
    height: 65px;
  }
  .van-nav-bar {
    background-color: transparent;
    /deep/.van-nav-bar__text {
      color: #ccc;
      font-size: 16px;
    }
  }
}
</style>
