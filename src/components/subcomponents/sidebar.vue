<template>
<el-aside class="leftBar" width="250px">
  <el-menu :default-active="nowRouter" router>
    <el-menu-item index="/FrontEnd">
      <span slot="title" style="font-size:18px;">知识梳理</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">HTML</template>
      <el-menu-item-group>
        <el-menu-item index="/FrontEnd/HTML/HTML1">HTML1</el-menu-item>
        <el-menu-item index="/FrontEnd/HTML/HTML2">HTML2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">CSS</template>
      <el-menu-item-group>
        <el-menu-item index="/FrontEnd/CSS/CSS1">css选择器</el-menu-item>
        <el-menu-item index="/FrontEnd/CSS/CSS2">垂直水平居中</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">Javascript</template>
      <el-menu-item-group>
        <el-menu-item index="/FrontEnd/Javascript/letConst">let和const</el-menu-item>
        <el-menu-item index="/FrontEnd/Javascript/This">This</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">Network</template>
      <el-menu-item-group>
        <el-menu-item index="/FrontEnd/Network/Network1">Network1</el-menu-item>
        <el-menu-item index="/FrontEnd/Network/Network2">Network2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</el-aside>
</template>
<script>
export default {
  name: 'sidebar2',
  data () {
    return {
      loading: false,
      collapsed: this.$store.state.collapsed,
      nowRouter: ''
    }
  },
  created () {
    this.nowRouter = this.$route.path
  },
  methods: {
  }
  // watch: {
  //   '$route': function (to, from) {
  //     // 路由改变时执行
  //     this.nowRouter = to.path
  //   }
  // }
}
</script>

<style lang="scss">
.leftBar{
  width: 150px;
  border-right: 1px solid #ebeef5;
  .el-menu{
    .el-menu-item-group{
      .el-menu-item-group__title{
        display: none;
        height:0;
      }
    }
    .el-submenu__title{
      font-size:17px;
    }
  }
}
</style>
