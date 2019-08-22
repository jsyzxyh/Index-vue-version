<template>
  <div class="shuangfeiyi">
    <div class="main">
      <div class="middle">
        <div class="content">middle</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
    <el-button class="back" @click="back">返回</el-button>
  </div>
</template>

<script>
export default {
  name: 'shuangfeiyi',
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
.shuangfeiyi{
  div {
    padding: 0;
    margin: 0;
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
  }
  .el-button{
    margin-top:50px
  }
}

</style>
