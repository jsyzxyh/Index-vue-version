<template>
  <div>
    <div class="network_index">
      <p>网络基础</p>
    </div>
    <router-view></router-view>
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
.network_index{
  text-align: left;
  font-size: 20px;
  p{
    margin: 15px 0;
  }
}
</style>
