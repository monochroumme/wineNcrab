<template>
	<header class="header">
      <nav class="header-nav">
        <ul class="header-nav-list">
          <li class="header-nav-list-item" :class="{ active : activeIndex == 1 }"><a href="/" @click.prevent="$bus.goTo('/', $router)">{{ $t('header.nav-item-1') }}</a></li>
          <li class="header-nav-list-item" :class="{ active : activeIndex == 2 }"><a href="/about" @click.prevent="$bus.goTo('/about', $router)">{{ $t('header.nav-item-2') }}</a></li>
          <li class="header-nav-list-item" :class="{ active : activeIndex == 3 }"><a href="/menu" @click.prevent="$bus.goTo('/menu', $router)">{{ $t('header.nav-item-3') }}</a></li>
          <li class="header-nav-list-item" :class="{ active : activeIndex == 4 }"><a href="/contacts" @click.prevent="$bus.goTo('/contacts', $router)">{{ $t('header.nav-item-4') }}</a></li>
        </ul>
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
				activeIndex: this.getActiveIndex
			}
		},

		mounted() {
			this.$bus.$on('changePage', (i) => { this.activeIndex = i });
		},

		computed: {
			getActiveIndex() {
				let i = 0;
				switch (this.$router.history.current.path) {
					case '/':
						i = 1;
						break;
					case '/about':
						i = 2;
						break;
					case '/menu':
						i = 3;
						break;
					case '/contacts':
						i = 4;
						break;
				}
				return i;
			}
		}
	}
</script>
