<template>
  <div class="frontEnd">
    <el-container class="box">
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
          <el-backtop :bottom="50" :right="20">
            <div class="up">
              UP
            </div>
          </el-backtop>
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
.frontEnd{
  height: 100%;
  width:100%;
  .box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-container{
      width: 700px;
      .el-main{
        width: 90%;
        text-align: center;
        position:relative;
        padding: 0 10px;
        .frontEnd_konwledge{
          text-align: left;
          padding: 20px;
          p{
            font-size: 16px;
            margin: 15px 0;
          }
        }
        h2,h3{
          margin: 8px 0;
        }
        p{
          font-size: 15px
        }
        .return_btn{
          .el-button{
            position: relative;
            margin-top: 1%;
            left:30%;
            span{
              font-size: 16px;
            }
          }
        }
        .main{
          width: 75%;
          text-align: left;
          margin:0 auto 0 auto;
          h2,h3{
            line-height: 2.3rem;
          }
          p{
            line-height: 2rem;
            margin: 0.6rem 0;
          }
        }
        .up{
          height: 100%;
          width: 100%;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        }
        pre{
          border-radius: 6px;
          // border: .1em solid hsl(0, 0%, 33%);
          width: 95%;
          code{
            font-family: Consolas,"Courier New",Courier,FreeMono,monospace;
            border-radius: 6px;
          }
          .javascript.hljs{
            padding:10px 15px;
            line-height: 1.5em;
          }
        }
      }
    }
  }
  .el-container .box{
    height: 100%;
    border: 1px solid #eee;
    border-bottom:0px;
  }
  // .el-header {
  //   background-color: #B3C0D1;
  //   color: #333;
  //   line-height: 60px;
  // }
  .el-aside {
    color: #333;
  }
}
</style>
