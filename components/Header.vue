<template>
	<header class="header">
      <nav class="header-nav">
        <ul class="header-nav-list" :class="{ open: mobileMenuOpen }">
          <li class="header-nav-list-item"><custom-nuxt-link :to="'/'">{{ $t('header.nav-item-1') }}</custom-nuxt-link></li>
          <li class="header-nav-list-item"><custom-nuxt-link :to="'/about'">{{ $t('header.nav-item-2') }}</custom-nuxt-link></li>
          <li class="header-nav-list-item"><custom-nuxt-link :to="'/menu'">{{ $t('header.nav-item-3') }}</custom-nuxt-link></li>
          <li class="header-nav-list-item"><custom-nuxt-link :to="'/contacts'">{{ $t('header.nav-item-4') }}</custom-nuxt-link></li>
        </ul>
        <button class="header-nav-menu-button" @click="mobileMenuOpen = !mobileMenuOpen">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </button>
        <img class="header-logo" src="~/static/svg/logo.svg">
        <button class="change-language" @click="$i18n.locale == 'ru' ? $router.push(switchLocalePath('cn')) : $router.push(switchLocalePath('ru'))">
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
