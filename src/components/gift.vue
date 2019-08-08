<template>
  <div id="gift">
    <div id="blink" style="font-size:22px;padding-top:10px;">
      <h3>情人节快乐</h3>
      <h3>LOVE YOU</h3>
    </div>
    <div class="flower">
      <transition name = "flower">
        <img v-if="show" class="anim_fade_image" :src="flower" alt="">
      </transition>
    </div>
    <el-button @click="backToHome">返回主页</el-button>
  </div>
</template>

<script>
import flower from '@/assets/images/rose2.jpg'
export default {
  name: 'gift',
  data () {
    return {
      flower,
      show: false,
      timer: null
    }
  },
  mounted () {
    this.show = true
    const _this = this
    this.timer = setInterval(_this.changeColor, 200)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    changeColor () {
      let color = 'FFC|#DE990A|#F93|#FC0|#F96|#CC6'
      color = color.split('|')
      document.getElementById('blink').style.color = color[parseInt(Math.random() * color.length)]
    },
    backToHome () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss">
#gift {
  text-align: center;
  margin-top: 160px;
  font-size:25px;
  .flower{
    padding-top: 30px;
  }
  .flower-enter{
    opacity: 0;
  }
  .flower-leave-to{
    opacity: 1;
  }
  .flower-enter-active,
  .flower-leave-active{
    transition: all 3s ease;
  }
  .el-button{
    margin: 20px auto;
  }
}
</style>
