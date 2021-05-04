<!--
 * @Author: MysteryFuko
 * @Date: 2021-04-19 17:10:46
 * @LastEditTime: 2021-05-04 16:31:58
 * @LastEditors: MysteryFuko
 * @Description: In User Settings Edit
 * @FilePath: \web\src\pc\components\NavBar.vue
-->
<template>
  <el-menu :default-active="state.activeIndex"
           class="navbar"
           mode="horizontal">
    <el-menu-item index="1">
      <router-link to="/">最新动态</router-link>
    </el-menu-item>
    <el-submenu :index="(index+2)+''"
                v-for="(item,index) in $store.state.TitleModule.titleList"
                :key="item">
      <template #title>{{item}}</template>
      <router-link :to="'/point/'+(item)">
        <el-menu-item :index="item+'-1'">分值</el-menu-item>
      </router-link>
      <router-link :to="'/pointChange/'+(item)">
        <el-menu-item :index="item+'-2'">加减</el-menu-item>
      </router-link>
      <router-link :to="'/loot/'+(item)">
        <el-menu-item :index="item+'-3'">Loot</el-menu-item>
      </router-link>
    </el-submenu>
  </el-menu>
  <div class="line"></div>
</template>

<script>
import { getTitle } from '@/util/api'
import { useStore } from 'vuex'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const state = reactive({
      activeIndex: '1',
      navConfig: {
        point: '1',
        pointChange: '2',
        loot: '3'
      }
    })
    const route = useRoute()
    const store = useStore()

    onMounted(() => {
      if (store.state.TitleModule.titleList !== '') {
        getTitle().then((res) => {
          store.commit('TitleModule/setTitleList', res.data.title)
        })
      }

      if (route.params.id !== undefined) {
        state.activeIndex = route.params.id + '-' + state.navConfig[route.name]
      }
    })
    return {
      state
    }
  }
}
</script>

<style>
</style>
