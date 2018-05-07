<template>
  <div>
    <button @click="login">登陆</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '1111111'
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
        this.$router.push({ path: '' })
      })
    }
  }
}
</script>

<style lang="scss">
</style>
