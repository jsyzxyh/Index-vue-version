<template>
  <div class="this">
    <h2>二、this</h2>
    <h3>2.1 this 指向理解</h3>
    <p>this指向的几种情况</p>
    <p>默认this指向全局window，普通函数调用也指向window</p>
    <p>构造函数调用，this都指向new出来的对象。</p>
    <p>bind,call,apply可以改变this指向</p>
    <pre v-highlightjs="this1"><code class="javascript">{{ this1 }}</code></pre>
    <h3>2.2 ES6箭头函数</h3>
    <p>箭头函数有几个使用注意点。</p>
    <p>（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。</p>
    <p>（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。</p>
    <p>（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。</p>
    <p>（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。</p>
    <p>上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。</p>
    <pre v-highlightjs="this_arrow"><code class="javascript"></code></pre>
    <p>上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，
      执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。</p>
    <h3>2.3 改变this指向的方法1: bind</h3>
    <p>obj1.bind(obj2)将this从obj1转移到了obj2</p>
    <p>bind方法返回的是一个修改过后的函数。bind也可以有多个参数，并且参数可以执行的时候再次添加，但是要注意的是，参数是按照形参的顺序进行的。</p>
    <pre v-highlightjs="this_bind"><code class="javascript"></code></pre>
    <h3>2.4 改变this指向的方法2: call</h3>
    <p>obj1.call(obj2)将this从obj1转移到了obj2，并且立即执行。</p>
    <pre v-highlightjs="this_call1"><code class="javascript"></code></pre>
    <p>call方法除了第一个参数以外还可以添加多个参数，如下：</p>
    <pre v-highlightjs="this_call2"><code class="javascript"></code></pre>
    <h3>2.5 改变this指向的方法3: apply</h3>
    <p>apply方法和call方法有些相似，它也可以改变this的指向</p>
    <pre v-highlightjs="this_apply1"><code class="javascript"></code></pre>
    <p>同样apply也可以有多个参数，但是不同的是，第二个参数必须是一个数组，如下：</p>
    <pre v-highlightjs="this_apply2"><code class="javascript"></code></pre>
  </div>
</template>

<script>
import 'prismjs/themes/prism.css'
export default {
  name: 'this',
  data () {
    return {
      this1:
      `// 函数调用时指向默认的window
var val='cn'
function fn(){
    console.log(this.val);
}
fu(); // cn
对象调用指向.前面内容
var b=200
var obj={
    a:100,
    fn:function(){
        console.log(this.a);
        console.log(this.b);
    }
}
obj.fn(); //100  undefined

let obj1={
    a:222
};
let obj2={
    a:111,
    fn:function(){
        console.log(this.a);
    }
}
obj1.fn=obj2.fn;
obj1.fn(); //222
//构造函数指向new出来的对象
let Func=function(){
    this.name='111';
}
let fn1=new Func();
fn1.name='cn';
console.log(fn1.name);//cn
let fn2=new Func();
console.log(fn2.name)//111`,
      this_arrow:
      `function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42`,
      this_bind:
      `var a = {
    name:"Jack",
    fn:function(){
        console.log(this.name);
    }
}
var b = a.fn;
var c = b.bind(a);
c(); //Jack
// bind可以传多个参数，注意要按顺序
var a = {
    name:"Tim",
    fn:function(e,d,f){
        console.log(this.name);
        console.log(e,d,f);
    }
}
var b = a.fn;
var c = b.bind(a,10);
c(1,2);  //Tim 10 1 2`,
      this_call1:
      `var a = {
    name:"Jack",
    fn:function(){
        console.log(this.name);
    }
}
var b = a.fn;
b.call(a); // Jack`,
      this_call2:
      `var a = {
    name:"Jack",
    fn:function(x,y){
        console.log(this.name);
        console.log(x + y);
    }
}
var b = a.fn;
b.call(a,100,200); // Jack 300`,
      this_apply1:
      `var a = {
    name:"Jack",
    fn:function(){
        console.log(this.name);
    }
}
var b = a.fn;
b.apply(a); // Jack`,
      this_apply2:
      `var a = {
    name:"Jack",
    fn:function(x,y){
        console.log(this.name);
        console.log(x + y);
    }
}
var b = a.fn;
b.apply(a,[100,200]); // Jack 300
// 或者
var a = {
    name:"Jack",
    fn:function(x, y){
        console.log(this.name); 
        console.log(x + y);
    }
}
var b = a.fn;
var arr = [100,200];
b.apply(a,arr); // Jack 300`
    }
  }
}
</script>

<style lang="scss">
.this{
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
