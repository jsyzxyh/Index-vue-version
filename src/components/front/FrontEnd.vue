<template>
  <div>
    123456
    <el-row class="container">
      666666
      <!--头部-->
      <!-- <el-col :span="24"><router-view name="top"></router-view></el-col> -->
      <el-col :span="24" class="main">
        <!--左侧导航-->
        <router-view name="aside"></router-view>
        <!--右侧内容区-->
        <section class="content-container">
          <div class="grid-content bg-purple-light">
            <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </div>
        </section>
      </el-col>
    </el-row>
    <!-- <div class="sidebar_containe">
      <sidebar></sidebar>
    </div>
    <div class="detail">
      <p>12345</p>
    </div>
    <el-button class="back" type="success" @click="backToLast">返回</el-button> -->
  </div>
</template>

<script>
// 导入侧边栏组件
// import sidebar from '../subcomponents/sidebar.vue'
export default {
  name: 'FrontEnd',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    backToLast () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
</style>
