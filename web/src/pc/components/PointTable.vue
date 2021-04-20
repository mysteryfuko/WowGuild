<template>
  <el-table :data="tableData"
            height="250"
            border
            style="width: 100%">
    <el-table-column prop="name"
                     label="姓名"
                     width="180">
    </el-table-column>
    <el-table-column prop="job"
                     label="职业"
                     width="180">
    </el-table-column>
    <el-table-column prop="point"
                     label="分值">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  setup () {}
}
</script>
