<template>
  <div class="letconst">
    <h2>一、let和const</h2>
    <h3>1.1 let 命令</h3>
    <p>ES6 新增了let命令，用来声明变量，它和const都不允许重复声明。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。</p>
    <pre v-highlightjs="let1"><code class="javascript"></code></pre>
    <h3>1.2 let 命令示例</h3>
    <pre v-highlightjs="let_example1"><code></code></pre>
    <h3>1.3 const 命令</h3>
    <p>const声明一个只读的常量。一旦声明，常量的值就不能改变，声明变量同时，就必须立即初始化，不能留到以后赋值。const的作用域与let命令相同：只在声明所在的块级作用域内有效，不可以重复声明。</p>
    <p>const和let都不存在变量提升</p>
    <pre v-highlightjs="const1"><code class="javascript"></code></pre>
    <h3>1.4 const 本质</h3>
    <p>const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。</p>
    <pre v-highlightjs="const2"><code class="javascript"></code></pre>
  </div>
</template>

<script>
export default {
  name: 'letConst',
  data () {
    return {
      let1:
      `{
  let a = 10;
  var b = 1;
}
a // ReferenceError: a is not defined.
b // 1`,
      let_example1:
      `for (var i = 0; i < 5; i++) {
  setTimeout(function() {
      console.log(i);
  }, 0);
}
// 5 5 5 5 5
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
      console.log(i);
  }, 0);
}
// 0 1 2 3 4`,
      const1:
      `const val1 = 3
val  // 3
val = 4 // TypeError: Assignment to constant variable.

const val2 // SyntaxError: Missing initializer in const declaration

if (true) {
  console.log(val4); // ReferenceError
  const val4 = 5;
}`,
      const2:
        `const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only

const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错`
    }
  }
}
</script>

<style lang="scss">
.letconst{
  text-align: left;
  h2,h3{
    line-height: 2.3rem;
  }
  p{
    line-height: 2rem;
  }
}
</style>
