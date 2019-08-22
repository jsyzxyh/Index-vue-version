<template>
  <div class="tow_column">
    <h2>五、两栏布局</h2>
    <h3>5.1 左边固定，右边自适应</h3>
    <p>使用float布局，右边的div设置margin-left</p>
    <el-button type="success" @click="towColumnLeft">DEMO</el-button>
    <p>HTML排版</p>
    <pre v-highlightjs="left_html"><code class="html"></code></pre>
    <p>css样式</p>
    <pre v-highlightjs="left_css"><code class="css"></code></pre>
    <h3>5.2 右边固定，左边自适应</h3>
    <p>使用float布局，左边的div设置margin-right</p>
    <p>注意div顺序</p>
    <el-button type="success" @click="towColumnRight">DEMO</el-button>
    <p>HTML排版</p>
    <pre v-highlightjs="right_html"><code class="html"></code></pre>
    <p>css样式</p>
    <pre v-highlightjs="right_css"><code class="css"></code></pre>
  </div>
</template>

<script>
export default {
  name: 'CSS5',
  data () {
    return {
      left_html:
      `<body>
  <div class="left">left</div>
  <div class="right">right</div>
</body>`,
      left_css:
      `body,div {
  padding: 0;
  margin: 0;
}
.left,.right {
  height: 200px;
}
.left {
  float: left;
  width: 200px;
  background-color: skyblue;
}
.right {
  margin-left: 200px;
  background-color: greenyellow;
}`,
      right_html:
      `<body>
  <div class="right">right</div>
  <div class="left">left</div>
</body>`,
      right_css:
      `body,div {
  padding: 0;
  margin: 0;
}
.left,.right {
  height: 200px;
}
.left {
  margin-right: 200px;
  background-color: skyblue;
}
.right {
  float: right;
  width: 200px;
  background-color: greenyellow;
}`
    }
  },
  methods: {
    towColumnLeft () {
      this.$router.push('/CSS5_1')
    },
    towColumnRight () {
      this.$router.push('/CSS5_2')
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
