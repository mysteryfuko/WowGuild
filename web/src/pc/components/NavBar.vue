<template>
  <el-menu :default-active="activeIndex"
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
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      activeIndex: '1',
      navConfig: {
        point: '1',
        pointChange: '2',
        loot: '3'
      }
    }
  },
  setup () {

  },
  computed: {
    ...mapState('TitleModule', ['titleList'])
  },
  created () {
    // 高亮当前页面所述标签
    if (this.$route.params.id !== undefined) {
      this.activeIndex = this.$route.params.id + '-' + this.navConfig[this.$route.name]
    }
  },
  mounted () {
    // 初始化导航栏数据
    if (this.titleList !== '') {
      getTitle().then((res) => {
        this.setTitleList(res.data.title)
      })
    }
  },
  methods: {
    ...mapMutations('TitleModule', ['setTitleList'])
  }
}
</script>

<style>
.navbar {
}
</style>
