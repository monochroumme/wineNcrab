import Vue from 'vue';

const eventBus = {};

eventBus.install = function (Vue) {
	Vue.prototype.$bus = new Vue();
	Vue.prototype.$bus.goTo = (link, router) => {
		switch (link) {
			case '/':
				Vue.prototype.$bus.$emit('changePage', 1);
				break;
			case '/about':
				Vue.prototype.$bus.$emit('changePage', 2);
				break;
			case '/menu':
				Vue.prototype.$bus.$emit('changePage', 3);
				break;
			case '/contacts':
				Vue.prototype.$bus.$emit('changePage', 4);
				break;
		}
		router.push(link);
	};
}

Vue.use(eventBus);
