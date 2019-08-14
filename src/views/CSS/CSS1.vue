<template>
  <div class="selector">
    <h2>一、css选择器</h2>
    <h3>1.1 css选择器</h3>
    <el-table
      :data="cssData"
      border
      style="width: 100%">
      <el-table-column
        prop="selector"
        label="选择器"
        width="180">
      </el-table-column>
      <el-table-column
        prop="example"
        label="示例"
        width="180">
      </el-table-column>
      <el-table-column
        prop="explain"
        label="实例说明">
      </el-table-column>
    </el-table>
    <h3>1.2 选择器优先级比较</h3>
    <p>!important 最高</p>
    <p>行内样式 +1000</p>
    <p>id选择器 +100</p>
    <p>类or伪类选择器 +10</p>
    <p>元素or伪元素选择器 +1</p>
    <p>通配符选择器 +0</p>
  </div>
</template>

<script>
export default {
  name: 'CSS1',
  data () {
    return {
      cssData: [
        {
          selector: '.class',
          example: '.intro',
          explain: '选择所有class="intro"的元素'
        },
        {
          selector: '#id',
          example: '#firstname',
          explain: '选择所有id="firstname"的元素'
        },
        {
          selector: '*',
          example: '*',
          explain: '选择所有元素'
        },
        {
          selector: 'element',
          example: 'p',
          explain: '选择所有<p>元素'
        },
        {
          selector: 'element,element',
          example: 'div,p',
          explain: '选择所有<div>元素和<p>元素'
        },
        {
          selector: 'element element',
          example: 'div p',
          explain: '选择<div>元素内的所有<p>元素'
        },
        {
          selector: 'element>element',
          example: 'div>p',
          explain: '选择所有父级是 <div> 元素的 <p> 元素'
        },
        {
          selector: 'element+element',
          example: 'div+p',
          explain: '选择所有紧接着<div>元素之后的<p>元素'
        },
        {
          selector: '[attribute]',
          example: '[target]',
          explain: '选择所有带有target属性元素'
        },
        {
          selector: '[attribute=value]',
          example: '[target=-blank]',
          explain: '选择所有使用target="-blank"的元素'
        },
        {
          selector: '[attribute~=value]',
          example: '[title~=flower]',
          explain: '选择标题属性包含单词"flower"的所有元素'
        },
        {
          selector: '[attribute|=language]',
          example: '[lang|=en]',
          explain: '选择 lang 属性以 en 为开头的所有元素'
        },
        {
          selector: ':link',
          example: 'a:link',
          explain: '选择所有未访问链接'
        },
        {
          selector: ':visited',
          example: 'a:visited',
          explain: '选择所有访问过的链接'
        },
        {
          selector: ':active',
          example: 'a:active',
          explain: '选择活动链接'
        },
        {
          selector: ':hover',
          example: 'a:hover',
          explain: '选择鼠标在链接上面时'
        },
        {
          selector: ':focus',
          example: 'input:focus',
          explain: '选择具有焦点的输入元素'
        },
        {
          selector: ':first-letter',
          example: 'p:first-letter',
          explain: '选择每一个<p>元素的第一个字母'
        },
        {
          selector: ':first-line',
          example: 'p:first-line',
          explain: '选择每一个<p>元素的第一行'
        },
        {
          selector: ':first-child',
          example: 'p:first-child',
          explain: '指定只有当<p>元素是其父级的第一个子级的样式'
        },
        {
          selector: ':before',
          example: 'p:before',
          explain: '在每个<p>元素之前插入内容'
        },
        {
          selector: ':after',
          example: 'p:after',
          explain: '在每个<p>元素之后插入内容'
        },
        {
          selector: ':lang(language)',
          example: 'p:lang(it)',
          explain: '选择一个lang属性的起始值="it"的所有<p>元素'
        },
        {
          selector: 'element1~element2',
          example: 'p~ul',
          explain: '选择p元素之后的每一个ul元素'
        },
        {
          selector: '[attribute^=value]',
          example: 'a[src^="https"]',
          explain: '选择每一个src属性的值以"https"开头的元素'
        },
        {
          selector: '[attribute$=value]',
          example: 'a[src$=".pdf"]',
          explain: '选择每一个src属性的值以".pdf"结尾的元素'
        },
        {
          selector: '[attribute*=value]',
          example: 'a[src*="runoob"]',
          explain: '选择每一个src属性的值包含子字符串"runoob"的元素'
        },
        {
          selector: ':first-of-type',
          example: 'p:first-of-type',
          explain: '选择每个p元素是其父级的第一个p元素'
        },
        {
          selector: ':last-of-type',
          example: 'p:last-of-type',
          explain: '选择每个p元素是其父级的最后一个p元素'
        },
        {
          selector: ':only-of-type',
          example: 'p:only-of-type',
          explain: '选择每个p元素是其父级的唯一p元素'
        },
        {
          selector: ':only-child',
          example: 'p:only-child',
          explain: '选择每个p元素是其父级的唯一子元素'
        },
        {
          selector: ':nth-child(n)',
          example: 'p:nth-child(n)',
          explain: '选择每个p元素是其父级的第二个子元素'
        },
        {
          selector: ':nth-last-child(n)',
          example: 'p:nth-last-child(2)',
          explain: '选择每个p元素的是其父级的第二个子元素，从最后一个子项计数'
        },
        {
          selector: ':nth-of-type(n)',
          example: 'p:nth-of-type(2)',
          explain: '选择每个p元素是其父级的第二个p元素'
        },
        {
          selector: ':nth-last-of-type(n)',
          example: 'p:nth-last-of-type(2)',
          explain: '选择每个p元素的是其父级的第二个p元素，从最后一个子项计数'
        },
        {
          selector: ':last-child',
          example: 'p:last-child',
          explain: '选择每个p元素是其父级的最后一个子级。'
        },
        {
          selector: ':enabled',
          example: ':enabled',
          explain: '选择每一个已启用的输入元素'
        },
        {
          selector: ':disabled',
          example: 'input:disabled',
          explain: '选择每一个禁用的输入元素'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
