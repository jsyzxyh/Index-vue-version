<template>
  <div class="shengbei">
    <section class="wrapper">
      <section class="col main">main</section>
      <aside class="col left">left</aside>
      <aside class="col right">right</aside>
    </section>
    <el-button class="back" @click="back">返回</el-button>
  </div>
</template>

<script>
export default {
  name: 'shengbei',
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.push({path: '/FrontEnd/CSS/CSS6'})
    }
  }
}
</script>

<style lang="scss">
.shengbei{
  div {
    padding: 0;
    margin: 0;
  }
  .wrapper {
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
  }
  .el-button{
    margin-top:50px
  }
}

</style>
