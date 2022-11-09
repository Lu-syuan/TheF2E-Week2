<template>
  <div>
    <nav-section></nav-section>
    <router-view></router-view>
    <h1><router-link to="/NewFile/UpLoad">upload</router-link></h1>
  </div>
</template>

<script>
import NavSection from '../components/NavSection.vue'
// import HomeViewVue from './views/HomeView.vue'

export default {
  components: {
    NavSection: NavSection
    // HomeView: HomeViewVue
  }
}
</script>
