<template>
	<nuxt-link :to="localePath(to)"><slot></slot></nuxt-link>
</template>

<script>
	export default {
		props: ['to']
	}
</script>