<template>
  <nav id="nav">
    <div class="logo" @click="jump">
      <img src="../assets/image/LOGO-2.png" alt="" />
    </div>
    <div class="navbar">
      <ul>
        <li>邀請他人簽屬</li>
        <li><router-link to="/NewFile">簽署新文件</router-link></li>
        <li>登入</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.push({ path: '/' })
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
        display: inline-block;
        color: $secondary;
        letter-spacing: 0.2em;
        @extend %fontFamily;
        @extend %HeadLine3;
        padding: 0 15px;
        text-decoration: none;

        > a {
          text-decoration: none;
          color: $secondary;
        }
      }
      > li:nth-child(1) {
        color: #e2e1dd;
      }
    }
  }
}
</style>
