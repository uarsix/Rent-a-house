<template>
  <div>
    <div class="myInfo" v-if="userMessage && userMessage.nickname">
      <div class="myInfo-img">
        <img
          :src="
            userMessage
              ? 'http://liufusong.top:8080' + userMessage.avatar
              : 'http://liufusong.top:8080/img/profile/avatar.png'
          "
        />
      </div>
      <div style="padding-top: 40px">
        <p>{{ userMessage.nickname }}</p>
        <span
          class="infoButton"
          @click="exLogin"
          style="
            border-radius: 20px;
            width: 50px;
            height: 20px;
            font-size: 12px;
            line-height: 20px;
          "
          >退出</span
        >
        <p style="color: #999; font-size: 12px; margin-top: 20px">
          编辑个人资料<van-icon name="play" />
        </p>
        <!-- outUser $router.replace({ name: 'login' }) -->
      </div>
    </div>
    <div class="myInfo" v-else>
      <div class="myInfo-img">
        <img src="http://liufusong.top:8080/img/profile/avatar.png" />
      </div>
      <div style="padding-top: 40px">
        <p>游客</p>
        <span class="infoButton" @click="$router.replace({ name: 'login' })"
          >登录</span
        >
        <!-- outUser -->
      </div>
    </div>
    <div>
      <div style="height: 300px">
        <img
          src="http://liufusong.top:8080/img/profile/bg.png"
          style="height: 191px"
        />
      </div>
      <van-grid :column-num="3">
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" to="myrent" />
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="coupon-o" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="phone-circle-o" text="联系我们" />
      </van-grid>
      <div style="padding: 0 10px 0 10px">
        <img src="@/assets/5.png" style="width: 100%" />
      </div>
    </div>
    <LayoutStar></LayoutStar>
  </div>
</template>

<script>
import { getMyInfo, logOut } from '@/api/index'
import LayoutStar from '@/components/Layout-Component.vue'
import { Dialog } from 'vant'
export default {
  data () {
    return {
      userMessage: {}
    }
  },
  async created () {
    if (this.$store.state.userToken) {
      const res = await getMyInfo(this.$store.state.userToken)
      this.userMessage = res.data.body
      console.log(res)
    }
  },
  components: {
    LayoutStar
  },
  methods: {
    exLogin () {
      Dialog.confirm({
        title: '提示',
        message: '是否确认退出'
      })
        .then(() => {
          logOut(this.$store.state.userToken)
          console.log(2)
          this.$store.commit('outUser')
          this.userMessage = {}
        })
        .catch(() => {
          // on cancel
        })
    }
  },
  name: 'my'

}
</script>

<style scoped lang="less">
.van-grid-item {
  height: 95px;
}
.myInfo {
  position: absolute;
  top: 100px;
  left: 48px;
  text-align: center;
  font-size: 13px;
  background-color: #fff;
  box-shadow: 3px 3px 3px #ccc;
  width: 278px;
  height: 165px;
  .infoButton {
    display: inline-block;
    text-align: center;
    width: 69px;
    height: 30px;
    border-radius: 3px;
    background-color: rgb(33, 185, 122);
    color: #fff;
    line-height: 30px;
  }
  .myInfo-img {
    transform: translateX(139px);
    margin: -35px;
    width: 70px;
    height: 70px;

    img {
      height: 100%;
    }
  }
}
</style>
