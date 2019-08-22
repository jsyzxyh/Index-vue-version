<template>
  <div class="tow_column_right">
    <div class="right">右边固定</div>
    <div class="left">左边自适应</div>
    <el-button class="back" @click="back">返回</el-button>
  </div>
</template>

<script>
export default {
  name: 'CSS5_2',
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.push({path: '/FrontEnd/CSS/CSS5'})
    }
  }
}
</script>

<style lang="scss">
.tow_column_right{
  div {
    padding: 0;
    margin: 0;
  }
  .left,.right {
    height: 500px;
  }
  .left {
    margin-right: 200px;
    background-color: skyblue;
  }
  .right {
    float: right;
    width: 200px;
    background-color: greenyellow;
  }
  .back{
    margin-top: 50px;
  }
}

</style>
