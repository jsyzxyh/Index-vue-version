<template>
  <div class="deboThrot">
    <h2>三、防抖和节流</h2>
    <h3>3.1 防抖</h3>
    <p>鼠标在下面矩形中移动，检测鼠标移动事件并计数，由于移动速度较快，频繁调用函数会导致页面卡顿</p>
    <p>防抖可以保证鼠标在移动时至少停止出发wait时间后才会调用</p>
    <p>在下图中移动鼠标，只有在停止移动0.5s后才会增加2</p>
    <div class="debounse">
      <div id="content" @mousemove="numAdd_new(2)"></div>
      <div id="count">{{ count }}</div>
    </div>
    <p>HTML排版</p>
    <pre v-highlightjs="debounseHTML"><code class="javascript"></code></pre>
    <p>javascript代码</p>
    <pre v-highlightjs="debounseJS"><code class="javascript"></code></pre>
    <h3>3.2 节流</h3>
    <p>防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。</p>
    <p>下面是个抢购按钮，每次点击增加2个，限定至少间隔0.5s才能增加一次。</p>
    <div class='throttleShow'>
      <button id='buy' @click="buy_new(2)">抢购</button>
      <div id="box">0</div>
    </div>
    <p>HTML排版</p>
    <pre v-highlightjs="throttleHTML"><code class="html"></code></pre>
    <p>javascript代码</p>
    <pre v-highlightjs="throttleJS"><code class="javascript"></code></pre>
  </div>
</template>

<script>
export default {
  name: 'this',
  data () {
    return {
      timer: null,
      count: 0,
      debounseHTML:
      `<div class="debounse">
  <div id="content" style="width: 80%;height: 400px;background-color: lightcoral;"></div>
  <div id="count">0</div>
</div>`,
      debounseJS:
      `let contentView = document.getElementById('content')
let count = document.getElementById('count')
var timer = null;
function debounce(func, wait) {
  return function () {
    let _this = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      func.apply(_this, args);
    }, wait);
  };
}
function numAdd(num) {
  count.innerText = parseInt(count.innerText) + num
}
function numAdd_new(num) {
  return debounce(numAdd, 500)(num)
}
contentView.addEventListener('mousemove', function() {
  numAdd_new(2)
})`,
      throttleHTML:
      `<button onclick="add_new(2)">加入购物车</button>
<div>
  <p id='num'>0</p>
</div>`,
      throttleJS:
      `var shopcar = document.getElementById('num')
var count=0
function add(num1){
  count = count + num1
  shopcar.innerText = count
}
function throttle(fn, wait){
  let lastTime = 0
  return function(){
    let nowTime = new Date().getTime()
    if(nowTime - lastTime > wait) {
      fn(...arguments)
      lastTime = nowTime
    }
  }
}
var add_new = throttle(add, 500)`,
      lastTime: 0,
      nowTime: null
    }
  },
  mounted () {
  },
  methods: {
    debounse (func, wait) {
      let _this = this
      return function () {
        if (_this.timer) clearTimeout(_this.timer)
        _this.timer = setTimeout(() => {
          func(...arguments)
        }, wait)
      }
    },
    numAdd (num) {
      let countBox = document.getElementById('count')
      countBox.innerText = parseInt(countBox.innerText) + num
    },
    numAdd_new (num) {
      return this.debounse(this.numAdd, 500)(num)
    },
    throttle (func, wait) {
      let _this = this
      return function () {
        _this.nowTime = new Date().getTime()
        if (_this.nowTime - _this.lastTime > wait) {
          func(...arguments)
          _this.lastTime = _this.nowTime
        }
      }
    },
    buy (num) {
      let oBox = document.getElementById('box')
      oBox.innerText = parseInt(oBox.innerText) + num
    },
    buy_new (num) {
      return this.throttle(this.buy, 500)(num)
    }
  }
}
</script>

<style lang="scss">
.deboThrot{
  .throttleShow{
    margin: 20px 0;
    #buy{
      margin-bottom: 20px;
    }
  }
  .debounse{
    #content{
      width: 80%;
      height: 400px;
      background-color: lightcoral;
    }
  }
}

</style>
