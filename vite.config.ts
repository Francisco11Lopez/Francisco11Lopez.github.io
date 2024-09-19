import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'

import {
  defineConfig,
  loadEnv,
  type UserConfig,
  type UserConfigExport
} from 'vite'

interface IViteConfigEnv {
  readonly [x: string]: string | undefined
  readonly TZ?: string
  readonly VITE_BASE_URL?: string
  readonly VITE_PUBLIC_FOLDER?: string
  readonly VITE_OUTDIR_FOLDER?: string
  readonly VITE_DEV_PORT?: string
  readonly VITE_PREV_PORT?: string
}

export default ({ mode }: UserConfig): UserConfigExport => {
  const env: IViteConfigEnv = { ...process.env, ...loadEnv(mode!, process.cwd()) }

  return defineConfig({
    appType: 'spa',
    publicDir: env.VITE_PUBLIC_URL,
    plugins: [react()],
    build: { outDir: env.VITE_OUTDIR_FOLDER },
    resolve: {
      alias: {
        '@app': resolve(__dirname, './src/app'),
        '@components': resolve(__dirname, './src/components'),
        '@layouts': resolve(__dirname, './src/layouts'),
        '@utilities': resolve(__dirname, './src/utilities'),
        '@router': resolve(__dirname, './src/router'),
        '@gifs': resolve(__dirname, './src/assets/gifs'),
        '@images': resolve(__dirname, './src/assets/images'),
        '@icons': resolve(__dirname, './src/assets/icons'),
        '@stylesheets': resolve(__dirname, './src/stylesheets'),
        '@config': resolve(__dirname, './src/config'),
        '@interfaces': resolve(__dirname, './src/interfaces'),
        '@data': resolve(__dirname, './src/data'),
        '@services': resolve(__dirname, './src/services'),
        '@hooks': resolve(__dirname, './src/hooks'),
        '@store': resolve(__dirname, './src/store'),
        '@pages': resolve(__dirname, './src/pages'),
        '@tests': resolve(__dirname, './tests')
      }
    },
    server: {
      host: true,
      port: +env.VITE_DEV_PORT!
      /* proxy: {
        [env.VITE_BASE_URL!]: {
          target: env.VITE_PROXY_TARGET_DEV,
          changeOrigin: true
        }
      } */
    },
    preview: {
      host: true,
      port: +env.VITE_PREV_PORT!
    },
    clearScreen: true
  })
}
