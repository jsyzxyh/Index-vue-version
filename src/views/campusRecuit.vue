<template>
  <div class="website">
      <h2>校招链接</h2>
      <div class="searchBox">
        <el-input placeholder="请输入搜索内容" v-model="searchInput" clearable @keyup.enter.native="search" maxlength="50" style="width: 300px  "></el-input>
        <el-button type="primary" @click="search">百度搜索</el-button>
      </div>
      <div class="recruitWeb">
        <div class="url" v-for="(item) in jobWeb" :key="item.url">
          <a style="font-size:22px" :href="item.url" target="_blank">{{ item.name }}</a>
        </div>
      </div>
      <div class="btns">
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
          name: 'bilibili校园招聘',
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
          name: '拼多多校园招聘',
          url: 'https://www.pinduoduo.com/home/campus/'
        },
        {
          name: '字节跳动校园招聘',
          url: 'https://job.bytedance.com/campus/position'
        },
        {
          name: '京东校园招聘',
          url: 'http://campus.jd.com/web/job/job_index?t=6&dicCode=jfx04001&dicName=%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E7%B1%BB'
        },
        {
          name: '美团点评校园招聘',
          url: 'https://campus.meituan.com/jobs?interviewCity=34&jobFamily=1&jobType=1&pageNo=1&workCity=001009'
        },
        {
          name: '爱奇艺校园招聘',
          url: 'http://zhaopin.iqiyi.com/job-school.html'
        },
        {
          name: '小红书校园招聘',
          url: 'https://campus.xiaohongshu.com/jobs?type=1'
        },
        {
          name: '流利说校园招聘',
          url: 'https://app.mokahr.com/campus_apply/liulishuo/2402#/jobs?zhineng=10814&_k=fkebc1'
        },
        {
          name: '360校园招聘',
          url: 'http://campus.chinahr.com/views/2020-qihu360/job_intern.html'
        },
        {
          name: 'IBM校园招聘',
          url: 'https://campus.liepin.com/xycompany/v170863/'
        },
        {
          name: '寒武纪校园招聘',
          url: 'https://app.mokahr.com/campus_apply/cambricon/1112#/jobs?zhineng=18576&location=%E4%B8%8A%E6%B5%B7%E5%B8%82&page=1&_k=ai5tvw'
        },
        {
          name: '云从科技校园招聘',
          url: 'http://campus.cloudwalk.cn/#/jobs?zhineng=17641&location=%E4%B8%8A%E6%B5%B7%E5%B8%82&page=1&keyword=&_k=oua0w9'
        },
        {
          name: '中国移动咪咕校园招聘',
          url: 'http://www.migu.cn/about/join/graduate/job/0/2/0.html'
        },
        {
          name: '第三十二研究所校园招聘',
          url: 'https://cetc.zhiye.com/campus?r=&p=1^1&c=3100&d=&k=#jlt'
        },
        {
          name: '商汤校园招聘',
          url: 'http://hr.sensetime.com/position/campus_search?channel=1&keyword=&brand=55&address=%E4%B8%8A%E6%B5%B7&occupation=145'
        },
        {
          name: '东方财富校园招聘',
          url: 'https://eastmoney.zhiye.com/campus?p=1^6#jlt'
        },
        {
          name: '海康威视校园招聘',
          url: 'http://campus.hikvision.com/alljob?r=&p=&c=3100&d=&k=#jlt'
        },
        {
          name: '声网校园招聘',
          url: 'https://app.mokahr.com/campus_apply/agora/6335#/jobs?zhineng=16869&location=%E4%B8%8A%E6%B5%B7%E5%B8%82&page=1&commitment=%E5%85%A8%E8%81%8C&_k=hviafu'
        },
        {
          name: '贝壳找房校园招聘',
          url: 'http://campus.ke.com/alljob?r=&p=&c=3100&d=&k=#jlt'
        },
        {
          name: 'VMware校园招聘',
          url: 'https://careers.vmware.com/search-jobs/Shanghai%2C%20CN/1567/4/1814991-1796231-1796236/31x22222/121x458061/50/2'
        },
        {
          name: '58同城校园招聘',
          url: 'http://campus.58.com/jobs.html'
        },
        {
          name: '上交所校园招聘',
          url: 'https://campus.liepin.com/xycompany/170835/'
        },
        {
          name: '广联达校园招聘',
          url: 'http://campus.glodon.com/#/jobs?location=%E4%B8%8A%E6%B5%B7%E5%B8%82&page=1&_k=ufybe4'
        },
        {
          name: '虎扑校园招聘',
          url: 'https://campus.liepin.com/xycompany/171003/'
        },
        {
          name: '米哈游校园招聘',
          url: 'https://campus.mihoyo.com/#/job/3'
        },
        {
          name: '西部数据校园招聘',
          url: 'http://campus.51job.com/wdc/jobs.html'
        },
        {
          name: '上海电气校园招聘',
          url: 'http://www.hotjob.cn/wt/SEC/web/index/campus'
        },
        {
          name: '中兴校园招聘',
          url: 'http://job.zte.com.cn/recruitment-list'
        },
        {
          name: '中国电信招聘',
          url: 'http://campus.51job.com/chinatelecom/campus.html'
        },
        {
          name: '平安银行校园招聘',
          url: 'http://campus.pingan.com/freshGraduates?keyWord=%E5%89%8D%E7%AB%AF'
        },
        {
          name: '中国农业银行校园招聘',
          url: 'https://career.abchina.com/build/index.html#/99'
        },
        {
          name: '浦发银行校园招聘',
          url: 'http://spdb.zhaopin.com/gsjj.html#'
        },
        {
          name: '招商银行校园招聘',
          url: 'http://career.cloud.cmbchina.com/index.html#jobDetail?id=dcbceba1-b1bb-4e7b-b67d-f3ae34561d79&returnUrl=#jobList?id=96574F8D-C7ED-4772-AE7C-BAC896D190C1'
        },
        {
          name: '交通银行校园招聘',
          url: 'https://job.bankcomm.com/queryPosition.do'
        },
        {
          name: '上海银行校园招聘',
          url: 'https://bosc.zhiye.com/campus?k=&d=&c=&p=,3^10&PageIndex=1'
        },
        {
          name: '中国人寿校园招聘',
          url: 'http://www.chinalife.com.cn/chinalife/zhaopin/'
        }
      ]
    }
  },
  methods: {
    search () {
      const url = `https://www.baidu.com/s?wd=${this.searcchInput}`
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
  width: 100%;
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
  .recruitWeb {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 150px;
    .url{
      width: 350px;
    }
  }
  .btns{
    .el-button{
      margin-top: 25px;
      font-size: 18px;
      margin-bottom: 100px;
    }
  }
}
</style>
