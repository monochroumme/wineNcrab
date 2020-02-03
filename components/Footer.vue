<template>
	<footer class="footer">
		<div class="footer-logo-wrapper">
			<img class="footer-logo" src="~/static/svg/logo-russia-in-touch.svg" alt="RUSSIA in touch">
			<div class="footer-logo-text-wrapper">
				<span class="footer-logo-text-russia">RUSSIA</span>
				<span class="footer-logo-text-in-touch">in touch</span>
			</div>
		</div>
		<div class="footer-bar">
			<img class="footer-bar-logo" src="~/static/svg/logo-footer.svg" alt="WINE & CRAB">
			<button class="change-language" @click="$i18n.locale == 'ru' ? $router.push(switchLocalePath('cn')) : $router.push(switchLocalePath('ru'))">
      			<img src="~/static/svg/change-language-dark.svg" :alt="$t('change-language')">
        	</button>
		</div>
	</footer>
</template>