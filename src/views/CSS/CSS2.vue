<template>
  <div class="center">
    <h2>二、css实现垂直水平居中</h2>
    <p>效果预览</p>
    <div></div>
    <img :src="center" alt="">
    <h3>2.1 flex布局</h3>
    <p>通过flex布局实现垂直水平居中</p>
    <pre v-highlightjs="flex"><code class="css"></code></pre>
    <h3>2.2 position布局</h3>
    <p>通过position布局实现垂直水平居中</p>
    <p>子元素top,right,bottom,left都设置为0，margin设置为auto</p>
    <pre v-highlightjs="position1"><code class="css"></code></pre>
    <p>已知子元素宽高情况下，left,top设置为50%，margin-top设置为height的一半，margin-left设置为width的一半</p>
    <pre v-highlightjs="position2"><code class="css"></code></pre>
    <h3>2.3 table布局</h3>
    <p>使用table布局，display: table-cell;</p>
    <pre v-highlightjs="table"><code class="css"></code></pre>
  </div>
</template>

<script>
import center from '@/assets/images/css/垂直居中.png'
export default {
  name: 'CSS2',
  data () {
    return {
      center,
      flex:
      `.container{
  width: 500px;
  height: 300px;
  border: 1px solid black;
  display: flex;  /*flex布局*/
  justify-content: center;  /*水平轴对齐方式*/
  align-items: center;  /*交叉轴对齐方式*/
}
.item{
  width:200px;
  height:100px;
  background-color: red;
  border: 1px solid black;
}`,
      position1:
      `.container{
  width: 500px;
  height: 300px;
  border: 1px solid black;
  position: relative;
}
.item{
  position:absolute;
  top: 0;
  bottom: 0;
  left:0;
  right: 0;
  margin: auto;
  width:200px;
  height:100px;
  background-color: red;
  border: 1px solid black;
}`,
      position2:
      `.container{
  width: 500px;
  height: 300px;
  border: 1px solid black;
  position: relative
}
.item{
  width:200px;
  height:100px;
  position:absolute;
  left: 50%;
  top: 50%;
  margin: -50px 0 0 -100px;
  background-color: red;
  border: 1px solid black;
}`,
      table:
      `.container{
  width: 500px;
  height: 300px;
  border: 1px solid black;
  display: table-cell;
  text-align: center; /*水平居中*/
  vertical-align: middle; /*垂直居中*/
}
.item{
  width:200px;
  height:100px;
  display: inline-block; /*防止块级元素宽度独占一行，内联元素可不设置*/
  background-color: red;
  border: 1px solid black;
}`
    }
  }
}
</script>
