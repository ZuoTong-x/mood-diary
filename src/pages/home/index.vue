<template>
  <view class="min-h-screen p-[34px] pb-[140px] text-[#26332f]">
    <view class="flex items-start justify-between">
      <view>
        <text class="text-[24px] tracking-[2px] text-[#729088]">SEE YOURSELF</text>
        <view class="mt-[8px] text-[48px] font-bold leading-[1.2] text-[#1f2b27]">你好，今天感觉如何？</view>
      </view>
      <view class="rounded-[14px] bg-[#fbeed7] px-[16px] py-[12px] text-center text-[22px] text-[#b87921]">10月13日<text class="mt-[3px] block text-[20px] text-[#7b958c]">周二</text></view>
    </view>

    <view class="mt-[38px] rounded-[24px] bg-[#fbeed7] p-[34px] shadow-[0_10px_30px_rgba(42,76,64,0.06)]">
      <view class="flex items-center justify-between">
        <view>
          <text class="text-[24px] text-[#b87921]">今日心情</text>
          <view class="mt-[10px] text-[48px] font-bold text-[#9b6419]">晴朗</view>
        </view>
        <IconFont name="joy-smile" color="#FFBA5A" size="48" />
      </view>
      <text class="my-[24px] block text-[26px] leading-[1.6] text-[#56776d]">给自己一点时间，听见内心细小的声音。</text>
      <nut-button class="w-full" type="primary" @click="goRecord">记录此刻</nut-button>
    </view>

    <view class="my-[42px] mb-[18px] flex justify-between text-[30px] font-bold text-[#33443e]"><text>最近记录</text><text class="text-[24px] font-normal text-[#5f8d7d]" @click="goRecord">查看全部</text></view>
    <view class="rounded-[24px] bg-white p-[28px] shadow-[0_10px_30px_rgba(42,76,64,0.06)]">
      <view class="flex items-center justify-between text-[23px] text-[#8a9792]"><text>10月12日 · 晚间</text><nut-tag type="success" plain>平静</nut-tag></view>
      <text class="mt-[20px] block text-[32px] font-bold text-[#2b3b35]">慢慢走，也没有关系</text>
      <text class="mt-[12px] block text-[25px] leading-[1.6] text-[#788681]">今天把手边的事情一件件做完，窗外的风很轻，心也跟着安静下来。</text>
    </view>

    <view class="my-[42px] mb-[18px] flex justify-between text-[30px] font-bold text-[#33443e]"><text>今天的小提醒</text></view>
    <view class="flex items-center rounded-[24px] bg-white p-[24px] text-[24px] leading-[1.5] text-[#667871] shadow-[0_10px_30px_rgba(42,76,64,0.06)]">
      <IconFont name="star" class="mr-[16px]" color="#FFBA5A" size="26" /><text>情绪没有好坏，每一种感受都值得被看见。</text>
    </view>
    <CustomTabBar active="pages/home/index" />
  </view>
</template>

<script setup lang="ts">
import Taro from '@tarojs/taro'
import { IconFont } from '@nutui/icons-vue'
import CustomTabBar from '@/components/custom/tabBar/index.vue'

defineOptions({ name: 'HomePage' })

const goRecord = () => Taro.switchTab({ url: '/pages/record/index' })
</script>

