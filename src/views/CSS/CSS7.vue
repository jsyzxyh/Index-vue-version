<template>
  <div class="inline-block-bug">
    <h2>七、inline-block间隙</h2>
    <h3>7.1 设置inline-block的bug</h3>
    <div class="div1">
      <div class="in_bl">111</div>
      <div class="in_bl">222</div>
      <div class="in_bl">333</div>
      <div class="in_bl">444</div>
    </div>
    <p>设置display: inline-block的时候会出现间隙，如上所示，代码如下。</p>
    <p></p>
    <p>html排版</p>
    <pre v-highlightjs="html1"><code class="html"></code></pre>
    <p>css样式</p>
    <pre v-highlightjs="css1"><code class="css"></code></pre>
    <h3>7.1 移除空格</h3>
    <p>元素间留白间距出现的原因就是标签段之间的空格，因此，去掉HTML中的空格，自然间距就没有了。</p>
    <div class="div1">
      <div class="in_bl">
        111</div><div class="in_bl">
        222</div><div class="in_bl">
        333</div><div class="in_bl">
        444</div>
    </div>
    <p>HTML排版</p>
    <pre v-highlightjs="html2"><code class="html"></code></pre>
    <p>或者借助注释</p>
    <div class="div1">
      <div class="in_bl">111</div><!--
      --><div class="in_bl">222</div><!--
      --><div class="in_bl">333</div><!--
      --><div class="in_bl">444</div>
    </div>
    <pre v-highlightjs="html3"><code class="html"></code></pre>
    <h3>7.2 使用margin负值</h3>
    <p>margin负值的大小与上下文的字体和文字大小相关</p>
    <p>例如，对于12像素大小的上下文，Arial字体的margin负值为-3像素，Tahoma和Verdana就是-4像素，而Geneva为-6像素。</p>
    <p>由于外部环境的不确定性，以及最后一个元素多出的父margin值等问题，这个方法不适合大规模使用。</p>
    <div class="div2">
      <div class="in_bl">111</div>
      <div class="in_bl">222</div>
      <div class="in_bl">333</div>
      <div class="in_bl">444</div>
    </div>
    <pre v-highlightjs="html4"><code class="html"></code></pre>
    <pre v-highlightjs="css2"><code class="css"></code></pre>
    <h3>7.3 使用font-size:0</h3>
    <p>在父级元素上设置font-size为0，在元素上设置实际需要的font-size即可</p>
    <div class="div3">
      <div class="in_bl">111</div>
      <div class="in_bl">222</div>
      <div class="in_bl">333</div>
      <div class="in_bl">444</div>
    </div>
    <pre v-highlightjs="html5"><code class="html"></code></pre>
    <pre v-highlightjs="css3"><code class="css"></code></pre>
    <h3>7.4 使用letter-spacing</h3>
    <p>给父级元素设置一个较大letter-spacing负值，在元素上将letter-spacing归0。</p>
    <div class="div4">
      <div class="in_bl">111</div>
      <div class="in_bl">222</div>
      <div class="in_bl">333</div>
      <div class="in_bl">444</div>
    </div>
    <pre v-highlightjs="html6"><code class="html"></code></pre>
    <pre v-highlightjs="css4"><code class="css"></code></pre>
  </div>
</template>

<script>
export default {
  name: 'CSS7',
  data () {
    return {
      html1:
      `<div class="div1">
  <div class="in_bl">111</div>
  <div class="in_bl">222</div>
  <div class="in_bl">333</div>
  <div class="in_bl">444</div>
</div>`,
      css1:
      `.in_bl{
  display: inline-block;
  border: 1px solid black
}`,
      html2:
      `<div class="div1">
  <div class="in_bl">
    111</div><div class="in_bl">
    222</div><div class="in_bl">
    333</div><div class="in_bl">
    444</div>
</div>`,
      html3:
      `<div class="div1">
  <div class="in_bl">111</div><!--
  --><div class="in_bl">222</div><!--
  --><div class="in_bl">333</div><!--
  --><div class="in_bl">444</div>
</div>`,
      html4:
      `<div class="div2">
  <div class="in_bl">111</div>
  <div class="in_bl">222</div>
  <div class="in_bl">333</div>
  <div class="in_bl">444</div>
</div>`,
      css2:
      `.div2 .in_bl {
  display: inline-block;
  margin-right: -3px;
}`,
      html5:
    `<div class="div3">
  <div class="in_bl">111</div>
  <div class="in_bl">222</div>
  <div class="in_bl">333</div>
  <div class="in_bl">444</div>
</div>`,
      css3:
    `.div3{
  font-size: 0;
}
.div3 .in_bl{
  font-size: 16px;
}`,
      html6:
      `<div class="div4">
  <div class="in_bl">111</div>
  <div class="in_bl">222</div>
  <div class="in_bl">333</div>
  <div class="in_bl">444</div>
</div>`,
      css4:
      `.div4{
  letter-spacing: -20px;
}
.div4 .in_bl{
  display: inline-block;
  letter-spacing: 0;
}`
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.inline-block-bug{
  .in_bl{
    display: inline-block;
    border: 1px solid black
  }
  .div2 .in_bl {
    display: inline-block;
    margin-right: -5px;
  }
  .div3{
    font-size: 0;
    .in_bl{
      font-size: 16px;
    }
  }
  .div4{
   letter-spacing: -20px;
    .in_bl{
      display: inline-block;
      letter-spacing: 0;
    }
  }
}
</style>
