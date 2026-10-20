<template>
  <view class="pointer-events-none fixed bottom-0 left-0 right-0 z-1000 h-[217px] bg-[#fffffd] pb-[env(safe-area-inset-bottom)]">
    <svg class="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 390 119" preserveAspectRatio="none" aria-hidden="true">
      <g filter="url(#filter0_d_tabbar)">
        <path d="M3.35095 42.5676H0V143.551H390V42.5618L277.576 27.2564C277.576 27.2564 249.739 23.8279 241.592 42.0466C237.689 50.7737 235.539 56.273 234.237 59.98C233.073 63.2898 230.229 79.5872 211.011 81.5823C191.793 83.5774 181.145 81.5823 181.145 81.5823C181.145 81.5823 164.142 80.0606 158.432 62.5425C152.723 45.0244 146.431 26.5015 125.367 27.0943C104.303 27.6868 3.35095 42.5676 3.35095 42.5676Z" fill="white" />
      </g>
      <defs>
        <filter id="filter0_d_tabbar" x="-30" y="0" width="450" height="176.551" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0784314 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_tabbar" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_tabbar" result="shape" />
        </filter>
      </defs>
    </svg>

    <view class="absolute left-0 right-0 top-0 flex h-[217px] items-start">
      <view
        v-for="item in tabs"
        :key="item.pagePath"
        class="pointer-events-auto relative flex h-[217px] flex-1 items-start justify-center"
        @click="switchTab(item.pagePath)"
      >
        <view v-if="item.center" class="absolute top-0 flex h-[121px] w-[121px] items-center justify-center rounded-full bg-[#735bf2] shadow-[0_3px_30px_rgba(0,0,0,0.078)]">
          <IconFont name="uploader" color="#ffffff" size="25" />
        </view>
        <IconFont v-else class="absolute top-[109px]" :name="item.icon" :color="props.active === item.pagePath ? '#735BF2' : '#94A0B5'" size="20" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'
import { IconFont } from '@nutui/icons-vue'

defineOptions({ name: 'CustomTabBar' })

interface TabItem {
  pagePath: string
  icon: string
  center?: boolean
}

const props = defineProps<{ active: string }>()

const tabs: TabItem[] = [
  { pagePath: 'pages/home/index', icon: 'home' },
  { pagePath: 'pages/timeline/index', icon: 'date' },
  { pagePath: 'pages/record/index', icon: 'add', center: true },
  { pagePath: 'pages/insights/index', icon: 'message' },
  { pagePath: 'pages/profile/index', icon: 'my' }
]

const switchTab = (pagePath: string) => {
  if (pagePath !== props.active) Taro.switchTab({ url: `/${pagePath}` })
}
</script>
