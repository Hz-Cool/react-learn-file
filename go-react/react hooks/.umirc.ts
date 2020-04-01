// ref: https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  // treeShaking: true,
  dva: {
    immer: true,
  },
  dynamicImport: {
    loading: '@/loading',
  },
  title: 'react hooks',
  hash: true,
  ignoreMomentLocale: true,
  targets: {
    ie: 11,
  },
  polyfill: {
    imports: ['core-js/stable'],
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],
});
