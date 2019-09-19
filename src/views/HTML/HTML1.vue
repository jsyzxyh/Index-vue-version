<template>
  <div class="html5">
    <h2>一、HTML5新特性</h2>
    <h3>1.1 HTML5新增标签</h3>
    <p><b>canvas新元素</b></p>
    <el-table
      :data="html5Canvas"
      border
      style="width: 90%">
      <el-table-column
        prop="label"
        label="标签"
        width="100">
      </el-table-column>
      <el-table-column
        prop="explain"
        label="说明">
      </el-table-column>
    </el-table>
    <p><b>新多媒体元素</b></p>
    <el-table
      :data="html5Media"
      border
      style="width: 90%">
      <el-table-column
        prop="label"
        label="标签"
        width="100">
      </el-table-column>
      <el-table-column
        prop="explain"
        label="说明">
      </el-table-column>
    </el-table>
    <p><b>新表单元素</b></p>
    <el-table
      :data="html5Form"
      border
      style="width: 90%">
      <el-table-column
        prop="label"
        label="标签"
        width="100">
      </el-table-column>
      <el-table-column
        prop="explain"
        label="说明">
      </el-table-column>
    </el-table>
    <p><b>新的语义和结构元素</b></p>
    <el-table
      :data="html5Semantics"
      border
      style="width: 90%">
      <el-table-column
        prop="label"
        label="标签"
        width="100">
      </el-table-column>
      <el-table-column
        prop="explain"
        label="说明">
      </el-table-column>
    </el-table>
    <h3>1.2 input新增属性</h3>
    <el-table
      :data="html5Input"
      border
      style="width: 90%">
      <el-table-column
        prop="type"
        label="类型"
        width="100">
      </el-table-column>
      <el-table-column
        prop="explain"
        label="说明"
        width="240">
      </el-table-column>
      <el-table-column
        prop="example"
        label="举例">
      </el-table-column>
    </el-table>
    <h3>1.3 标签语义化</h3>
    <p>html5专门添加页眉、页脚、导航、文章内容等跟结构相关的结构元素标签</p>
    <img :src="html1" alt="">
    <p><b>&lt;title&gt;</b>：简短、描述性、唯一（提升搜索引擎排名）。</p>
    <p>搜索引擎会将title作为判断页面主要内容的指标，有效的title应该包含几个与页面内容密切相关的关键字，建议将title核心内容放在前60个字符中。</p>
    <p><b>&lt;hn&gt;</b>：h1~h6分级标题，用于创建页面信息的层级关系。</p>
    <p>对于搜索引擎而言，如果标题与搜索词匹配，这些标题就会被赋予很高的权重，尤其是h1。</p>
    <p><b>&lt;header&gt;</b>：具有引用或导航作用的解构元素，通常包括网站标志、主导航、全站链接以及搜索框。 也适合对页面内部一组介绍性或导航性内容进行标记。</p>
    <p><b>&lt;nav&gt;</b>：元素代表页面的导航链接区域。用于定义页面的主要导航部分。譬如：侧边栏上目录，面包屑导航，搜索样式，或者下一篇上一篇文章。用在整个页面主要导航部分上，不合适就不要用nav元素。</p>
    <p><b>&lt;article&gt;</b>：当前页面或文章的附属信息，可以包含于当前页面或主要内容相关的引用、侧边栏、广告、导航条。</p>
    <p>article可以嵌套article，只要里面的article与外面的是部分与整体的关系。</p>
    <p><b>&lt;section&gt;</b>：具有相似主题的一组内容，比如网站的主页可以分成介绍、新闻条目、联系信息等条块。元素代表文档中的“节”或“段”，“段”可以是指一篇文章里按照主题的分段；“节”可以是指一个页面里的分组。</p>
    <p>如果只是为了添加样式，请用div！</p>
    <p><b>&lt;aside&gt;</b>：指定附注栏，包括引述、侧栏、指向文章的一组链接、广告、友情链接、相关产品列表等。</p>
    <p><b>&lt;footer&gt;</b>：作为其上层父级内容区块或根区块的脚注。通常包含脚注信息，如作者、相关链接或版权。</p>
    <p><b>HTML语义化标签优点</b></p>
    <p>1.去掉或样式丢失的时候能让页面呈现清晰的结构</p>
    <p>2.屏幕阅读器（如果访客有视障）会完全根据你的标记来“读”你的网页。</p>
    <p>3.搜索引擎的爬虫依赖标签确定上下文和权重问题。</p>
    <p>4.移动设备能够更完美的展现网页（对css支持较弱的设备）</p>
    <p>5.便于团队开发和维护</p>
  </div>
