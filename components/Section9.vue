<template>
	<section class="main-page-section-9">
		<div class="main-page-section-9-card-ru" v-if="$i18n.locale == 'ru'">
			<h4 class="main-page-section-9-card-ru-title">{{ $t('main-page.section.9.title') }}</h4>
			<div class="main-page-section-9-card-input-wrapper main-page-section-9-card-ru-input-wrapper">
				<input type="email" name="email" :placeholder="$t('main-page.section.9.email-placeholder')">
			</div>
			<button class="main-page-section-9-card-send-button main-page-section-9-card-ru-send-button">{{ $t('main-page.section.9.send-button') }}</button>
			<span class="main-page-section-9-card-ru-bottom-text">{{ $t('main-page.section.9.bottom-text') }}</span>
		</div>
		<div class="main-page-section-9-card-cn" v-if="$i18n.locale == 'cn'">
			<h4 class="main-page-section-9-card-cn-title">{{ $t('main-page.section.9.title') }}</h4>
			<!-- <div class="main-page-section-9-card-input-wrapper main-page-section-9-card-ru-input-wrapper">
				<input type="email" name="email" :placeholder="$t('main-page.section.9.email-placeholder')">
			</div>
			<button class="main-page-section-9-card-send-button main-page-section-9-card-ru-send-button">{{ $t('main-page.section.9.send-button') }}</button>
			<span class="main-page-section-9-card-ru-bottom-text">{{ $t('main-page.section.9.bottom-text') }}</span> -->
		</div>
	</section>
</template>