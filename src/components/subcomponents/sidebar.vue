<template>
  <div class="front_end_siderbar">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          :default-active="this.$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="0">
            <span slot="title">知识梳理</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <span>HTML</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/FrontEnd/HTML/HTML1">选项1</el-menu-item>
              <el-menu-item index="/FrontEnd/HTML/HTML1">选项2</el-menu-item>
              <el-menu-item index="/FrontEnd/Javascript">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>CSS</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>Javascript</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span>Vue</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
              <el-menu-item index="4-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
.front_end_siderbar{
  height:100%;
  .tac.el-row{
    .el-col{
      .el-menu-vertical-demo{
        height: 100%;
      }
      ul{
        li{
          font-size: 18px;
          .el-submenu__title{
            font-size: 18px;
          }
        }
      }
    }
  }
  .back{
    margin-top: 20px;
  }
}
</style>
