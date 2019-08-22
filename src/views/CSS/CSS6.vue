<template>
  <div class="tow_column">
    <h2>六、三栏布局</h2>
    <h3>6.1 圣杯布局</h3>
    <p>left,mian,right均设置float:left和position:relative</p>
    <p>left板块设置margin-left:-100%和left:-100px，right板块设置margin-left:150px和right:-150px</p>
    <p>外部的wrapper设置padding</p>
    <el-button type="success" @click="towShengbei">DEMO</el-button>
    <p>HTML排版</p>
    <pre v-highlightjs="shengbei_html"><code class="html"></code></pre>
    <p>css样式</p>
    <pre v-highlightjs="shengbei_css"><code class="css"></code></pre>
    <h3>6.2 双飞翼布局</h3>
    <p>中间部分content单独用一个div包装，设置content样式：margin:0 300px 0 200px;</p>
    <p>left,right,middle均使用float布局，left板块设置css：margin-left:-100%，right板块设置css：margin-left: -300px</p>
    <el-button type="success" @click="towShuangfeiyi">DEMO</el-button>
    <p>HTML排版</p>
    <pre v-highlightjs="shuangfeiyi_html"><code class="html"></code></pre>
    <p>css样式</p>
    <pre v-highlightjs="shuangfeiyi_css"><code class="css"></code></pre>
  </div>
</template>

<script>
export default {
  name: 'CSS5',
  data () {
    return {
      shengbei_html:
      `<section class="wrapper">  
  <section class="col main">main</section> 
  <aside class="col left">left</aside>  
  <aside class="col right">right</aside>  
</section>  `,
      shengbei_css:
      `.wrapper {  
  padding: 0 150px 0 100px; 
  overflow:hidden;  
}  
.col {  
  position: relative;   
  float: left;  
}  
.main {  
  width: 100%;  
  height: 200px;  
  background:yellow;  
}  
.left {  
  width: 100px;   
  height: 200px;   
  background:red;  
}
.right {  
  width: 150px;   
  height: 200px;   
  background:red;  
}  
.left{ 
  margin-left: -100%;  
  left: -100px;  
}  
.right {  
  margin-left: -150px;   
  right: -150px;  
}`,
      shuangfeiyi_html:
      `<div class="main">
  <div class="middle">
    <div class="content">middle</div>
  </div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>`,
      shuangfeiyi_css:
      `*{
  margin:0;
  padding:0;
}
.middle{
  width:100%;
  height:500px;
  background-color: lightgreen;
  float:left;
}
.left,.right{
  height: 500px;
  float: left;
}
.left{
  width: 200px;
  background-color: lightcoral;
  margin-left:-100%;
}
.right{
  width: 300px;
  background-color: lightblue;
  margin-left: -300px;
}
.content{
  margin:0 300px 0 200px;
}`
    }
  },
  methods: {
    towShengbei () {
      this.$router.push('/CSS6_1')
    },
    towShuangfeiyi () {
      this.$router.push('/CSS6_2')
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
