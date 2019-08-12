<template>
  <div>
    <div class="css_index">
      <p>CSS 指层叠样式表 (Cascading Style Sheets)</p>
      <p>CSS 可以修饰网页，使得网页更美观</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Css',
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
.css_index{
  text-align: left;
  font-size: 20px;
  p{
    margin: 15px 0;
  }
}
</style>
