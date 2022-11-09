<template>
  <div id="Home">
    <nav-section :showLogin="showLogin" @Login="Login"></nav-section>
    <div class="text">
      <div class="logo">
        <img src="../assets/image/LOGO-1.png" alt="" />
      </div>
      <p>線上簽署，方便快速。</p>
      <button @click="jump">簽署新文件</button>
    </div>

    <div id="login-bg" :class="{ show: showLogin }">
      <div class="login">
        <div class="container">
          <p>快速登入</p>
          <div class="logo">
            <img src="../assets/image/LOGO-1.png" alt="" />
          </div>
          <div class="logoinWay">
            <p>請選擇登入點點簽的方式：</p>
            <div class="icon">
              <div class="icon-fb">
                <img src="../assets/image/fb.png" alt="" />
              </div>
              <p>or</p>
              <div class="icon-ig">
                <img src="../assets/image/ig.png" alt="" />
              </div>
            </div>
          </div>
          <div class="btn">
            <p>
              登入後即表示您接受我們的<a href="">服務條款</a>和<a href=""
                >隱私服務</a
              >。
            </p>
            <button @click="close">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavSection from '../components/NavSection.vue'

export default {
  data () {
    return {
      showLogin: false
    }
  },
  methods: {
    jump () {
      this.$router.push({ path: '/NewFile' })
    },
    Login (show) {
      console.log(show)
      this.showLogin = show
    },
    close () {
      this.showLogin = !this.showLogin
    }
  },
  components: {
    NavSection: NavSection
  }
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';
@import '../assets/cssreset.css';

#Home {
  height: 100vh;
  background-image: url('../assets/image/banner_主要物件 1.png'),
    url('../assets/image/banner_藍色板塊 1.png');
  background-position: left, top right;
  background-repeat: no-repeat;
  position: relative;
  > .text {
    @extend %fontFamily;
    @extend %HeadLine2;
    letter-spacing: 1em;
    position: absolute;
    top: 25.83%;
    left: 56.77%;
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
      @extend %HeadLine2;
      letter-spacing: 1em;
      margin-top: 93px;
      cursor: pointer;
    }
    > button:hover {
      background: $primary;
    }
  }
  > #login-bg.show {
    display: inherit;
  }
  > #login-bg {
    display: none;
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    > .login {
      max-width: 100%;
      width: 830px;
      height: 650px;
      background: $white;
      border-radius: 35px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 100;

      > .container {
        padding: 60px 0 45px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $dark-grey;
        @extend %fontFamily;
        > p {
          @extend %HeadLine1;
        }
        > .logo {
          height: 81.5px;
          width: 326px;
          margin: 25px 0 80px;
        }
        > .logoinWay {
          text-align: center;
          > p {
            @extend %HeadLine3;
          }
          > .icon {
            margin-top: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            > .icon-fb,
            .icon-ig {
              width: 86.25;
              height: 86.25;
            }
            > p {
              @extend %HeadLine4;
            }
          }
        }
        > .btn {
          align-self: flex-end;
          margin-top: 110px;
          display: flex;
          padding-right: 35px;
          gap: 50px;
          align-items: center;
          > p {
            @extend %HeadLine4;
            > a {
              color: $dark-grey;
              font-weight: 500;
            }
          }
          > button {
            width: 180px;
            height: 60px;
            border-radius: 35px;
            background-color: $light-main;
            color: $secondary;
            @extend %HeadLine3;
            border: none;
            outline: none;
            box-shadow: 0px 4px 4px #eeede8;
            cursor: pointer;
          }
          > button:hover {
            background-color: $primary;
            color: $white;
          }
        }
      }
    }
  }
}
</style>
