<!--
 * @Author: your name
 * @Date: 2021-04-19 16:00:29
 * @LastEditTime: 2021-05-03 15:10:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \web\src\pc\page.vue
-->
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
