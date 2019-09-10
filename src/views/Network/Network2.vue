<template>
  <div class="security">
    <h2>一、常见攻击与防御</h2>
    <h3>1.1 XSS攻击与防御</h3>
    <p>跨网站指令码（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程式的安全漏洞攻击，是代码注入的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。</p>
    <h3>1.2 CORS攻击与防御</h3>
    <p>跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。与跨网站指令码（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。</p>
    <p>简单点说，CSRF 就是利用用户的登录态发起恶意请求</p>
  </div>
</template>

<script>
export default {
  name: 'Network2',
  data () {
    return {}
  }
}
</script>
