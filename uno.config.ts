import { defineConfig, presetUno } from 'unocss'

export default defineConfig({

  presets: [presetUno()],
  theme: {
    colors: {
      primary: '#735BF2',
      secondary: '#94A0B5',
      background: '#F6F3FF',
      surface: '#FFFFFF',
      textPrimary: '#26332F',
      textSecondary: '#94A0B5',
      textDisabled: '#C1C7CD',
      border: '#E5E5E5',
    },
  },
  shortcuts: {

    'diary-surface': 'rounded-[24px] bg-white shadow-[0_10px_30px_rgba(42,76,64,0.06)]',
    'diary-page': 'min-h-screen p-[34px] pb-[140px] text-[#26332f]'
  }
})
