<template>
  <view class="min-h-screen p-[34px] pb-[140px] text-[#26332f]"><text class="text-[24px] tracking-[2px] text-[#729088]">A
      MOMENT WITH YOU</text>
    <view class="mt-[8px] text-[48px] font-bold leading-[1.2] text-[#1f2b27]">记录此刻</view><text
      class="mt-[14px] block text-[25px] text-[#82908b]">不用写得完美，真实就很好。</text>

    <view class="mt-[34px] rounded-[24px] bg-white p-[30px] shadow-[0_10px_30px_rgba(42,76,64,0.06)]"><text
        class="text-[28px] font-semibold text-[#33443e]">今天的心情更接近哪一种？</text><nut-radio-group v-model="selectedMood"
        direction="horizontal" class="mt-[28px] flex justify-between">
        <nut-radio v-for="mood in moods" :key="mood.name" :label="mood.name" shape="round"
          class="text-[22px] text-[#788681]">
          <template #icon>
            <IconFont :name="mood.icon" color="#735bf2" size="30" />
          </template>
          {{ mood.name }}
        </nut-radio>
      </nut-radio-group>
    </view>

    <view class="mt-[34px] rounded-[24px] bg-white p-[30px] shadow-[0_10px_30px_rgba(42,76,64,0.06)]"><text
        class="text-[28px] font-semibold text-[#33443e]">想对自己说些什么？</text><nut-textarea v-model="content"
        class="mt-[24px] h-[240px] w-full" :max-length="500" limit-show placeholder="写下今天值得被记住的一刻..." />
      <view class="flex items-center justify-between"><text class="text-[25px] text-[#82908b]">{{ content.length
      }}/500</text><nut-button type="primary" size="small" @click="saveRecord">保存记录</nut-button></view>
    </view>
    <CustomTabBar active="pages/record/index" />
    <nut-toast v-model:visible="showToast" msg="今天的心情已保存" />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconFont } from '@nutui/icons-vue'
import CustomTabBar from '@/components/custom/tabBar/index.vue'

defineOptions({ name: 'MoodRecord' })

const moods = [
  { name: '晴朗', key: 'sunny', icon: 'joy-smile' },
  { name: '平静', key: 'calm', icon: 'heart' },
  { name: '低落', key: 'low', icon: 'tips' },
  { name: '充实', key: 'full', icon: 'star' }
]
const selectedMood = ref('平静')
const content = ref('')
const showToast = ref(false)
const saveRecord = (): void => { showToast.value = true }
</script>

