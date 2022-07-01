<template>
  <div>
    <van-nav-bar title="账号登陆" left-text="返回" @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="mobile"
        placeholder="请输入账号"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="code"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
      <p style="text-align: center">还没有账号去注册</p>
    </van-form>
  </div>
</template>

<script>

import { getLogin } from '@/api'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      try {
        const res = await getLogin({ username: this.username, password: this.password })
        console.log(res)
        if (res.data.status === 400) {
          this.$toast.success(res.data.description)
          return
        }
        this.$store.commit('setUser', res.data.body.token)
        this.$router.replace({ name: 'my' })
      } catch (err) {
        console.log(err)
        this.$toast.fail('校验失败')
      }
    },
    onClickLeft () {
      this.$router.replace({ name: 'my' })
    }
  }
}
</script>

<style>
</style>
