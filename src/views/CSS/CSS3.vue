<template>
  <div class="float">
    <h2>三、css清除浮动</h2>
    <h3>3.1 浮动的产生</h3>
    <p>最外层的outer没有设置高度，此时当内层元素浮动后，就出现了一下影响：
    <p>（1）：背景不能显示 （2）：边框不能撑开 （3）：margin 设置值不能正确显示</p>
    <img :src="floatExample" alt="">
    <pre v-highlightjs="float1"><code class="html"></code></pre>
    <h3>3.2 清除浮动方法1，clear：both</h3>
    <p>添加空div，设置style: clear：both。效果如下：</p>
    <img :src="floatClear" alt="">
    <p>html</p>
    <pre v-highlightjs="floatSolution1Html"><code class="html"></code></pre>
    <p>css</p>
    <pre v-highlightjs="floatSolution1CSS"><code class="css"></code></pre>
    <p>优点：简单，代码少，浏览器兼容性好。</p>
    <p>缺点：需要添加大量无语义的html元素，代码不够优雅，后期不容易维护。</p>
    <h3>3.3 清除浮动方法2：父级元素设置overflow: auto</h3>
    <p>父级div定义 overflow: auto（父级div即div.outer）</p>
    <p>在添加overflow属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果。</p>
    <p>html</p>
    <pre v-highlightjs="floatSolution2Html"><code class="html"></code></pre>
    <p>css</p>
    <pre v-highlightjs="floatSolution2CSS"><code class="css"></code></pre>
    <h3>3.4 清除浮动方法3：父级元素使用:after 方法</h3>
    <p>在父级元素的最后，添加了一个:after伪元素，通过清除伪元素的浮动，达到撑起父元素高度的目的。该伪元素的display值为block，content值为''，即，它是一个不可见的块级元素</p>
    <p>html</p>
    <pre v-highlightjs="floatSolution3Html"><code class="html"></code></pre>
    <p>css</p>
    <pre v-highlightjs="floatSolution3CSS"><code class="css"></code></pre>
  </div>
</template>

<script>
import floatExample from '@/assets/images/css/浮动示例.png'
import floatClear from '@/assets/images/css/清除浮动1.png'
export default {
  name: 'CSS2',
  data () {
    return {
      floatExample,
      floatClear,
      float1:
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>清除浮动</title>
  <style>
    .outer {
      border: 1px solid #ccc;
      background: #fc9;
      color: #fff;
      margin: 20px auto;
      padding: 40px;
    }
    .div1 {
      width: 100px;
      height: 100px;
      background-color: red;
      float: left;
    }
    .div2 {
      width: 100px;
      height: 100px;
      background-color: blue;
      float: left;
    }
    .div3 {
      width: 100px;
      height: 100px;
      background-color: sienna;
      float: left;
    }
    .bottom {
      width: 200px;
      height: 200px;
      background-color: yellow;
    }
  </style>
</head>
<body>
  <div class="outer">
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div3">3</div>
  </div>
  <div class=bottom>bottom</div>
</body>
</html>`,
      floatSolution1Html:
    `<div class="outer">
  <div class="div1">1</div>
  <div class="div2">2</div>
  <div class="div3">3</div>
  <div class="clear"></div>
</div>`,
      floatSolution1CSS:
  `.clear {
  clear:both; 
  height: 0; 
  line-height: 0; 
  font-size: 0
}`,
      floatSolution2Html:
    `<div class="outer over-flow">
  <div class="div1">1</div>
  <div class="div2">2</div>
  <div class="div3">3</div>
</div>`,
      floatSolution2CSS:
  `.over-flow{
    overflow: auto; zoom: 1; /* zoom: 1; 是在处理兼容性问题 */
}`,
      floatSolution3Html:
    `<div class="outer">
  <div class="div1">1</div>
  <div class="div2">2</div>
  <div class="div3">3</div>
</div>`,
      floatSolution3CSS:
  `.outer {
  zoom: 1;
}
.outer:after {
  clear: both;
  content: '';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}`
    }
  }
}
</script>
