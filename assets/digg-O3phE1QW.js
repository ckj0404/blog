import{l as s,m as a,v as t,p as o}from"./index-pQuETma2.js";const r={class:"markdown-body"},g={},c="",d=s({__name:"digg",setup(l,{expose:i}){return i({frontmatter:{},excerpt:void 0}),(n,e)=>(o(),a("div",r,e[0]||(e[0]=[t("h2",null,"点赞组件",-1),t("pre",null,[t("code",{class:"language-vue"},`<!-- digg-list -->
<template>
  <view class="digg-list-cls">
    <view class="mask-digg" @click="clickEvent" :style="{
      top: systemInfo.statusBarHeight + 'px',
      bottom: safeAreaBottom + 'px'
    }">
      <view v-for="diggItem in diggList" :key="diggItem.type + 100">
        <DiggItem :class="'c-digg-inner-cls-' + diggItem.type" v-if="diggItem.isShow" :type="diggItem.type" :style="{top: diggItem.top + 'px', left: diggItem.left + 'px', zIndex: 40 + diggItem.zIndex}"></DiggItem>
      </view>
      <view v-if="totalStyle.show" class="total-cls" :style="{top: totalStyle.top + 'px', left: totalStyle.left + 'px'}">x<text style="font-size: 28rpx;">{{totalStyle.total}}</text></view>
    </view>
    <view class="c-digg-cls" :style="{marginBottom: safeAreaBottom + 'px'}">
      <view v-for="diggItem in diggList" :key="diggItem.type">
        <DiggItem :class="'c-digg-br-cls-' + diggItem.type" v-if="diggItem.isShow" :type="diggItem.type" @closeItem="closeItemEvent" :style="{zIndex: diggItem.zIndex}"></DiggItem>
      </view>
    </view>
  </view>
</template>

<script>
import { getSystemInfo } from '@/common/js/system'
import DiggItem from './digg-item.vue'
export default {
  data() {
    return {
      systemInfo: getSystemInfo(),
      totalStyle: {
        top: 0,
        left: 0,
        show: false,
        total: 0
      },
      touchNum: 0,
      timer: null,
      timer2: null,
      firstTime: 0,
      diggList: [],
      diggIndex: 0,
      zIndex: 0,
    }
  },
  computed: {
    // 获取安全区域
    safeAreaBottom() {
      return this.systemInfo?.info?.safeAreaInsets?.bottom || 0
    },
  },
  components: {
    DiggItem
  },
  methods: {
    // 监听双击单击事件
    clickEvent(e) {
      this.touchNum++;
      let secondTime = this.getTime()
      if(secondTime - this.firstTime < 300) {
        let top = 0, left = 0
        if(e?.detail) {
          top = Math.round(parseInt(e.detail.y) / 10) * 10 - this.systemInfo.statusBarHeight
          left = Math.round(parseInt(e.detail.x) / 10) * 10
        }
        // 判断点赞总数，大于10则展示动画
        if(this.touchNum > 10 && !this.totalStyle.show) {
          this.totalStyle.top = top - 54
          this.totalStyle.left = left
          this.totalStyle.total = this.touchNum > 999 ? 999 :  this.touchNum - 1
          this.totalStyle.show = true
          let timer = setTimeout(() => {
            this.totalStyle.show = false
            clearTimeout(timer)
            timer = null
          }, 500)
        }
        let diggItem = {
          isShow: true,
          top,
          left,
          type: this.diggIndex,
          zIndex: this.zIndex
        }
        if(this.diggList.length >= 18) {
          this.diggList.splice(this.diggIndex, 1, diggItem)
        } else {
          this.diggList.push(diggItem)
        }
        this.zIndex++
        this.diggIndex++
        if(this.diggIndex >= 18) {
          this.diggIndex = 0
        }
      } else {
        console.log('单', this.touchNum);
      }
      this.firstTime = secondTime
      this.debounce()
    },
    closeItemEvent(index) {
      this.diggList[index].isShow = false
    },
    // 重置点击
    debounce() {
      if(this.timer) {
        clearTimeout(this.timer)
      }
      let upTouchNum = this.touchNum
      this.timer = setTimeout(() => {
        this.touchNum = 0; // 重置触摸次数
      }, 350)

      if(upTouchNum <= 1) return
      if(this.timer2){
        clearTimeout(this.timer2)
      }
      this.timer2 = setTimeout(async () => {
        await this.$store.dispatch('chatIM/createCustomMessage', {
          touchNum: upTouchNum - 1
        })
        this.zIndex = 0
      }, 1000)
    },
    // 获取点击时间
    getTime() {
      let date = new Date();
      return date.getTime();
    }
  }
}
<\/script>

<style lang="scss" scoped>
@for $i from 0 to 18 {
  @keyframes digg-inner-#{$i} {
    0% {
      transform: translate(-50%, calc(-100% - 20rpx)) rotate(0) scale(1);
      opacity: 0.9;
    }
    25% {
      transform: translate(-50%, calc(-100% - 20rpx)) rotate(25deg) scale(1.5);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, calc(-100% - 20rpx)) rotate(0) scale(1);
      opacity: 0.9;
    }
    75% {
      transform: translate(-50%, calc(-100% - 20rpx)) rotate(-25deg) scale(1.5);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, calc(-100% - 20rpx)) rotate(0) scale(1);
      opacity: 0.9;
    }
  }
  @keyframes digg-br-#{$i} {
    0% {
      transform: translate(-50%, 0rpx) scale(1.2);
      opacity: 1;
    }
    25% {
      transform: translate(calc(-50% + #{random() * 10 + 6}rpx), -67rpx);
    }
    50% {
      transform: translate(calc(-50% - #{random() * 10 + 6}rpx), -134rpx);
    }
    75% {
      transform: translate(calc(-50% + #{random() * 10 + 6}rpx), -201rpx);
    }
    100% {
      transform: translate(-50%, -268rpx) scale(1);
      opacity: 0.2;
    }
  }
}
@keyframes total-animate {
  0% {
    transform: translate(-50%, calc(-100% - 30rpx)) scale(0.8);
    transform-origin: bottom center;
    opacity: 0.9;
  }
  25% {
    transform: translate(-50%, calc(-100% - 20rpx)) scale(1.2);
    transform-origin: bottom center;
    opacity: 1;
  }
  100% {
    transform: translate(-50%, calc(-100% - 40rpx)) scale(0.5);
    transform-origin: bottom center;
    opacity: 0.5;
  }
}
.digg-list-cls {
  .mask-digg {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 98;
    .total-cls {
      position: absolute;
      transform: translate(-50%, calc(-100% - 20rpx));
      color: #fff;
      font-size: 24rpx;
      animation: total-animate 500ms infinite 0s linear;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
  }
  .c-digg-cls {
    position: fixed;
    bottom: 112rpx;
    right: 0rpx;
    z-index: 97;
    width: 120rpx;
    height: 348rpx;
  }
  @for $i from 0 to 18 {
    .c-digg-inner-cls-#{$i} {
      position: absolute;
      width: 80rpx;
      height: 80rpx;
      transform: translate(-50%, calc(-100% - 20rpx));
      animation: digg-inner-#{$i} 1000ms infinite 0s linear;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
    .c-digg-br-cls-#{$i} {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80rpx;
      height: 80rpx;
      animation: digg-br-#{$i} 1000ms infinite 0s linear;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    }
  }
}
</style>
`)],-1),t("pre",null,[t("code",{class:"language-vue"},`<!-- digg-item -->
<template>
  <image v-show="modelValue" :src="formatImgUrl('/xyzx/static/live/digg-' + type % 6 + '.png')"></image>
</template>

<script>
export default {
  emits: ['closeItem'],
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    type: {
      type: Number,
      default: 0
    }
  },
  watch: {
    modelValue: {
      handler(newVal) {
        if(newVal) {
          let timer = setTimeout(() => {
            this.$emit('closeItem', this.type)
            clearTimeout(timer)
          }, 1000)
        }
      },
      immediate: true
    }
  }
}
<\/script>

<style lang="scss" scoped>
image {
  width: 72rpx;
  height: 72rpx;
}
</style>
`)],-1)])))}});export{d as default,c as excerpt,g as frontmatter};
