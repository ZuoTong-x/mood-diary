<template>
  <view class="diary-page">
    <text class="text-[24px] tracking-[2px] text-[#729088]">YOUR STORY, DAY BY DAY</text>
    <view class="mt-[8px] text-[48px] font-bold leading-[1.2] text-[#1f2b27]">时间线</view>
    <text class="mt-[14px] block text-[25px] text-[#82908b]">把每一次感受，串成一条温柔的线。</text>
    <nut-list :list-data="entries" :container-height="520" :estimate-row-height="190" :margin="16"
      class="mt-[36px] pb-[30px]">
      <template #default="{ item }">
        <view class="relative ml-[18px] border-l-2 border-[#f3dfbf] pl-[34px]">
          <view class="relative mb-[28px] rounded-[24px] bg-white p-[26px] shadow-[0_10px_30px_rgba(42,76,64,0.06)]">
            <view
              class="absolute -left-[46px] top-[28px] h-[20px] w-[20px] rounded-full border-[5px] border-[#fbeed7] bg-[#735bf2]">
            </view>
            <view class="flex items-center justify-between"><text class="text-[22px] text-[#b87921]">{{ item.date
            }}</text>
              <IconFont :name="item.icon" :color="item.color" size="24" />
            </view>
            <text class="mt-[14px] block text-[30px] font-bold text-[#2b3b35]">{{ item.title }}</text>
            <text class="mt-[10px] block text-[24px] leading-[1.6] text-[#788681]">{{ item.content }}</text>
            <view class="mt-[18px] inline-flex rounded-full bg-[#fbeed7] px-[14px] py-[6px] text-[20px] text-[#b87921]">{{
              item.mood }}</view>
          </view>
        </view>
      </template>
    </nut-list>
    <CustomTabBar active="pages/timeline/index" />
  </view>
</template>

<script setup lang="ts">
import { IconFont } from '@nutui/icons-vue'
import CustomTabBar from '@/components/custom/tabBar/index.vue'

defineOptions({ name: 'MoodTimeline' })

interface TimelineEntry {
  date: string
  title: string
  content: string
  mood: string
  icon: string
  color: string
}

const entries: TimelineEntry[] = [
  { date: '10月13日 · 晚间', title: '慢慢走，也没有关系', content: '今天把手边的事情一件件做完，窗外的风很轻，心也跟着安静下来。', mood: '平静', icon: 'heart-fill', color: '#d9ad68' },
  { date: '10月12日 · 午后', title: '给自己一点掌声', content: '完成了拖延很久的事情，原来向前走一步，就已经值得庆祝。', mood: '充实', icon: 'star-fill-n', color: '#735bf2' },
  { date: '10月10日 · 清晨', title: '新的一天', content: '阳光落在窗边，今天也想带着轻盈的心情出发。', mood: '晴朗', icon: 'joy-smile', color: '#f3c77f' },
  { date: '10月8日 · 夜晚', title: '听见自己的声音', content: '允许自己暂时慢一点，情绪也需要被好好安放。', mood: '低落', icon: 'tips', color: '#9da9b3' }
]
</script>
