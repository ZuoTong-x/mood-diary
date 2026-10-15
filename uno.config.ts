import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  shortcuts: {
    'diary-surface': 'rounded-[24px] bg-white shadow-[0_10px_30px_rgba(42,76,64,0.06)]',
    'diary-page': 'min-h-screen p-[34px] pb-[140px] text-[#26332f]'
  }
})
