/*
 * @Date: 2024-05-27 15:29:29
 * @LastEditors: 牛智超
 * @LastEditTime: 2024-05-27 16:49:33
 * @FilePath: \personal_resume\src\locales\i18n.ts
 */
import { createI18n } from 'vue-i18n';

// 静态导入地区文件
import enMessages from './locales/language/en.json';
import zhMessages from './locales/language/zh.json';

// 使用导入的消息定义消息对象
const messages = {
  en: enMessages,
  zh: zhMessages,
  // 在这里添加其他地区...
};

// 从 localStorage 中获取语言设置，如果不存在则默认为英文
// const localeFromLocalStorage = localStorage.getItem('locale') as "en" | "zh" || 'en';

// 创建 i18n 实例
const i18n = createI18n({
  locale: 'zh',
  messages,
});

// 设置 i18n 语言的函数
function setI18nLanguage(lang: "en" | "zh") {
  i18n.global.locale = lang;
  document.querySelector('html')?.setAttribute('lang', lang);
  return lang;
}

// 异步加载语言的函数
async function loadLanguageAsync(lang: "en" | "zh") {
  // 如果需要的话，添加异步加载语言的逻辑
  i18n.global.locale = lang;
}

export { i18n, loadLanguageAsync };
