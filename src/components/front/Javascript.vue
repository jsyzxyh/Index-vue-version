<template>
  <div>
    <div class="js_index">
      <p>Javascript负责网页的逻辑交互</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Javascript',
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
.js_index{
  text-align: left;
  font-size: 20px;
  p{
    margin: 15px 0;
  }
}
</style>
