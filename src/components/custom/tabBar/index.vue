<template>
  <view class="fixed bottom-0 left-0 right-0 z-1000 flex h-[112px] border-t border-[#f3dfbf] bg-white/98 px-[22px] py-[10px] pb-[calc(10px+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(190,133,47,0.1)]">
    <view v-for="item in tabs" :key="item.pagePath" class="flex flex-1 flex-col items-center justify-center text-[21px] text-[#b2aaa0] transition-colors duration-200" :class="{ 'text-[#ffba5a] font-bold': props.active === item.pagePath }"
      @click="switchTab(item.pagePath)">
      <view class="mb-[5px] flex h-[42px] w-[52px] items-center justify-center rounded-[16px] text-[34px] leading-none" :class="{ 'bg-[#fbeed7] -translate-y-0.5': props.active === item.pagePath }">
        <IconFont :name="item.icon" :color="props.active === item.pagePath ? '#FFBA5A' : '#B2AAA0'" size="26" />
      </view>
      <text class="leading-none">{{ item.text }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'
import { IconFont } from '@nutui/icons-vue'

defineOptions({ name: 'CustomTabBar' })

interface TabItem {
  pagePath: string
  text: string
  key: 'home' | 'record' | 'insights' | 'profile'
  icon: string
}

const props = defineProps<{ active: string }>()

const tabs: TabItem[] = [
  { pagePath: 'pages/home/index', text: '首页', key: 'home', icon: 'home' },
  { pagePath: 'pages/record/index', text: '记录', key: 'record', icon: 'edit' },
  { pagePath: 'pages/insights/index', text: '心迹', key: 'insights', icon: 'heart-fill' },
  { pagePath: 'pages/profile/index', text: '我的', key: 'profile', icon: 'my' }
]

const switchTab = (pagePath: string) => {
  if (pagePath !== props.active) Taro.switchTab({ url: `/${pagePath}` })
}
</script>
