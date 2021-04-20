<!--
 * @Author: your name
 * @Date: 2021-04-19 14:04:29
 * @LastEditTime: 2021-04-21 05:50:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web\src\pc\Point.vue
-->
<template>
  <el-input v-model="search"
            size="mini"
            placeholder="输入变动原因或日期关键字搜索"
            style="line-height: 24px;width:200px " />
  <el-table :cell-class-name="handleRowClass"
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) )"
            border
            @current-change="handleClick">
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
                 :total="totalNum"
                 :page-size="20"
                 @current-change="handleCurrentChange">
  </el-pagination>
  <el-drawer v-model="Drawer"
             size="60%">
    <el-table :data="playerTableData"
              border>
      <el-table-column prop="date"
                       label="时间"
                       width="280">
      </el-table-column>
      <el-table-column prop="point"
                       label="变动值"
                       width="280">
      </el-table-column>
      <el-table-column prop="event"
                       label="变动原因">
      </el-table-column>
    </el-table>
    <el-pagination background
                   layout="prev, pager, next"
                   :total="titleNum"
                   :page-size="20"
                   @current-change="handlePlayerCurrentChange">
    </el-pagination>
    <template #title>
      <div :class="titleNameJob">
        {{titleName}}
      </div>
    </template>
  </el-drawer>
</template>

<script>
import { getPoint, getPlayer } from '@/util/api'
import '@/assets/job.css'

export default {
  data () {
    return {
      search: '',
      totalNum: 0,
      tableData: [],
      playerTableData: [],
      Drawer: false,
      titleName: '',
      titleNameJob: '',
      titleNum: 0
    }
  },
  mounted () {
    getPoint(this.$route.params.id).then((res) => {
      this.tableData = res.data
      this.totalNum = res.total
    })
  },
  /**
   * @description: 返回表单class名
   * @param row
   * row.rowIndex 当前行
   * row.columnIndex 当前列
   * @return {*}
   */

  methods: {
    handleRowClass (row) {
      if (row.columnIndex === 0) {
        return row.row.job
      }
    },
    /**
     * @description:分页函数
     * @param page number- 页码
     *
     * */
    handleCurrentChange (page) {
      getPoint(this.$route.params.id, page).then((res) => {
        this.tableData = res.data
      })
    },
    handleClick (val) {
      this.Drawer = true
      this.titleName = val.name
      this.titleNameJob = val.job
      getPlayer(val.name, this.$route.params.id).then((res) => {
        this.playerTableData = res.data
        this.titleNum = res.total
      })
    },
    handlePlayerCurrentChange (page) {
      getPlayer(this.titleName, this.$route.params.id, page).then((res) => {
        this.playerTableData = res.data
      })
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
