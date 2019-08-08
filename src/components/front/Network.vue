<template>
  <div>
    network
    <el-button type="success" @click="backToLast">返回</el-button>
  </div>
</template>

<script>
export default {
  name: 'Network',
  data () {
    return {}
  },
  methods: {
    backToLast () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">

</style>
