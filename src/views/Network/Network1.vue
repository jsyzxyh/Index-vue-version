<template>
  <div class="storage">
    <h2>一、web存储</h2>
    <h3>1.1 localStorage</h3>
    <p>localStorage 是 HTML5 标准中新加入的技术，它并不是什么划时代的新东西。早在 IE 6 时代，就有一个叫 userData 的东西用于本地存储，而当时考虑到浏览器兼容性，更通用的方案是使用 Flash。而如今，localStorage 被大多数浏览器所支持，且没有过期时间。</p>
    <h3>1.2 sessionStorage</h3>
    <p>sessionStorage 与 localStorage 的接口类似，但保存数据的生命周期与 localStorage 不同。做过后端开发的同学应该知道 Session 这个词的意思，直译过来是“会话”。而 sessionStorage 是一个前端的概念，它只是可以将一部分数据在当前会话中保存下来，刷新页面数据依旧存在。但当页面关闭后，sessionStorage 中的数据就会被清空。</p>
    <h3>1.3 cookie</h3>
    <p>Cookie 是小甜饼的意思。顾名思义，cookie 确实非常小，它的大小限制为4KB左右。它的主要用途有保存登录信息，比如你登录某个网站市场可以看到“记住密码”，这通常就是通过在 Cookie 中存入一段辨别用户身份的数据来实现的。</p>
    <h3>1.4 三者异同比较</h3>
    <el-table
    :data="webStorage"
    center
    border
    style="width: 100%">
      <el-table-column
        prop="feature"
        align="center"
        label="特性"
        width="120">
      </el-table-column>
      <el-table-column
        prop="cookie"
        align="center"
        label="cookie">
      </el-table-column>
      <el-table-column
        prop="localStorage"
        align="center"
        label="localStorage"
        width="155">
      </el-table-column>
      <el-table-column
        prop="sessionStorage"
        align="center"
        label="sessionStorage"
        width="155">
      </el-table-column>
      <el-table-column
        prop="indexDB"
        align="center"
        label="indexDB"
        width="155">
      </el-table-column>
     </el-table>
  </div>
</template>

<script>
export default {
  name: 'Network1',
  data () {
    return {
      webStorage: [
        {
          feature: '数据生命周期',
          cookie: '一般由服务器生成，可以设置过期时间',
          localStorage: '除非被清理，否则一直存在',
          sessionStorage: '页面关闭就清理',
          indexDB: '除非被清理，否则一直存在'
        },
        {
          feature: '数据存储大小',
          cookie: '4K',
          localStorage: '5M',
          sessionStorage: '5M',
          indexDB: '无限'
        },
        {
          feature: '与服务端通信',
          cookie: '每次都会携带在 header 中，对于请求性能影响',
          localStorage: '不参与',
          sessionStorage: '不参与',
          indexDB: '不参与'
        }
      ]
    }
  }
}
</script>
