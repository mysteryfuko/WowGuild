<!--
 * @Author: your name
 * @Date: 2021-04-19 14:04:29
 * @LastEditTime: 2021-05-05 17:12:49
 * @LastEditors: MysteryFuko
 * @Description: In User Settings Edit
 * @FilePath: \web\src\pc\Point.vue
-->
<template>

  <el-input v-model="state.search"
            size="mini"
            placeholder="输入变动原因或日期关键字搜索"
            style="line-height: 24px;width:200px " />
  <el-table :cell-class-name="handleRowClass"
            :data="state.tableData.filter(data => !state.search || data.name.toLowerCase().includes(state.search.toLowerCase()) )"
            border
            @row-click="handleClick">
    <el-table-column prop="name"
                     label="姓名"
                     width="280">
    </el-table-column>
    <el-table-column prop="job"
                     label="职业"
                     width="280">
    </el-table-column>
    <el-table-column prop="point"
                     label="分值">
    </el-table-column>
  </el-table>

  <el-pagination background
                 layout="prev, pager, next"
                 :total="state.totalNum"
                 :page-size="20"
                 @current-change="handleCurrentChange">
  </el-pagination>
  <player-point-detail ref="playerRef"></player-point-detail>
</template>

<script>
import { getPoint } from '@/util/api'
import '@/assets/job.css'
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import PlayerPointDetail from './components/PlayerPointDetail.vue'

export default {
  components: {
    PlayerPointDetail
  },
  setup () {
    const state = reactive({
      tableData: [],
      totalNum: 0,
      search: ''
    })
    const playerRef = ref()
    const route = useRoute()

    onMounted(() => {
      getPoint(route.params.id).then((res) => {
        state.tableData = res.data
        state.totalNum = res.total
      })
    })

    const handleRowClass = (row) => {
      if (row.columnIndex === 0) {
        return row.row.job
      }
    }
    const handleCurrentChange = (page) => {
      getPoint(route.params.id, page).then((res) => {
        state.tableData = res.data
      })
    }
    const handleClick = (val) => {
      playerRef.value.getTableData(val)
    }
    return {
      state,
      handleRowClass,
      handleCurrentChange,
      handleClick,
      playerRef
    }
  }
}
</script>

<style scoped>
.el-drawer__header div {
  flex: inherit;
  width: 200px;
}
</style>
