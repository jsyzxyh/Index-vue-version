<template>
  <div>
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

</style>
