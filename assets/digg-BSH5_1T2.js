import{l as n,m as l,a3 as p,p as t}from"./index-s3fpZtPN.js";const e={class:"markdown-body"},i={},j="",u=n({__name:"digg",setup(c,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(r,s)=>(t(),l("div",e,s[0]||(s[0]=[p(`<h2>点赞组件</h2><h2>digg-list</h2><pre><code class="language-vue">&lt;<span class="hljs-name">template</span>&gt;
  &lt;<span class="hljs-name">view</span> class=<span class="hljs-string">&quot;digg-list-cls&quot;</span>&gt;
    &lt;<span class="hljs-name">view</span> class=<span class="hljs-string">&quot;mask-digg&quot;</span> @click=<span class="hljs-string">&quot;clickEvent&quot;</span> :<span class="hljs-name">style</span>=<span class="hljs-string">&quot;{
      top: systemInfo.statusBarHeight + &#39;px&#39;,
      bottom: safeAreaBottom + &#39;px&#39;
    }&quot;</span>&gt;
      &lt;<span class="hljs-name">view</span> v-for=<span class="hljs-string">&quot;diggItem in diggList&quot;</span> :key=<span class="hljs-string">&quot;diggItem.type + 100&quot;</span>&gt;
        &lt;DiggItem :class=<span class="hljs-string">&quot;&#39;c-digg-inner-cls-&#39; + diggItem.type&quot;</span> v-if=<span class="hljs-string">&quot;diggItem.isShow&quot;</span> :type=<span class="hljs-string">&quot;diggItem.type&quot;</span> :<span class="hljs-name">style</span>=<span class="hljs-string">&quot;{top: diggItem.top + &#39;px&#39;, left: diggItem.left + &#39;px&#39;, zIndex: 40 + diggItem.zIndex}&quot;</span>&gt;&lt;/DiggItem&gt;
      &lt;/<span class="hljs-name">view</span>&gt;
      &lt;<span class="hljs-name">view</span> v-if=<span class="hljs-string">&quot;totalStyle.show&quot;</span> class=<span class="hljs-string">&quot;total-cls&quot;</span> :<span class="hljs-name">style</span>=<span class="hljs-string">&quot;{top: totalStyle.top + &#39;px&#39;, left: totalStyle.left + &#39;px&#39;}&quot;</span>&gt;x&lt;<span class="hljs-name">text</span> <span class="hljs-name">style</span>=<span class="hljs-string">&quot;font-size: 28rpx;&quot;</span>&gt;{{totalStyle.total}}&lt;/<span class="hljs-name">text</span>&gt;&lt;/<span class="hljs-name">view</span>&gt;
    &lt;/<span class="hljs-name">view</span>&gt;
    &lt;<span class="hljs-name">view</span> class=<span class="hljs-string">&quot;c-digg-cls&quot;</span> :<span class="hljs-name">style</span>=<span class="hljs-string">&quot;{marginBottom: safeAreaBottom + &#39;px&#39;}&quot;</span>&gt;
      &lt;<span class="hljs-name">view</span> v-for=<span class="hljs-string">&quot;diggItem in diggList&quot;</span> :key=<span class="hljs-string">&quot;diggItem.type&quot;</span>&gt;
        &lt;DiggItem :class=<span class="hljs-string">&quot;&#39;c-digg-br-cls-&#39; + diggItem.type&quot;</span> v-if=<span class="hljs-string">&quot;diggItem.isShow&quot;</span> :type=<span class="hljs-string">&quot;diggItem.type&quot;</span> @closeItem=<span class="hljs-string">&quot;closeItemEvent&quot;</span> :<span class="hljs-name">style</span>=<span class="hljs-string">&quot;{zIndex: diggItem.zIndex}&quot;</span>&gt;&lt;/DiggItem&gt;
      &lt;/<span class="hljs-name">view</span>&gt;
    &lt;/<span class="hljs-name">view</span>&gt;
  &lt;/<span class="hljs-name">view</span>&gt;
&lt;/<span class="hljs-name">template</span>&gt;
</code></pre><pre><code class="language-javascript">&lt;script&gt;
<span class="hljs-keyword">import</span> { getSystemInfo } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@/common/js/system&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">DiggItem</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./digg-item.vue&#39;</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">data</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">systemInfo</span>: <span class="hljs-title function_">getSystemInfo</span>(),
      <span class="hljs-attr">totalStyle</span>: {
        <span class="hljs-attr">top</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">left</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">total</span>: <span class="hljs-number">0</span>
      },
      <span class="hljs-attr">touchNum</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">timer</span>: <span class="hljs-literal">null</span>,
      <span class="hljs-attr">timer2</span>: <span class="hljs-literal">null</span>,
      <span class="hljs-attr">firstTime</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">diggList</span>: [],
      <span class="hljs-attr">diggIndex</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">zIndex</span>: <span class="hljs-number">0</span>,
    }
  },
  <span class="hljs-attr">computed</span>: {
    <span class="hljs-comment">// 获取安全区域</span>
    <span class="hljs-title function_">safeAreaBottom</span>(<span class="hljs-params"></span>) {
      <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">systemInfo</span>?.<span class="hljs-property">info</span>?.<span class="hljs-property">safeAreaInsets</span>?.<span class="hljs-property">bottom</span> || <span class="hljs-number">0</span>
    },
  },
  <span class="hljs-attr">components</span>: {
    <span class="hljs-title class_">DiggItem</span>
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-comment">// 监听双击单击事件</span>
    <span class="hljs-title function_">clickEvent</span>(<span class="hljs-params">e</span>) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">touchNum</span>++;
      <span class="hljs-keyword">let</span> secondTime = <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">getTime</span>()
      <span class="hljs-keyword">if</span>(secondTime - <span class="hljs-variable language_">this</span>.<span class="hljs-property">firstTime</span> &lt; <span class="hljs-number">300</span>) {
        <span class="hljs-keyword">let</span> top = <span class="hljs-number">0</span>, left = <span class="hljs-number">0</span>
        <span class="hljs-keyword">if</span>(e?.<span class="hljs-property">detail</span>) {
          top = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-built_in">parseInt</span>(e.<span class="hljs-property">detail</span>.<span class="hljs-property">y</span>) / <span class="hljs-number">10</span>) * <span class="hljs-number">10</span> - <span class="hljs-variable language_">this</span>.<span class="hljs-property">systemInfo</span>.<span class="hljs-property">statusBarHeight</span>
          left = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-built_in">parseInt</span>(e.<span class="hljs-property">detail</span>.<span class="hljs-property">x</span>) / <span class="hljs-number">10</span>) * <span class="hljs-number">10</span>
        }
        <span class="hljs-comment">// 判断点赞总数，大于10则展示动画</span>
        <span class="hljs-keyword">if</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">touchNum</span> &gt; <span class="hljs-number">10</span> &amp;&amp; !<span class="hljs-variable language_">this</span>.<span class="hljs-property">totalStyle</span>.<span class="hljs-property">show</span>) {
          <span class="hljs-variable language_">this</span>.<span class="hljs-property">totalStyle</span>.<span class="hljs-property">top</span> = top - <span class="hljs-number">54</span>
          <span class="hljs-variable language_">this</span>.<span class="hljs-property">totalStyle</span>.<span class="hljs-property">left</span> = left
          <span class="hljs-variable language_">this</span>.<span class="hljs-property">totalStyle</span>.<span class="hljs-property">total</span> = <span class="hljs-variable language_">this</span>.<span class="hljs-property">touchNum</span> &gt; <span class="hljs-number">999</span> ? <span class="hljs-number">999</span> :  <span class="hljs-variable language_">this</span>.<span class="hljs-property">touchNum</span> - <span class="hljs-number">1</span>
          <span class="hljs-variable language_">this</span>.<span class="hljs-property">totalStyle</span>.<span class="hljs-property">show</span> = <span class="hljs-literal">true</span>
          <span class="hljs-keyword">let</span> timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
            <span class="hljs-variable language_">this</span>.<span class="hljs-property">totalStyle</span>.<span class="hljs-property">show</span> = <span class="hljs-literal">false</span>
            <span class="hljs-built_in">clearTimeout</span>(timer)
            timer = <span class="hljs-literal">null</span>
          }, <span class="hljs-number">500</span>)
        }
        <span class="hljs-keyword">let</span> diggItem = {
          <span class="hljs-attr">isShow</span>: <span class="hljs-literal">true</span>,
          top,
          left,
          <span class="hljs-attr">type</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">diggIndex</span>,
          <span class="hljs-attr">zIndex</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">zIndex</span>
        }
        <span class="hljs-keyword">if</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">diggList</span>.<span class="hljs-property">length</span> &gt;= <span class="hljs-number">18</span>) {
          <span class="hljs-variable language_">this</span>.<span class="hljs-property">diggList</span>.<span class="hljs-title function_">splice</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">diggIndex</span>, <span class="hljs-number">1</span>, diggItem)
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-variable language_">this</span>.<span class="hljs-property">diggList</span>.<span class="hljs-title function_">push</span>(diggItem)
        }
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">zIndex</span>++
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">diggIndex</span>++
        <span class="hljs-keyword">if</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">diggIndex</span> &gt;= <span class="hljs-number">18</span>) {
          <span class="hljs-variable language_">this</span>.<span class="hljs-property">diggIndex</span> = <span class="hljs-number">0</span>
        }
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;单&#39;</span>, <span class="hljs-variable language_">this</span>.<span class="hljs-property">touchNum</span>);
      }
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">firstTime</span> = secondTime
      <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">debounce</span>()
    },
    <span class="hljs-title function_">closeItemEvent</span>(<span class="hljs-params">index</span>) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">diggList</span>[index].<span class="hljs-property">isShow</span> = <span class="hljs-literal">false</span>
    },
    <span class="hljs-comment">// 重置点击</span>
    <span class="hljs-title function_">debounce</span>(<span class="hljs-params"></span>) {
      <span class="hljs-keyword">if</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">timer</span>) {
        <span class="hljs-built_in">clearTimeout</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">timer</span>)
      }
      <span class="hljs-keyword">let</span> upTouchNum = <span class="hljs-variable language_">this</span>.<span class="hljs-property">touchNum</span>
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">timer</span> = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">touchNum</span> = <span class="hljs-number">0</span>; <span class="hljs-comment">// 重置触摸次数</span>
      }, <span class="hljs-number">350</span>)

      <span class="hljs-keyword">if</span>(upTouchNum &lt;= <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span>
      <span class="hljs-keyword">if</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">timer2</span>){
        <span class="hljs-built_in">clearTimeout</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">timer2</span>)
      }
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">timer2</span> = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-title function_">async</span> () =&gt; {
        <span class="hljs-keyword">await</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">$store</span>.<span class="hljs-title function_">dispatch</span>(<span class="hljs-string">&#39;chatIM/createCustomMessage&#39;</span>, {
          <span class="hljs-attr">touchNum</span>: upTouchNum - <span class="hljs-number">1</span>
        })
        <span class="hljs-variable language_">this</span>.<span class="hljs-property">zIndex</span> = <span class="hljs-number">0</span>
      }, <span class="hljs-number">1000</span>)
    },
    <span class="hljs-comment">// 获取点击时间</span>
    <span class="hljs-title function_">getTime</span>(<span class="hljs-params"></span>) {
      <span class="hljs-keyword">let</span> date = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>();
      <span class="hljs-keyword">return</span> date.<span class="hljs-title function_">getTime</span>();
    }
  }
}
&lt;/script&gt;
</code></pre><pre><code class="language-css">&lt;style lang=&quot;scss&quot; scoped&gt;
<span class="hljs-keyword">@for</span> $i from <span class="hljs-number">0</span> to <span class="hljs-number">18</span> {
  <span class="hljs-keyword">@keyframes</span> digg-inner-#{$<span class="hljs-selector-tag">i</span>} {
    <span class="hljs-number">0%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">20</span>rpx)) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">0</span>) <span class="hljs-built_in">scale</span>(<span class="hljs-number">1</span>);
      <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.9</span>;
    }
    <span class="hljs-number">25%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">20</span>rpx)) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">25deg</span>) <span class="hljs-built_in">scale</span>(<span class="hljs-number">1.5</span>);
      <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
    }
    <span class="hljs-number">50%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">20</span>rpx)) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">0</span>) <span class="hljs-built_in">scale</span>(<span class="hljs-number">1</span>);
      <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.9</span>;
    }
    <span class="hljs-number">75%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">20</span>rpx)) <span class="hljs-built_in">rotate</span>(-<span class="hljs-number">25deg</span>) <span class="hljs-built_in">scale</span>(<span class="hljs-number">1.5</span>);
      <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
    }
    <span class="hljs-number">100%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">20</span>rpx)) <span class="hljs-built_in">rotate</span>(<span class="hljs-number">0</span>) <span class="hljs-built_in">scale</span>(<span class="hljs-number">1</span>);
      <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.9</span>;
    }
  }
  <span class="hljs-keyword">@keyframes</span> digg-br-#{$<span class="hljs-selector-tag">i</span>} {
    <span class="hljs-number">0%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-number">0</span>rpx) <span class="hljs-built_in">scale</span>(<span class="hljs-number">1.2</span>);
      <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
    }
    <span class="hljs-number">25%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(<span class="hljs-built_in">calc</span>(-<span class="hljs-number">50%</span> + #{random() * <span class="hljs-number">10</span> + <span class="hljs-number">6</span>}rpx), -<span class="hljs-number">67</span>rpx);
    }
    <span class="hljs-number">50%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(<span class="hljs-built_in">calc</span>(-<span class="hljs-number">50%</span> - #{random() * <span class="hljs-number">10</span> + <span class="hljs-number">6</span>}rpx), -<span class="hljs-number">134</span>rpx);
    }
    <span class="hljs-number">75%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(<span class="hljs-built_in">calc</span>(-<span class="hljs-number">50%</span> + #{random() * <span class="hljs-number">10</span> + <span class="hljs-number">6</span>}rpx), -<span class="hljs-number">201</span>rpx);
    }
    <span class="hljs-number">100%</span> {
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, -<span class="hljs-number">268</span>rpx) <span class="hljs-built_in">scale</span>(<span class="hljs-number">1</span>);
      <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.2</span>;
    }
  }
}
<span class="hljs-keyword">@keyframes</span> total-animate {
  <span class="hljs-number">0%</span> {
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">30</span>rpx)) <span class="hljs-built_in">scale</span>(<span class="hljs-number">0.8</span>);
    <span class="hljs-attribute">transform-origin</span>: bottom center;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.9</span>;
  }
  <span class="hljs-number">25%</span> {
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">20</span>rpx)) <span class="hljs-built_in">scale</span>(<span class="hljs-number">1.2</span>);
    <span class="hljs-attribute">transform-origin</span>: bottom center;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">1</span>;
  }
  <span class="hljs-number">100%</span> {
    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">40</span>rpx)) <span class="hljs-built_in">scale</span>(<span class="hljs-number">0.5</span>);
    <span class="hljs-attribute">transform-origin</span>: bottom center;
    <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.5</span>;
  }
}
<span class="hljs-selector-class">.digg-list-cls</span> {
  <span class="hljs-selector-class">.mask-digg</span> {
    <span class="hljs-attribute">position</span>: fixed;
    <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">98</span>;
    <span class="hljs-selector-class">.total-cls</span> {
      <span class="hljs-attribute">position</span>: absolute;
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">20</span>rpx));
      <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
      <span class="hljs-attribute">font-size</span>: <span class="hljs-number">24</span>rpx;
      <span class="hljs-attribute">animation</span>: total-animate <span class="hljs-number">500ms</span> infinite <span class="hljs-number">0s</span> linear;
      <span class="hljs-attribute">animation-fill-mode</span>: forwards;
      <span class="hljs-attribute">animation-iteration-count</span>: <span class="hljs-number">1</span>;
    }
  }
  <span class="hljs-selector-class">.c-digg-cls</span> {
    <span class="hljs-attribute">position</span>: fixed;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">112</span>rpx;
    <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>rpx;
    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">97</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">120</span>rpx;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">348</span>rpx;
  }
  <span class="hljs-keyword">@for</span> $i from <span class="hljs-number">0</span> to <span class="hljs-number">18</span> {
    <span class="hljs-selector-class">.c-digg-inner-cls-</span>#{$<span class="hljs-selector-tag">i</span>} {
      <span class="hljs-attribute">position</span>: absolute;
      <span class="hljs-attribute">width</span>: <span class="hljs-number">80</span>rpx;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">80</span>rpx;
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-<span class="hljs-number">50%</span>, <span class="hljs-built_in">calc</span>(-<span class="hljs-number">100%</span> - <span class="hljs-number">20</span>rpx));
      <span class="hljs-attribute">animation</span>: digg-inner-#{$<span class="hljs-selector-tag">i</span>} <span class="hljs-number">1000ms</span> infinite <span class="hljs-number">0s</span> linear;
      <span class="hljs-attribute">animation-fill-mode</span>: forwards;
      <span class="hljs-attribute">animation-iteration-count</span>: <span class="hljs-number">1</span>;
    }
    <span class="hljs-selector-class">.c-digg-br-cls-</span>#{$<span class="hljs-selector-tag">i</span>} {
      <span class="hljs-attribute">position</span>: absolute;
      <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
      <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
      <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translateX</span>(-<span class="hljs-number">50%</span>);
      <span class="hljs-attribute">width</span>: <span class="hljs-number">80</span>rpx;
      <span class="hljs-attribute">height</span>: <span class="hljs-number">80</span>rpx;
      <span class="hljs-attribute">animation</span>: digg-br-#{$<span class="hljs-selector-tag">i</span>} <span class="hljs-number">1000ms</span> infinite <span class="hljs-number">0s</span> linear;
      <span class="hljs-attribute">animation-fill-mode</span>: forwards;
      <span class="hljs-attribute">animation-iteration-count</span>: <span class="hljs-number">1</span>;
    }
  }
}
&lt;/style&gt;
</code></pre><h2>digg-item</h2><pre><code class="language-vue">&lt;<span class="hljs-name">template</span>&gt;
  &lt;<span class="hljs-name">image</span> v-show=<span class="hljs-string">&quot;modelValue&quot;</span> :src=<span class="hljs-string">&quot;formatImgUrl(&#39;/xyzx/static/live/digg-&#39; + type % 6 + &#39;.png&#39;)&quot;</span>&gt;&lt;/<span class="hljs-name">image</span>&gt;
&lt;/<span class="hljs-name">template</span>&gt;
</code></pre><pre><code class="language-javascript">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">emits</span>: [<span class="hljs-string">&#39;closeItem&#39;</span>],
  <span class="hljs-attr">props</span>: {
    <span class="hljs-attr">modelValue</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">Boolean</span>,
      <span class="hljs-attr">default</span>: <span class="hljs-literal">true</span>
    },
    <span class="hljs-attr">type</span>: {
      <span class="hljs-attr">type</span>: <span class="hljs-title class_">Number</span>,
      <span class="hljs-attr">default</span>: <span class="hljs-number">0</span>
    }
  },
  <span class="hljs-attr">watch</span>: {
    <span class="hljs-attr">modelValue</span>: {
      <span class="hljs-title function_">handler</span>(<span class="hljs-params">newVal</span>) {
        <span class="hljs-keyword">if</span>(newVal) {
          <span class="hljs-keyword">let</span> timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
            <span class="hljs-variable language_">this</span>.$emit(<span class="hljs-string">&#39;closeItem&#39;</span>, <span class="hljs-variable language_">this</span>.<span class="hljs-property">type</span>)
            <span class="hljs-built_in">clearTimeout</span>(timer)
          }, <span class="hljs-number">1000</span>)
        }
      },
      <span class="hljs-attr">immediate</span>: <span class="hljs-literal">true</span>
    }
  }
}
&lt;/script&gt;
</code></pre><pre><code class="language-css">&lt;style lang=&quot;scss&quot; scoped&gt;
<span class="hljs-selector-tag">image</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">72</span>rpx;
  <span class="hljs-attribute">height</span>: <span class="hljs-number">72</span>rpx;
}
&lt;/style&gt;
</code></pre>`,9)])))}});export{u as default,j as excerpt,i as frontmatter};
