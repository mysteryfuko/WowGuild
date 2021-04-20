<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-footer>
    <el-main>
      <router-view></router-view>
    </el-main>
    </el-footer>
  </el-container>
</template>

<script>
import navBar from './components/NavBar'
export default {
  setup () {

  },

  components: {
    navBar
  }
}
</script>

<style lang="scss">
</style>
