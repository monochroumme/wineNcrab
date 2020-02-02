<template>
	<header class="header">
      <nav class="header-nav">
        <ul class="header-nav-list" :class="{ open: mobileMenuOpen }">
          <li class="header-nav-list-item"><nuxt-link to="/">{{ $t('header.nav-item-1') }}</nuxt-link></li>
          <li class="header-nav-list-item"><nuxt-link to="/about">{{ $t('header.nav-item-2') }}</nuxt-link></li>
          <li class="header-nav-list-item"><nuxt-link to="/menu">{{ $t('header.nav-item-3') }}</nuxt-link></li>
          <li class="header-nav-list-item"><nuxt-link to="/contacts">{{ $t('header.nav-item-4') }}</nuxt-link></li>
        </ul>
        <button class="header-nav-menu-button" @click="mobileMenuOpen = !mobileMenuOpen">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </button>
        <img class="header-logo" src="~/static/svg/logo.svg">
        <button class="change-language" @click="$i18n.locale == 'ru' ? $i18n.locale = 'cn' : $i18n.locale = 'ru'">
          <img src="~/static/svg/change-language.svg" :alt="$t('change-language')">
        </button>
      </nav>
    </header>
</template>

<script>
  export default {
    data() {
      return {
        mobileMenuOpen: false
      }
    },

    mounted() {
      window.addEventListener('scroll', () => {
        if (window.innerWidth <= 500 && window.innerHeight <= 1000)
          this.mobileMenuOpen = false;
      });
    }
  }
</script>
