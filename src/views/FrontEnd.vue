<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <sidebar/>
      <el-container>
        <el-main>
          <router-view></router-view>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入侧边栏组件
import sidebar from '@/components/subcomponents/sidebar2.vue'
export default {
  name: 'FrontEnd',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  },
  methods: {
    backToLast () {
      this.$router.go(-1)
    }
  },
  components: {
    sidebar
  }
}
</script>

<style lang="scss">
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
