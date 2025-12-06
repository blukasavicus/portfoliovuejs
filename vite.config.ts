import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({command}) => {
  let ret = {
    plugins: [vue()],
    base: '/'
  } satisfies UserConfig

  if (command==='build') {
    ret['base'] = "/portfoliovuejs/"
  }

  return ret
})
