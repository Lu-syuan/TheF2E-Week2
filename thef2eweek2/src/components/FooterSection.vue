<template>
  <footer id="footer">
    <div class="container">
      <div class="step">
        <div class="text">
          <p>上傳文件</p>
          <p>進行簽署</p>
          <p>下載文件</p>
        </div>
        <div class="progress-container">
          <div id="progress" class="progress"></div>
          <div class="circle active"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
      <div class="btn">
        <button
          v-for="btn in FooterBtn"
          :key="btn.id"
          @click="ChangePage(btn.value)"
        >
          {{ btn.value }}
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      FooterBtn: [
        { id: 0, value: '取消', display: true },
        { id: 1, value: '開啟文件', display: true }
      ]
    }
  },
  methods: {
    ChangePage (value) {
      switch (value) {
        case '取消':
          this.$router.push({ path: '/NewFile/UpLoad' })
          break
        case '開啟文件':
          this.$router.push({ path: '/NewFile/SignName' })
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';
@import '../assets/cssreset.css';

#footer {
  height: 100px;
  width: 100%;
  background-color: $light-main;
  > .container {
    padding: 20px 240px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    > .step {
      > .text {
        display: flex;
        width: 400px;
        justify-content: space-between;
        align-items: center;
        margin-left: -25px;
        margin-bottom: 10px;
        > p {
          @extend %HeadLine4;
          @extend %fontFamily;
          color: $secondary;
        }
      }
      > .progress-container {
        position: relative;
        width: 350px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        > .progress {
          position: absolute;
        }
        > .circle {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 3px solid $white;
          background: $secondary;
          box-shadow: 0px 4px 4px #eeede8;
          z-index: 10;
        }
      }
      > .progress-container::before {
        content: '';
        background-color: $white;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        z-index: 1;
        transform: translateY(-50%); /*線條往上移動*/
        box-shadow: 0px 4px 4px #eeede8;
      }
    }

    > .btn {
      > button {
        cursor: pointer;
        width: 180px;
        height: 60px;
        border-radius: 35px;
        background: $white;
        color: $secondary;
        @extend %HeadLine3;
        @extend %fontFamily;
        line-height: 60px;
        outline: none;
        border: none;
        box-shadow: 0px 4px 4px #eeede8;
        margin-left: 15px;
      }
    }
  }
}
</style>
