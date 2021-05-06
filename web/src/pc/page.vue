<!--
 * @Author: your name
 * @Date: 2021-04-19 16:00:29
 * @LastEditTime: 2021-05-06 16:17:50
 * @LastEditors: MysteryFuko
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
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { provide } from 'vue'
export default {
  setup () {
    echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer])
    provide('echarts', echarts)
  },

  components: {
    navBar
  }
}
</script>

<style lang="scss">
</style>
