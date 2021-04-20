<template>
<van-tabbar v-model="active">
  <van-tabbar-item icon="newspaper-o">公会动态</van-tabbar-item>
  <van-tabbar-item icon="orders-o">分数</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
</template>

<script>
import { ref } from 'vue'
import { Tabbar, TabbarItem, Icon } from 'vant'

export default {
  setup () {
    const active = ref(0)
    return { active }
  },

  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon
  }
}
</script>

<style>

</style>
