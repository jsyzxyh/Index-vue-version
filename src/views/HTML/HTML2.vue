<template>
  <div class="blockInline">
    <h2>二、块级元素和行级元素</h2>
    <h3>2.1 两者区别</h3>
    <p>区别1：行内元素会在一条直线上排列（默认宽度只与内容有关），都是同一行的，水平方向排列。</p>
    <p>块级元素各占据一行（默认宽度是它本身父容器的100%（和父元素的宽度一致），与内容无关），垂直方向排列。块级元素从新行开始，结束接着一个断行。</p>
    <p>区别2：块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素，只能包含文本或者其它行内元素。</p>
    <p>区别3：行内元素与块级元素属性的不同，主要是盒模型属性上：行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效</p>
    <h3>2.2 块级元素</h3>
    <p>主要包括：</p>
    <p>&lt;address&gt;、&lt;caption&gt;、&lt;dd&gt;、&lt;dl&gt;、&lt;dt&gt;、&lt;div&gt;、&lt;form&gt;、&lt;h1-6&gt;</p>
    <p>&lt;hr&gt;、&lt;li&gt;、&lt;ol&gt;、&lt;ul&gt;、&lt;p&gt;、&lt;pre&gt;、&lt;table&gt;、&lt;tbody&gt;</p>
    <p>&lt;td&gt;、&lt;tfoot&gt;、&lt;th&gt;、&lt;thead&gt;、&lt;tr&gt;</p>
    <h3>2.3 行级元素</h3>
    <p>主要包括：</p>
    <p>&lt;a&gt;、&lt;attr&gt;、&lt;acronym&gt;、&lt;b&gt;、&lt;big&gt;、&lt;br&gt;、&lt;code&gt;、&lt;em&gt;</p>
    <p>&lt;i&gt;、&lt;img&gt;、&lt;input&gt;、&lt;label&gt;、&lt;kbd&gt;、&lt;select&gt;、&lt;small&gt;、&lt;span&gt;</p>
    <p>&lt;strong&gt;、&lt;sub&gt;、&lt;sup&gt;、&lt;textarea&gt;</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'HTML2',
  data () {
    return {
    }
  }
}
</script>
