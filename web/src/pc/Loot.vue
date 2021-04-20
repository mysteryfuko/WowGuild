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
  data () {
    return {
      tableData: [{
        job: '2016-05-02',
        name: '王小虎',
        point: '上海市普陀区金沙江路 1518 弄'
      }, {
        job: '2016-05-04',
        name: '王小虎',
        point: '上海市普陀区金沙江路 1517 弄'
      }, {
        job: '2016-05-01',
        name: '王小虎',
        point: '上海市普陀区金沙江路 1519 弄'
      }, {
        job: '2016-05-03',
        name: '王小虎',
        point: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  setup () {}
}
</script>
