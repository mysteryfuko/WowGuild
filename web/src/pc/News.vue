<!--
 * @Author: your name
 * @Date: 2021-04-19 15:09:06
 * @LastEditTime: 2021-04-21 15:23:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\pc\News.vue
-->

<template>
  <el-alert :title="state.newsTitle"
            type="success"
            :description="state.news"
            :closable="false"
            show-icon>
  </el-alert>
<div id="myChart"
     :style="{ width: '300px', height: '300px' }"></div>
  <el-collapse v-model="state.activeNames" accordion >
    <el-collapse-item  :name="index+1+''" v-for="(item,index) in state.activity" :key="index">
      <template #title>
      <div style="color:red">{{item.date}}</div>
    </template>

      <div>{{item.content}}</div>
    </el-collapse-item>
  </el-collapse>

</template>

<script>
import { getNews, getActivity } from '@/util/api'
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      activeNames: ['1'],
      newsTitle: '',
      news: '',
      activity: []
    })
    // 获取活动信息
    getActivity().then((res) => {
      state.activity = res.data
    })
    // 获取公告信息
    getNews().then((res) => {
      state.newsTitle = res.data.title
      state.news = res.data.content
    })

    return {
      state
    }
  },
  mounted () {
    const myChart = this.$root.echarts.init(
      document.getElementById('myChart')
    )
    // 绘制图表
    myChart.setOption({
      title: { text: '总用户量' },
      tooltip: {},
      xAxis: {
        data: ['12-3', '12-4', '12-5', '12-6', '12-7', '12-8']
      },
      yAxis: {},
      series: [
        {
          name: '用户量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })
  }
}
</script>

<style>
</style>
