<template>
  <div class="login-container">{{ msg }}</div>
</template>
<script>
import { getVerifyCode } from '../services/cms'
export default {
  name: 'Login',
  props: { msg: '' },
  setup() {
    console.log('login component')
    getVerifyCode()
  }
}
</script>
<style lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('/assets/images/login_bg.jpg');
}
</style>
