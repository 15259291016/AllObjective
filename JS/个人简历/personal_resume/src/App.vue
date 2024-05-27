<!--
 * @Date: 2024-05-27 15:09:42
 * @LastEditors: 牛智超
 * @LastEditTime: 2024-05-27 17:04:25
 * @FilePath: \personal_resume\src\App.vue
-->

<template>
  <header>
    <div class="wrapper">
      <a @click="changeLanguage('en')">English</a>
      <a @click="changeLanguage('zh')">中文</a>
      <HelloWorld msg="This is Vue" />
      <bar style="border-style: solid; border-width: 1px; height: 100%; width: 1px;color: tomato;">
        <div></div>
      </bar>
      <div style="width: 80%;border-top: 1px solid tomato;overflow: hidden;position: relative;"></div>
      <nav>
        <RouterLink to="/">{{$t('个人介绍')}}</RouterLink>
        <RouterLink to="/about">{{$t('项目经历')}}</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { loadLanguageAsync } from './i18n'
import HelloWorld from './components/HelloWorld.vue'
async function changeLanguage(language: string) {
  if (language === 'en' || language === 'zh') {
    // 将 language 参数断言为 "en" | "zh" 类型
    await loadLanguageAsync(language);
    localStorage.setItem('locale', language);
  }
}
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 150%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
./locales/i18n./i18n