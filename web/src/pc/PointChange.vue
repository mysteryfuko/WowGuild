<template>

  <el-input v-model="state.search"
            size="mini"
            placeholder="输入变动原因或日期关键字搜索"
            style="line-height: 24px;float:right;width:200px " />
  <el-table :data="state.tableData.filter(data => !state.search || data.date.toLowerCase().includes(state.search.toLowerCase()) ||data.event.toLowerCase().includes(state.search.toLowerCase())  )"
            style="width: 100%"
            :row-key="state.getRowKeys"
                :expand-row-keys="state.expands"
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
                   @click="handleNameClick(item,'true')">{{ item.name }}</div>
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
                 :total="state.totalNum"
                 :page-size="20"
                 @current-change="handleCurrentChange">
  </el-pagination>
  <combat-detail ref="CombatRef"></combat-detail>
  <player-point-detail ref="playerRef"></player-point-detail>

</template>

<script scoped>
import { getPointChange } from '@/util/api'
import '@/assets/job.css'
import CombatDetail from './components/CombatDetail'
import PlayerPointDetail from './components/PlayerPointDetail'
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    CombatDetail,
    PlayerPointDetail
  },
  setup () {
    const state = reactive({
      search: '',
      tableData: [],
      getRowKeys (row) {
        return row.id
      },
      expands: [],
      totalNum: 0
    })

    const CombatRef = ref()
    const playerRef = ref()
    const route = useRoute()

    const toggleRowExpansion = (row) => {
      state.expands = []
      state.expands.push(row.id)
    }

    const handleCurrentChange = (page) => {
      getPointChange(route.params.id, page).then((res) => {
        state.tableData = res.data
      })
    }

    const handleCombatClick = () => {
      CombatRef.value.getCombatData()
    }

    const handleNameClick = (val, draw) => {
      playerRef.value.getTableData(val, draw)
    }
    onMounted(() => {
      getPointChange(route.params.id).then((res) => {
        state.tableData = res.data
        state.totalNum = res.total
      })
    })
    return {
      state,
      toggleRowExpansion,
      handleCurrentChange,
      handleCombatClick,
      CombatRef,
      playerRef,
      handleNameClick
    }
  }
}
</script>
<style scoped>
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
