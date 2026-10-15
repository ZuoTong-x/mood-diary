<template>
  <view class="min-h-screen p-[34px] pb-[140px] text-[#26332f]"><text class="text-[24px] tracking-[2px] text-[#729088]">A QUIET PLACE FOR YOU</text><view class="mt-[8px] text-[48px] font-bold leading-[1.2] text-[#1f2b27]">我的</view>
    <view class="mt-[38px] flex items-center rounded-[24px] bg-white p-[30px] shadow-[0_10px_30px_rgba(42,76,64,0.06)]"><view class="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#fbeed7] text-[#d18a2d]"><IconFont name="my" color="#D18A2D" size="42" /></view>
      <view class="ml-[20px] flex flex-1 flex-col"><text class="mb-[8px] text-[34px] font-bold text-[#2c3d36]">见己</text><text class="text-[22px] text-[#82908b]">愿你在每一次记录里，更靠近自己。</text></view><IconFont name="arrow-right" color="#C9A56D" size="24" />
    </view>
    <view class="my-[42px] mb-[18px] text-[30px] font-bold text-[#33443e]">我的空间</view><view class="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(42,76,64,0.06)]">
      <nut-cell title="记录总数" desc="32 篇" is-link />
      <nut-cell title="收藏的文字" desc="8 条" is-link />
      <nut-cell title="心情提醒" desc="每天 21:00" is-link />
    </view>
    <view class="my-[42px] mb-[18px] text-[30px] font-bold text-[#33443e]">更多</view><view class="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(42,76,64,0.06)]"><nut-cell title="关于见己" is-link /><nut-cell title="隐私与安全" is-link /></view>
    <CustomTabBar active="pages/profile/index" />
  </view>
</template>

<script setup lang="ts">
import CustomTabBar from '@/components/custom/tabBar/index.vue'
import { IconFont } from '@nutui/icons-vue'

defineOptions({ name: 'UserProfile' })
</script>