</template>

<script>
import html1 from '@/assets/images/html/html语义化1.png'
export default {
  name: 'HTML1',
  data () {
    return {
      html1,
      html5Canvas: [
        {
          label: '<canvas>',
          explain: '标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API'
        }
      ],
      html5Media: [
        {
          label: '<audio>',
          explain: '定义音频内容'
        },
        {
          label: '<video>',
          explain: '定义视频（video 或者 movie）'
        },
        {
          label: '<source>',
          explain: '定义多媒体资源 <video> 和 <audio>'
        },
        {
          label: '<embed>',
          explain: '定义嵌入的内容，比如插件。'
        },
        {
          label: '<track>',
          explain: '为诸如 <video> 和 <audio> 元素之类的媒介规定外部文本轨道。'
        }
      ],
      html5Form: [
        {
          label: '<datalist>',
          explain: '定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。'
        },
        {
          label: '<keygen>',
          explain: '规定用于表单的密钥对生成器字段。'
        },
        {
          label: '<output>',
          explain: '定义不同类型的输出，比如脚本的输出。'
        }
      ],
      html5Semantics: [
        {
          label: '<article>',
          explain: '定义页面独立的内容区域。'
        },
        {
          label: '<aside>',
          explain: '定义页面的侧边栏内容。'
        },
        {
          label: '<header>',
          explain: '定义了文档的头部区域'
        },
        {
          label: '<mark>',
          explain: '定义带有记号的文本。'
        },
        {
          label: '<nav>',
          explain: '定义导航链接的部分。'
        },
        {
          label: '<section>',
          explain: '定义文档中的节（section、区段）。'
        },
        {
          label: '<progress>',
          explain: '定义任何类型的任务的进度。'
        },
        {
          label: '<ruby>',
          explain: '定义 ruby 注释（中文注音或字符）。'
        },
        {
          label: '<rt>',
          explain: '定义字符（中文注音或字符）的解释或发音。'
        },
        {
          label: '<rp>',
          explain: '在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。'
        },
        {
          label: '<dialog>',
          explain: '定义对话框，比如提示框'
        }
      ],
      html5Input: [
        {
          type: 'color',
          explain: 'color类型主要用于选取颜色',
          example: `选择喜欢的颜色: <input type="color" name="favcolor">`
        },
        {
          type: 'date',
          explain: 'date 类型允许你从一个日期选择器选择一个日期。',
          example: `生日: <input type="date" name="bday">`
        },
        {
          type: 'datetime',
          explain: 'datetime 类型允许你选择一个日期（UTC 时间）。',
          example: `生日 (日期和时间): <input type="datetime" name="bdaytime">`
        },
        {
          type: 'datetime-local',
          explain: 'datetime-local 类型允许你选择一个日期和时间 (无时区).',
          example: `生日 (日期和时间): <input type="datetime-local" name="bdaytime">`
        },
        {
          type: 'email',
          explain: 'email 类型用于应该包含 e-mail 地址的输入域。',
          example: `E-mail: <input type="email" name="email">`
        },
        {
          type: 'month',
          explain: 'month 类型允许你选择一个月份。',
          example: `生日 (月和年): <input type="month" name="bdaymonth">`
        },
        {
          type: 'number',
          explain: 'number 类型用于应该包含数值的输入域',
          example: `数量(1到5之间): <input type="number" name="quantity" min="1" max="5">`
        },
        {
          type: 'range',
          explain: 'range 类型用于应该包含一定范围内数字值的输入域。range 类型显示为滑动条。',
          example: `<input type="range" name="points" min="1" max="10">`
        },
        {
          type: 'search',
          explain: 'search 类型用于搜索域，比如站点搜索或 Google 搜索。',
          example: `Search Google: <input type="search" name="googlesearch">`
        },
        {
          type: 'tel',
          explain: '定义输入电话号码字段:',
          example: `电话号码: <input type="tel" name="usrtel">`
        },
        {
          type: 'time',
          explain: 'time 类型允许你选择一个时间。',
          example: `选择时间: <input type="time" name="usr_time">`
        },
        {
          type: 'url',
          explain: 'url 类型用于应该包含 URL 地址的输入域。在提交表单时，会自动验证 url 域的值。',
          example: `添加您的主页: <input type="url" name="homepage">`
        },
        {
          type: 'week',
          explain: 'week 类型允许你选择周和年。',
          example: `选择周: <input type="week" name="week_year">`
        }
      ]
    }
  }
}
</script>
