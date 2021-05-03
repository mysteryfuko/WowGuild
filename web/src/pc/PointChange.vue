<template>

  <el-input v-model="search"
            size="mini"
            placeholder="输入变动原因或日期关键字搜索"
            style="line-height: 24px;float:right;width:200px " />
  <el-table :data="tableData.filter(data => !search || data.date.toLowerCase().includes(search.toLowerCase()) ||data.event.toLowerCase().includes(search.toLowerCase())  )"
            style="width: 100%"
            :row-key="getRowKeys"
                :expand-row-keys="expands"
                @current-change="toggleRowExpansion"
                @expand-change = "toggleRowExpansion"
            >
    <el-table-column type="expand">
      <template #default="props">
        <el-form label-position="left"
                 inline
                 class="PointChangeTable">
          <el-button type="primary"
                     icon="el-icon-search"
                     @click="handleCombatClick"
                     style="display:block">事件详情</el-button>
          <el-form-item label="参与玩家">
            <span>
              <div v-for="item in props.row.name"
                   :key="item"
                   :class="item.job"
                   class="job"
                   @click="handleNameClick(item.name,item.job)">{{ item.name }}</div>
            </span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="变动原因"
                     prop="event">
    </el-table-column>
    <el-table-column label="变化分值"
                     prop="point">
    </el-table-column>
    <el-table-column label="影响人数"
                     prop="poepleNum">
    </el-table-column>
    <el-table-column label="发生时间"
                     prop="date">
    </el-table-column>
  </el-table>
  <el-pagination background
                 layout="prev, pager, next"
                 :total="totalNum"
                 :page-size="20"
                 @current-change="handleCurrentChange">
  </el-pagination>

  <el-drawer title="我是标题"
             v-model="nameDrawer"
             size="60%">
    <el-table               :data="playerTableData"
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
        {{namedata}}
      </div>
    </template>
  </el-drawer>

  <el-drawer title="我是标题"
             v-model="combatDrawer"
             size="70%">
    <span>战斗信息</span>
  </el-drawer>

</template>

<script scoped>
import { getPointChange, getPlayer } from '@/util/api'
import '@/assets/job.css'
export default {
  data () {
    return {
      tableData: [],
      playerTableData: [],
      nameDrawer: false,
      combatDrawer: false,
      namedata: '',
      search: '',
      totalNum: 0,
      titleNameJob: '',
      titleNum: 0,
      // 获取row的key值
      getRowKeys (row) {
        return row.id
      },
      // 要展开的行，数值的元素是row的key值
      expands: []
    }
  },

  mounted () {
    getPointChange(this.$route.params.id).then((res) => {
      this.tableData = res.data
      this.totalNum = res.total
    })
  },
  methods: {
    toggleRowExpansion (row) {
      this.expands = []
      this.expands.push(row.id)
    },
    handleNameClick (name, job) {
      this.nameDrawer = true
      this.namedata = name
      this.titleNameJob = job
      getPlayer(this.namedata, this.$route.params.id).then(res => {
        this.playerTableData = res.data
        this.titleNum = res.total
      })
    },
    handleCombatClick () {
      this.combatDrawer = true
    },
    /**
     * @description:分页函数
     * @param page number- 页码
     *
     * */
    handleCurrentChange (page) {
      getPointChange(this.$route.params.id, page).then((res) => {
        this.tableData = res.data
      })
    },
    handlePlayerCurrentChange (page) {
      getPlayer(this.titleName, this.$route.params.id, page).then(res => {
        this.playerTableData = res.data
      })
    }
  }
}
</script>
<style>
.job {
  float: left;
  padding: 10px;
  height: 50px;
  width: 100px;
  margin: 2px;
  text-align: center;
}
.el-form--inline .el-form-item__label {
  display: block;
}
.PointChangeTable {
  font-size: 0;
}
.PointChangeTable label {
  width: 90px;
  color: #99a9bf;
}
.PointChangeTable .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 70%;
}
</style>
