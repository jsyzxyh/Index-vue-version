<template>
  <div class="security">
    <h2>一、常见攻击与防御</h2>
    <h3>1.1 XSS攻击</h3>
    <p>跨网站指令码（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程式的安全漏洞攻击，是代码注入的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。</p>
    <h3>1.2 XSS防御</h3>
    <p>最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义</p>
    <pre v-highlightjs="XSS1"><code class="javascript"></code></pre>
    <p>通过转义可以将攻击代码&lt;script&gt;alert(1)&lt;&#x2F;script&gt;变成</p>
    <pre v-highlightjs="XSS2"><code class="javascript"></code></pre>
    <h3>1.3 CSRF攻击</h3>
    <p>跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。与跨网站指令码（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。</p>
    <p>简单点说，CSRF 就是利用用户的登录态发起恶意请求</p>
    <h3>1.4 CSRF防御</h3>
    <p>防范 CSRF 可以遵循以下几种规则：</p>
    <p>Get 请求不对数据进行修改</p>
    <p>不让第三方网站访问到用户 Cookie</p>
    <p>阻止第三方网站请求接口</p>
    <p>请求时附带验证信息，比如验证码或者 token</p>
  </div>
</template>

<script>
export default {
  name: 'Network2',
  data () {
    return {
      XSS1:
      `function escape(str) {
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/\//g, '&#x2F;')
  return str
}`,
      XSS2: `&lt;script&gt;alert(1)&lt;&#x2F;script&gt;`
    }
  }
}
</script>
