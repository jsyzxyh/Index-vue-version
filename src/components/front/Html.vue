<template>
  <div>
    <div class="html_index">
      <p>超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。</p>
      <p>HTML是网页的骨架，决定了网页的结构。</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Html',
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
.html_index{
  text-align: left;
  font-size: 20px;
  width: 900px;
  p{
    margin: 15px 0;
  }
}
</style>
