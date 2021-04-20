<template>
  <el-menu :default-active="activeIndex" class="navbar" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">最新动态</el-menu-item>
    <el-submenu index="2">
      <template #title>BWL</template>
      <el-menu-item index="2-1">分值</el-menu-item>
      <el-menu-item index="2-2">加减</el-menu-item>
      <el-menu-item index="2-3">Loot</el-menu-item>
    </el-submenu>
  </el-menu>
<div class="line"></div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.navbar{
}
</style>
