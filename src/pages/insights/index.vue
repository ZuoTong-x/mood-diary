<template>
  <view class="min-h-screen p-[34px] pb-[140px] text-[#26332f]"><text class="text-[24px] tracking-[2px] text-[#729088]">A
      LITTLE REFLECTION</text>
    <view class="mt-[8px] text-[48px] font-bold leading-[1.2] text-[#1f2b27]">心迹</view><text
      class="mt-[14px] block text-[25px] text-[#82908b]">看看最近的你，正在经历什么。</text>

    <view
      class="mt-[36px] flex items-center justify-around rounded-[24px] bg-white px-[12px] py-[28px] shadow-[0_10px_30px_rgba(42,76,64,0.06)]">
      <view class="flex min-w-[28%] flex-col items-center"><text
          class="text-[38px] font-bold text-[#d18a2d]">12</text><text
          class="mt-[8px] text-[21px] text-[#899690]">本月记录</text></view>
      <view class="h-[56px] w-px bg-[#e4eae7]"></view>
      <view class="flex min-w-[28%] flex-col items-center"><text
          class="text-[38px] font-bold text-[#d18a2d]">7</text><text
          class="mt-[8px] text-[21px] text-[#899690]">连续天数</text></view>
      <view class="h-[56px] w-px bg-[#e4eae7]"></view>
      <view class="flex min-w-[28%] flex-col items-center"><text
          class="text-[38px] font-bold text-[#d18a2d]">晴朗</text><text
          class="mt-[8px] text-[21px] text-[#899690]">常见心情</text></view>
    </view>

    <view class="my-[42px] mb-[18px] flex justify-between text-[30px] font-bold text-[#33443e]"><text>本月情绪分布</text><text
        class="text-[25px] font-normal text-[#82908b]">10月</text></view>
    <view class="rounded-[24px] bg-white p-[30px] shadow-[0_10px_30px_rgba(42,76,64,0.06)]">
      <view v-for="item in emotions" :key="item.name" class="my-[22px] flex items-center">
        <view class="flex w-[130px] items-center text-[23px] text-[#687970]">
          <IconFont :name="item.icon" :color="item.color" size="24" /><text class="ml-[10px]">{{ item.name }}</text>
        </view><nut-progress :percentage="item.value" :show-text="false" :stroke-width="8" :color="item.color" /><text
          class="w-[58px] text-right text-[21px] text-[#789087]">{{ item.value }}%</text>
      </view>
    </view>

    <view class="my-[42px] mb-[18px] flex justify-between text-[30px] font-bold text-[#33443e]"><text>给自己的话</text></view>
    <view class="relative rounded-[24px] bg-white px-[30px] py-[32px] pl-[52px] shadow-[0_10px_30px_rgba(42,76,64,0.06)]">
      <IconFont name="message" class="absolute left-[20px] top-[12px]" color="#735bf2" size="28" /><text
        class="text-[27px] leading-[1.7] text-[#5c7068]">你已经比昨天更了解自己一点了，这就很了不起。</text>
    </view>
    <CustomTabBar active="pages/insights/index" />
  </view>
</template>

<script lang="ts" setup>
import CustomTabBar from '@/components/custom/tabBar/index.vue'
import { IconFont } from '@nutui/icons-vue'

defineOptions({ name: 'MoodInsights' })

interface EmotionItem {
  name: string
  key: 'sunny' | 'calm' | 'full' | 'low'
  value: number
  color: string
  icon: string
}

const emotions: EmotionItem[] = [
  { name: '晴朗', key: 'sunny', value: 62, color: '#735bf2', icon: 'joy-smile' },
  { name: '平静', key: 'calm', value: 44, color: '#f3c77f', icon: 'heart' },
  { name: '充实', key: 'full', value: 35, color: '#d9ad68', icon: 'star' },
  { name: '低落', key: 'low', value: 18, color: '#9da9b3', icon: 'tips' }
]
</script>

