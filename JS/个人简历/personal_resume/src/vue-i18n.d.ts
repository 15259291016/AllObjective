/*
 * @Date: 2024-05-27 15:37:13
 * @LastEditors: 牛智超
 * @LastEditTime: 2024-05-27 15:37:19
 * @FilePath: \personal_resume\src\vue-i18n.d.ts
 */
import 'vue-i18n';

// 为 `vue-i18n` 扩展 Vue.js 的类型定义
declare module 'vue-i18n' {
  export interface DefineLocaleMessage {
    welcome: string;
    message: string;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t(key: string): string;
    $i18n: VueI18n;
  }
}
