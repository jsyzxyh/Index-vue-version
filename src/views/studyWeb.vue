<template>
  <div class="infomation">
    <h2 style="margin-bottom:20px;font-size:30px">学习资料</h2>
    <div class="searchBox">
      <el-input placeholder="请输入搜索内容" v-model="searchInput" clearable @keyup.enter.native="search" maxlength="50"></el-input>
      <el-button type="primary" @click="search">百度搜索</el-button>
    </div>
    <el-collapse class="web_collapse">
      <el-collapse-item title="Mysql" name="1">
        <a style="font-size:22px" v-for="item in mysqlWeb" :key="item.url" :href="item.url" target="_blank">{{ item.name }}</a>
      </el-collapse-item>
      <el-collapse-item title="Python" name="2">
        <a style="font-size:22px" v-for="item in pythonWeb" :key="item.url" :href="item.url" target="_blank">{{ item.name }}</a>
      </el-collapse-item>
      <el-collapse-item title="前端" name="3">
        <div class="front_end" v-for="(item) in frontPage" :key="item.url" @click="goToFrontPage(item.url)">{{ item.name }}</div>
      </el-collapse-item>
    </el-collapse>
    <el-button type="success" @click="backToWeb">返回</el-button>
  </div>
</template>

<script>
export default {
  name: 'studyWeb',
  data () {
    return {
      searchInput: '',
      mysqlWeb: [
        {
          name: '菜鸟教程Mysql',
          url: 'https://www.runoob.com/mysql/mysql-tutorial.html'
        },
        {
          name: '在线Mysql',
          url: 'http://sqlfiddle.com/'
        },
        {
          name: '视频:一天学会Mysql(6h 13min)',
          url: 'https://www.bilibili.com/video/av39807944?from=search&seid=32547216639200321'
        },
        {
          name: '50道Mysql练习题',
          url: 'https://zhuanlan.zhihu.com/p/70896731'
        }
      ],
      pythonWeb: [
        {
          name: '菜鸟教程Python',
          url: 'https://www.runoob.com/python/python-tutorial.html'
        },
        {
          name: '在线Python编程',
          url: 'https://c.runoob.com/compile/9'
        },
        {
          name: '视频:Python教学视频(33h 16min)',
          url: 'https://www.bilibili.com/video/av4050443?from=search&seid=11022403486699724073'
        },
        {
          name: '视频:Python数据结构与算法(17h 36min)',
          url: 'https://www.bilibili.com/video/av46256220?from=search&seid=13849238446421580504'
        },
        {
          name: '100天学会Python(Github)',
          url: 'https://github.com/jackfrued/Python-100-Days'
        }
      ],
      frontPage: [
        {
          name: 'HTML',
          url: '/FrontEnd/HTML/HTML1'
        },
        {
          name: 'CSS',
          url: '/FrontEnd/CSS/CSS1'
        },
        {
          name: 'Javascript',
          url: '/FrontEnd/Javascript/letConst'
        },
        {
          name: '网络基础',
          url: '/FrontEnd/Network/Network1'
        }
      ]
    }
  },
  methods: {
    search () {
      const url = `https://www.baidu.com/s?wd=${this.searchInput}`
      window.open(url)
    },
    backToWeb () {
      this.$router.push({
        path: '/campusRecuit'
      })
    },
    goToFrontPage (url) {
      this.$router.push({
        path: url
      })
    }
  }
}
</script>

<style lang="scss">
.infomation{
  position: absolute;
  width: 430px;
  left: 0;
  right: 0;
  font-size: 22px;
  margin: 50px auto 0;
  text-align: center;
  .searchBox{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    .el-button{
      margin-top: 0;
      font-size: 16px;
      margin-left: 10px;
    }
    .el-input__inner{
      font-size:16px
    }
  }
  a{
    display: block;
    margin-top: 20px;
    text-decoration: none;
  }
  a:hover{
    color: blue;
    text-decoration:underline
  }
  .el-button{
    margin-top: 20px;
    font-size: 18px;
  }
  .el-collapse{
    margin-bottom: 10px;
    .el-collapse-item__header{
      height: 55px;
      font-size: 20px;
    }
    .el-collapse-item__content{
      font-size: 22px;
       a{
        margin: 13px 0 0 0;
      }
      .front_end{
        margin-top: 10px;
        cursor: pointer;
      }
      .front_end:hover{
        color: blue;
        text-decoration:underline
      }
    }
  }
}
</style>
