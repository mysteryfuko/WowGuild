<!--
 * @Author: MysteryFuko
 * @Date: 2021-05-05 16:52:54
 * @LastEditors: MysteryFuko
 * @LastEditTime: 2021-05-05 17:12:58
 * @Description: file content
 * @FilePath: \web\src\pc\components\CombatDetail.vue
-->
vue
<template>
  <el-drawer title="我是标题"
             v-model="state.combatDrawer"
             size="70%">
    <span>战斗信息</span>
  </el-drawer>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      combatDrawer: false
    })

    const getCombatData = (val) => {
      state.combatDrawer = true
    }
    return { state, getCombatData }
  }
}
</script>

<style lang="scss" scoped>

</style>
