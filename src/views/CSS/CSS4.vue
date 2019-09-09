<template>
  <div class="topFixed">
    <h2>四、滚动页面固定顶部栏</h2>
    <h3>4.1 目标</h3>
    <p>初始页面顶部是图片，然后是菜单栏，滚动页面后，顶部栏固定在顶端</p>
    <el-button type="success" @click="staticTop">DEMO</el-button>
    <!-- <img :src="scrollFixed1" class="img" alt=""> -->
    <!-- <img :src="scrollFixed2" class="img" alt=""> -->
    <p>HTML排版</p>
    <pre v-highlightjs="html"><code class="html"></code></pre>
    <p>css样式</p>
    <pre v-highlightjs="css"><code class="css"></code></pre>
    <p>javascript代码</p>
    <pre v-highlightjs="js"><code class="javascript"></code></pre>
  </div>
</template>

<script>
// import scrollFixed1 from '@/assets/images/css/滚动固定1.jpg'
// import scrollFixed2 from '@/assets/images/css/滚动固定2.jpg'
export default {
  name: 'CSS4',
  data () {
    return {
      // scrollFixed1,
      // scrollFixed2,
      html:
      `<div class="main">
    <header>
        <div class="banner">
            <h1 class="bgh1">顶部区域</h1>
        </div>
        <nav class="navbar">
            <ul>
                <li>数码产品</li>
                <li>生活家居</li>
                <li>饮料零食</li>
                <li>服饰衣物</li>
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
</div>`,
      css:
    `*{
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
}`,
      js:
    `$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $('.navbar').addClass("sticky");
  } else {
    $('.navbar').removeClass("sticky");
  }
});`
    }
  },
  methods: {
    staticTop () {
      this.$router.push('/CSS4_1')
    }
  }
}
</script>

<style lang="scss">
.topFixed{
  img{
    width: 80%;
    margin-bottom: 20px;
  }
}
</style>
