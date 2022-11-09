<template>
  <footer id="footer">
    <div class="container">
      <div class="progress-container">
        <div id="progress" class="progress"></div>
        <div class="circle active">1</div>
        <div class="circle">2</div>
        <div class="circle">3</div>
      </div>
      <div class="btn">
        <button v-for="btn in FooterBtn" :key="btn.id">
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
        { id: 1, value: '創建文件', display: true }
      ]
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
    > .progress-container {
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-bottom: 30px;
      max-width: 100%;
      width: 270px;
      z-index: 10;
    }
    > .progress-container::before {
      content: '';
      background-color: black;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 3px;
      z-index: -1;
      transform: translateY(-50%); /*線條往上移動*/
      > div.circle {
        color: white;
        background-color: #f34764;
        border: 3px solid var(--line-border-empty);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        /* 讓數字置中對齊 */
        display: flex;
        justify-content: center;
        align-items: center;
        transition: border 0.5s linear;
      }
    }
  }
}
</style>
