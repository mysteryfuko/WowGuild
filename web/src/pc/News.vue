<!--
 * @Author: your name
 * @Date: 2021-04-19 15:09:06
 * @LastEditTime: 2021-05-06 16:25:05
 * @LastEditors: MysteryFuko
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
  <el-collapse v-model="state.activeNames"
               accordion
               @change="handleChange">
    <el-collapse-item :name="index+1+''"
                      v-for="(item,index) in state.activity"
                      :key="index">
      <template #title>
        <div style="color:red">{{item.date}}</div>
      </template>
      <div :id="getID(index)" :style="{ width: '300px', height: '300px' }"></div>
      <div>{{item.content}}</div>
    </el-collapse-item>
  </el-collapse>

</template>

<script>
import { getNews, getActivity } from '@/util/api'
import { inject, onMounted, onUpdated, reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      activeNames: '1',
      newsTitle: '',
      news: '',
      activity: [],
      charid: 'chart1'
    })
    const echarts = inject('echarts')
    // 获取活动信息
    onMounted(() => {
      getActivity().then((res) => {
        state.activity = res.data
      })
      // 获取公告信息
      getNews().then((res) => {
        state.newsTitle = res.data.title
        state.news = res.data.content
      })
    })
    const getID = (index) => {
      return 'chart' + (index + 1)
    }
    const handleChange = (val) => {
      state.charid = 'chart' + val
    }
    onUpdated(() => {
      const myChart = echarts.init(document.getElementById(state.charid))
      // 绘制图表
      myChart.setOption({
        title: { text: '总用户量' },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['aaa', '12-4', '12-5', '12-6', '12-7', '12-8']
        },
        yAxis: {},
        series: [
          {
            name: '用户量',
            type: 'bar',
            data: [5, {
              value: 20,
              itemStyle: {
                color: '#a90000'
              }
            }, 36, 10, 10, 20]
          }
        ]
      })
    })
    return {
      state,
      handleChange,
      getID
    }
  }
}
</script>

<style>
</style>
