<template>
  <div>
    <TopNav></TopNav>
    <van-dropdown-menu>
      <van-dropdown-item title="区域" ref="item">
        <van-picker :columns="regionList" value-key="label" />
        <van-row>
          <van-col span="8">
            <van-button block>取消</van-button>
          </van-col>
          <van-col span="16">
            <van-button type="primary" block>确定</van-button>
          </van-col>
        </van-row>
      </van-dropdown-item>
      <van-dropdown-item title="方式" ref="item">
        <van-picker :columns="rentTypeList" value-key="label" />
        <van-row>
          <van-col span="8">
            <van-button block>取消</van-button>
          </van-col>
          <van-col span="16">
            <van-button type="primary" block>确定</van-button>
          </van-col>
        </van-row></van-dropdown-item
      >
      <van-dropdown-item title="租金" ref="item">
        <van-picker :columns="rentPriceList" value-key="label" />
        <van-row>
          <van-col span="8">
            <van-button block>取消</van-button>
          </van-col>
          <van-col span="16">
            <van-button type="primary" block>确定</van-button>
          </van-col>
        </van-row></van-dropdown-item
      >
      <van-dropdown-item title="筛选" ref="item">
        <van-row>
          <van-col span="8">
            <van-button block>取消</van-button>
          </van-col>
          <van-col span="16">
            <van-button type="primary" block>确定</van-button>
          </van-col>
        </van-row></van-dropdown-item
      >
    </van-dropdown-menu>
    <van-grid class="content" v-for="item in cityMessage" :key="item.houseCode">
      <van-image width="100" height="100" :src="$imgUrl + item.houseImg" />
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
    <!-- </van-list> -->
    <LayoutStar></LayoutStar>
  </div>
</template>

<script>
import { cityMessage, getCityCondition } from '@/api/index'
import TopNav from '@/components/TopNav.vue'
import LayoutStar from '@/components/Layout-Component.vue'
// console.log(this.$route.path)
export default {
  components: {
    LayoutStar, TopNav
  },
  name: 'find',
  created () {
    this.onLoad()
    this.getContainer()
  },
  data () {
    return {
      // 租房列表
      cityMessage: [],
      // 区域
      // 自定义规则

      regionList: [],
      // 方式

      rentTypeList: [],
      // 租金

      rentPriceList: [],
      // 筛选

      screenValue: '',
      screenList: [],

      finished: false,
      loading: false,
      star: '',
      CityList: []

    }
  },
  methods: {
    async getContainer () {
      try {
        const res = await getCityCondition()
        console.log(res.data.body)
        this.rentList = res.data.body.price
        this.regionList = [res.data.body.area, res.data.body.subway]
        this.regionList[0].children[0].children = [{ label: '' }]
        this.regionList[1].children[0].children = [{ label: '' }]
        this.rentTypeList = res.data.body.rentType
        this.rentPriceList = res.data.body.price
      } catch (err) { console.log(err) }
    },
    async onLoad () {
      const res = await cityMessage({ cityId: this.$store.state.defaultCity.value, star: this.star })
      this.cityMessage.push(...res.data.body.list)
      this.star = this.cityMessage[this.cityMessage.length - 1].houseCode
      this.loading = false
    }
  }
}

</script>

<style scoped lang="less">
/deep/.van-nav-bar__content {
  background-color: rgb(33, 185, 122);
}
.van-grid {
  padding: 10px;
  border-bottom: 1px solid rgb(207, 199, 199);
  .text {
    margin-left: 10px;
  }
}
.content {
  display: flex;
  margin-top: 40px;
  width: 345px;
  height: 120px;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 12px;
  padding-bottom: 50px;
  .text {
    width: 180px;
    height: 102px;
  }
}
</style>
