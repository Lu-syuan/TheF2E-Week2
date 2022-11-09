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
  }
}
</style>
