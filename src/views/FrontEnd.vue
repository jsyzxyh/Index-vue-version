<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <sidebar/>
      <el-container>
        <el-main>
          <!-- <div class="frontEnd_konwledge"><h2>知识梳理</h2></div> -->
          <router-view class="main"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入侧边栏组件
import sidebar from '@/components/subcomponents/sidebar.vue'
export default {
  name: 'FrontEnd',
  data () {
    return {}
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
.frontEnd_konwledge{
  text-align: left;
}
.el-main{
  width: 900px;
  .main{
    width: 900px;
    margin-left: 30px;
  }
}
pre[class*="language-"]{
  font-size: 14px;
  padding: 0;
  border: .1em solid hsl(0, 0%, 33%);
  code[class*="language-"]{
    line-height: 0.5em;
  }
}
</style>
