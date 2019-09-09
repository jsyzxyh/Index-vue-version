<template>
  <div class="main">
    <header>
      <div class="banner">
        <h1 class="bgh1">顶部区域</h1>
      </div>
      <nav class="navbar" v-bind:class="{ sticky: classFix }">
        <ul>
          <li>数码产品</li>
          <li>生活家居</li>
          <li>饮料零食</li>
          <li>服饰衣物</li>
          <li><el-button class="back" @click="back">返回</el-button></li>
        </ul>
      </nav>
    </header>
    <div class="content">
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
      <h2>hahahahaha</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSS4_1',
  data () {
    return {
      classFix: false
    }
  },
  mounted () {
    // handleScroll为页面滚动的监听回调
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // 得到页面滚动的距离
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop > 300) {
        this.classFix = true
      } else {
        this.classFix = false
      }
    },
    back () {
      this.$router.push({path: '/FrontEnd/CSS/CSS4'})
    }
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
}
.main{
  width:100%;
}
.banner {
  width: 100%;
  height: 300px;
  background-color: lightblue
}
.bgh1 {
  text-align: center;
  font-size: 22px;
  line-height:300px;
}
header{
  width:100%;
  height:400px;
}
nav{
  width:100%;
}
.navbar{
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: lightgrey;
}
.navbar>ul{
  list-style: none;
  overflow: hidden;
  width:100%;
  height: 100px;
  margin-left: 200px;
}
.navbar>ul>li{
  float:left;
  height: 100px;
  line-height: 100px;
  margin-right:100px;
  font-size: 20px;
  vertical-align: center;
}
.navbar.sticky{
  position:fixed;
  top: 0;
  background-color: lightgrey;
  box-shadow: 0 0 10px 1px #000000;
}
.content {
  width: 100%;
  text-align: center;
  min-height: 2000px;
}
.content>h2{
  margin:50px 0;
}
</style>
