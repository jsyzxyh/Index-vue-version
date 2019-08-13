<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <sidebar/>
      <el-container>
        <el-main>
          <div class="return_btn" v-if="!indexShow">
            <el-button @click="back">返回</el-button>
          </div>
          <div class="frontEnd_konwledge" v-if="indexShow">
            <h2>知识梳理</h2>
            <p>前端重要知识点整理</p>
            <p>主要来源：自己总结以及网络</p>
          </div>
          <router-view class="main"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入侧边栏组件
import sidebar from '@/components/subcomponents/sidebar.vue'
export default {
  name: 'FrontEnd',
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.push({
        path: '/studyWeb'
      })
    }
  },
  computed: {
    indexShow: function () {
      if (this.$route.path === '/FrontEnd') {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    sidebar
  }
}
</script>

<style lang="scss">
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.frontEnd_konwledge{
  text-align: left;
  padding: 20px;
  p{
    font-size: 16px;
    margin: 15px 0;
  }
}
.el-main{
  width: 900px;
  position:relative;
  .return_btn{
    .el-button{
      position: relative;
      left:80px;
      span{
        font-size: 16px;
      }
    }
  }

  .main{
    width: 900px;
    margin-left: 30px;
  }
}
pre{
  border-radius: 6px;
  border: .1em solid hsl(0, 0%, 33%);
  code{
    font-family: Consolas,"Courier New",Courier,FreeMono,monospace;
  }
  .javascript.hljs{
    padding:10px 15px;
    line-height: 1.5em;
  }
}
h2,h3{
  margin: 8px 0;
}
p{
  font-size: 15px
}
</style>
