<template>
  <nav id="nav">
    <div class="logo" @click="jump">
      <img src="../assets/image/LOGO-2.png" alt="" />
    </div>
    <div class="navbar">
      <ul>
        <li><a href="" class="disable">邀請他人簽屬</a></li>
        <li><router-link to="/NewFile/UpLoad">簽署新文件</router-link></li>
        <li><a href="" @click="login">登入</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['showLogin'],
  methods: {
    jump () {
      this.$router.push({ path: '/' })
    },
    login (e) {
      e.preventDefault()
      this.$emit('Login', !this.showLogin)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';
@import '../assets/cssreset.css';

#nav {
  background-color: $light-main;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 242px;
  > .logo {
    width: 100px;
    height: 25px;
    cursor: pointer;
  }
  > .navbar {
    > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      > li {
        > a {
          display: inline-block;
          color: $secondary;
          letter-spacing: 0.2em;
          @extend %fontFamily;
          @extend %HeadLine4;
          padding: 0 15px;
          text-decoration: none;
          text-decoration: none;
          color: $secondary;
        }
        > a:hover {
          text-decoration: none;
          color: $primary;
        }
        > .disable {
          color: #e2e1dd;
        }
      }
    }
  }
}
</style>
