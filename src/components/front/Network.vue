<template>
  <div>
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

</style>
