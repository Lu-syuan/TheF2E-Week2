<template>
  <div id="NewFile">
    <nav-section></nav-section>
    <router-view></router-view>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import NavSection from '../components/NavSection.vue'
import FooterSection from '../components/FooterSection.vue'

// import HomeViewVue from './views/HomeView.vue'

export default {
  components: {
    NavSection: NavSection,
    FooterSection: FooterSection
  }
}
</script>

//
<style scoped lang="scss">
// @import '../assets/main.scss';
// @import '../assets/cssreset.css';

// #NewFile {
//   > router-view {
//     height: 80vh;
//     background: #ccc;
//   }
// }
//
</style>
