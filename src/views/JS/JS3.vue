<template>
  <div class="deboThrot">
    <h2>三、防抖和节流</h2>
    <h3>3.1 防抖</h3>
    <p>鼠标在下面矩形中移动，检测鼠标移动事件并计数，由于移动速度较快，频繁调用函数会导致页面卡顿</p>
    <div class="debounse">
      <div id="content"></div>
      <div id="count">0</div>
    </div>
    <pre v-highlightjs="debounse"><code class="javascript"></code></pre>
    <h3>3.2 节流</h3>
    <p>防抖动和节流本质是不一样的。防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。</p>
    <p></p>
    <div class='throttleShow'>
      <button id='buy' @click="add(2)">抢购</button>
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
      debounseJS:
      ``,
      throttleHTML:
      `<button id='buy'>抢购</button>
  <div id="box">0</div>`,
      throttleJS:
      `let oBtn = document.getElementById('buy');
    let oBox = document.getElementById('box');
    /*
        handle:buy函数
        wait:规定在0.5秒钟内只能执行一次
    */
    function throttle(handle, wait) {
      let lastTime = 0;
      return function (e) {
        let nowTime = new Date().getTime()
        if (nowTime - lastTime > wait) {
          handle(...arguments);
          lastTime = nowTime;
        }
      }
    }
    function buy(num) {
      oBox.innerText = parseInt(oBox.innerText) + num
    }
    oBtn.onclick = throttle(buy, 500)`,
      lastTime: 0,
      nowTime: null
    }
  },
  created () {
  },
  methods: {
    debounse (fn, wait) {
      let timer = null
      return function () {
        let context = this
        clearTimeout(timer)
        timer = setTimeout(function () {
          fn.apply(context)
        }, wait)
      }
    },
    throttle (handle, wait) {
      let _this = this
      return function () {
        _this.nowTime = new Date().getTime()
        if (_this.nowTime - _this.lastTime > wait) {
          handle(...arguments)
          _this.lastTime = _this.nowTime
        }
      }
    },
    buy (num) {
      let oBox = document.getElementById('box')
      oBox.innerText = parseInt(oBox.innerText) + num
    },
    add (num) {
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
