<template>
  <div class="website">
      <h2>校招链接</h2>
      <div class="searchBox">
        <el-input placeholder="请输入搜索内容" v-model="searchInput" clearable @keyup.enter.native="search" maxlength="50" style="width: 300px  "></el-input>
        <el-button type="primary" @click="search">百度搜索</el-button>
      </div>
      <div class="recruitWeb">
        <a style="font-size:22px" v-for="(item) in jobWeb" :key="item.url" :href="item.url" target="_blank">{{ item.name }}</a>
        <el-button type="success" @click="showInfo">学习资料</el-button>
        <el-button @click="backToHome">返回主页</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'campusRecuit',
  data () {
    return {
      searchInput: '',
      jobWeb: [
        {
          name: '阿里巴巴校园招聘',
          url: 'https://campus.alibaba.com/positionList.htm'
        },
        {
          name: '美团校园招聘',
          url: 'https://campus.meituan.com/jobs?jobType=1'
        },
        {
          name: 'Bilibili校园招聘',
          url: 'https://app.mokahr.com/campus_apply/bilibili01/6205#/?anchorName=default_joblist&sourceToken=&_k=smvfpv'
        },
        {
          name: '腾讯校园招聘',
          url: 'https://join.qq.com/post.php?post=104&pid=1'
        },
        {
          name: '携程校园招聘',
          url: 'http://recruitment.ctrip.com/#/job-selector'
        },
        {
          name: '百度校园招聘',
          url: 'https://talent.baidu.com/external/baidu/campus.html#/jobList/0-1227-10002'
        },
        {
          name: '京东校园招聘',
          url: 'http://campus.jd.com/web/job/job_index?t=6'
        },
        {
          name: '拼多多校园招聘',
          url: 'https://www.pinduoduo.com/home/campus/'
        },
        {
          name: '字节跳动校园招聘',
          url: 'https://job.bytedance.com/campus/position'
        },
        {
          name: '流利说校园招聘',
          url: 'https://app.mokahr.com/campus_apply/liulishuo/2402#/jobs?zhineng=10814&_k=fkebc1'
        }
      ]
    }
  },
  methods: {
    search () {
      const url = `https://www.baidu.com/s?wd=${this.searchInput}`
      window.open(url)
    },
    showInfo () {
      this.$router.push({
        path: '/studyWeb'
      })
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
.website{
  position: absolute;
  width: 500px;
  left: 0;
  right: 0;
  font-size: 22px;
  margin: 50px auto 0 auto;
  text-align: center;
  h2{
    font-size:30px;
    margin-bottom: 20px;
  }
  .searchBox .el-button{
    font-size:16px;
  }
  .searchBox .el-input__inner{
    font-size:16px
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
  .recruitWeb .el-button{
    margin-top: 25px;
    font-size: 18px;
  }
}
</style>
