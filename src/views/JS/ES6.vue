<template>
  <div class="es6">
    <h2>ES6</h2>
    <p>ECMAScript 6.0（简称 ES6）是对ES5的补充。</p>
    <h3>var,let和const</h3>
    <p>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。</p>
    <pre>
      <code class="language-js">
      var a=1
      console.log(hahaha)
      function add(x,y){
        return x+y
      }
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'ES6',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.es6{
  text-align: left;
  // width: 900px;
  h2,h3{
    line-height: 2.3rem;
  }
  p{
    line-height: 2rem;
  }
}
</style>
