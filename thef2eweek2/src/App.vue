<template>
  <div id="app">
    <nav-section></nav-section>
  </div>
</template>

<script>
// import NavSection from './components/nav.vue'

// export default {
//   components: {
//     NavSection: NavSection
//   }
// }

import NavSection from './components/NavSection.vue'

export default {
  components: {
    NavSection: NavSection
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
@import './assets/main.scss';
@import './assets/cssreset.css';
</style>
