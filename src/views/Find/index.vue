<template>
  <div>
    <TopNav></TopNav>
    <div class="checkList">
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="区域"
        @click="show = true"
      />
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="方式"
        @click="show = true"
      />
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="租金"
        @click="show = true"
      />
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="筛选"
        @click="show = true"
      />
      <van-popup v-model="show" round position="bottom" duration="0.1">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>
    </div>
    <LayoutStar></LayoutStar>
  </div>
</template>

<script>
import { getAreaInfo } from '@/api/index'
import TopNav from '@/components/TopNav.vue'
import LayoutStar from '@/components/Layout-Component.vue'
// console.log(this.$route.path)
export default {
  components: {
    LayoutStar, TopNav
  },
  name: 'find',
  async created () {
    const res = await getAreaInfo(this.$store.state.defaultCity.label)
    console.log(res)
  },
  data () {
    return {
      show: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }]
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }]
        }
      ]
    }
  },
  methods: {
    onFinish ({ selectedOptions }) {
      this.show = false
      this.fieldValue = selectedOptions.map((option) => option.text).join('/')
    }
  }
}

</script>

<style scoped lang="less">
/deep/.van-nav-bar__content {
  background-color: rgb(33, 185, 122);
}
.checkList {
  display: flex;
  height: 40px;
}
.van-field {
  padding: 0;

  /deep/ .van-cell__title,
  .van-field__label {
    text-align: center;
    margin: 0;
    overflow: hidden;
    line-height: 40px;
  }
}
</style>
