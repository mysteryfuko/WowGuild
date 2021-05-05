<!--
 * @Author: MysteryFuko
 * @Date: 2021-05-04 15:41:48
 * @LastEditors: MysteryFuko
 * @LastEditTime: 2021-05-05 17:18:59
 * @Description: file content
 * @FilePath: \web\src\pc\components\PlayerPointDetail.vue
-->
<template>
  <el-drawer v-model="state.Drawer"
             size="60%">
             <el-tabs v-model="state.activeName" @tab-click="handleClick">
  <el-tab-pane label="分数变化" name="pointTab">
    <el-table :data="state.playerTableData"
              border
              >
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
                   :total="state.titleNum"
                   :page-size="20"
                   @current-change="handlePlayerCurrentChange">
    </el-pagination>
    </el-tab-pane>
    <el-tab-pane label="战斗详情" name="combatDetail" v-if="state.CombatShow"></el-tab-pane>
  </el-tabs>

  <template #title>
      <div :class="state.titleNameJob">
        {{state.titleName}}
      </div>
  </template>
  </el-drawer>
</template>

<script>
import { reactive } from 'vue'
import { getPlayer } from '@/util/api'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const state = reactive({
      Drawer: false,
      playerTableData: [],
      titleNum: 0,
      titleName: '',
      titleNameJob: '',
      activeName: 'pointTab',
      CombatShow: false
    })
    const route = useRoute()
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    const getTableData = (val, CombatShow = false) => {
      state.CombatShow = CombatShow
      state.Drawer = true
      state.titleName = val.name
      state.titleNameJob = val.job
      getPlayer(val.name, route.params.id).then((res) => {
        state.playerTableData = res.data
        state.titleNum = res.total
      })
    }
    const handlePlayerCurrentChange = (page) => {
      getPlayer(state.titleName, route.params.id, page).then((res) => {
        state.playerTableData = res.data
      })
    }
    return {
      state,
      getTableData,
      handlePlayerCurrentChange,
      handleClick
    }
  }
}
</script>
