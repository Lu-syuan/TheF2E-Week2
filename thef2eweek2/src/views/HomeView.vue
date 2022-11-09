<template>
  <div class="container">
    <nav-section></nav-section>
    <div class="text">
      <div class="logo">
        <img src="../assets/image/LOGO-1.png" alt="" />
      </div>
      <p>線上簽署，方便快速。</p>
      <button @click="jump">簽署新文件</button>
    </div>
  </div>
</template>

<script>
import NavSection from '../components/NavSection.vue'
// import HomeViewVue from './views/HomeView.vue'

export default {
  methods: {
    jump () {
      this.$router.push({ path: '/NewFile' })
    }
  },
  components: {
    NavSection: NavSection
    // HomeView: HomeViewVue
  }
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';
@import '../assets/cssreset.css';

.container {
  height: 100vh;
  background-image: url('../assets/image/banner_主要物件 1.png'),
    url('../assets/image/banner_藍色板塊 1.png');
  background-position: left, top right;
  background-repeat: no-repeat;
  position: relative;
  > .text {
    @extend %fontFamily;
    @extend %HeadLine1;
    letter-spacing: 1em;
    position: absolute;
    top: 25.83%;
    left: 56.77%;
    //     left: 50%;
    > .logo {
      width: 468px;
      height: 117px;
    }
    > p {
      color: $secondary;
    }
    > button {
      width: 468px;
      height: 100px;
      background: $light-main;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border: none;
      outline: none;
      @extend %fontFamily;
      @extend %HeadLine1;
      letter-spacing: 1em;
      margin-top: 93px;
      cursor: pointer;
    }
  }
}
</style>
