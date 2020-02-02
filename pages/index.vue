<template>
  <div class="main-page">
    <section class="main-page-welcome">
      <img class="main-page-welcome-bg" src="~/static/pics/H68A4312.jpg">
      <div class="main-page-welcome-text-area">
        <div class="main-page-welcome-text-bg"><span>{{ $t('main-page.welcome.title') }}</span></div>
        <div class="main-page-welcome-text-bg"><span v-html="getEditedPurpleText('main-page.welcome.subtitle', 0)"></span></div>
      </div>
      <span class="main-page-welcome-text-bottom">{{ $t('main-page.welcome.bottom-text') }}</span>
    </section>
    <section class="main-page-section-1">
      <div class="main-page-section-1-inner-wrapper">
        <div class="main-page-section-1-inner">
          <p>
            {{ $t('main-page.section.1') }}
          </p>
          <img src="~/static/pics/Wine_crab_wide.jpg">
        </div>
      </div>
    </section>
    <section class="main-page-section-2">
      <div class="main-page-section-2-inner-wrapper">
        <div class="main-page-section-2-inner">
          <div class="main-page-section-2-text-area">
            <span class="main-page-section-2-text-line" v-for="text in $t('main-page.section.2.lines')">{{ text }}</span>
          </div>
          <div class="main-page-section-2-imgs">
            <div class="main-page-section-2-img-wrapper"><img src="~/static/pics/Crabs_03.jpg"></div>
            <div class="main-page-section-2-img-wrapper"><img src="~/static/pics/Crabs_01.jpg"></div>
            <div class="main-page-section-2-img-wrapper"><img src="~/static/pics/Crabs_04.jpg"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="main-page-section-3">
      <p class="main-page-section-3-text-top">{{ $t('main-page.section.3.text-top') }}</p>
      <div class="main-page-section-3-inner">
        <div class="main-page-section-3-img-wrapper">
          <img src="~/static/pics/eFFL_3221.jpg">
        </div>
        <div class="main-page-section-3-text-right">
          <div class="main-page-section-3-title">
            <span class="text-purple">{{ $t('main-page.section.3.restos') }}</span><span>{{ $t('main-page.section.3.title') }}</span>
          </div>
          <p v-html="$t('main-page.section.3.text-right')"></p>
        </div>
      </div>
    </section>
    <section class="main-page-section-4">
      <div class="main-page-section-4-top">
        <div class="main-page-section-4-top-white"></div>
        <div class="main-page-section-4-top-gray"></div>
      </div>
      <div class="main-page-section-4-bottom">
        <div class="main-page-section-4-left">
          <img src="~/static/pics/IMG_0301.jpg">
        </div>
        <div class="main-page-section-4-right">
          <p v-html="$t('main-page.section.4')"></p>
          <div class="main-page-section-4-right-bottom">
            <img class="main-page-section-4-right-pic" src="~/static/pics/IROD9766.jpg">
            <div class="main-page-section-4-right-white-blank"></div>
          </div>
        </div>
        <img class="main-page-section-4-crab" src="~/static/pics/Crab-PNG.png">
      </div>
    </section>
    <section class="main-page-section-5">
      <h3 class="main-page-section-5-title" v-html="getEditedPurpleText('main-page.section.5.title', 1)"></h3>
      <div class="main-page-section-5-top">
        <div class="main-page-section-5-download-link main-page-section-5-download-link-top">
          <a :href="$t('main-page.section.5.download.link')" target="_blank">{{ $t('main-page.section.5.download.text') }}</a>
        </div>
        <div class="main-page-section-5-top-left">
          <div class="main-page-section-5-download-link">
            <a :href="$t('main-page.section.5.download.link')" target="_blank">{{ $t('main-page.section.5.download.text') }}</a>
          </div>
          <div class="main-page-section-5-top-text-wrapper">
            <p>{{ $t('main-page.section.5.text.top') }}</p>
          </div>
        </div>
        <div class="main-page-section-5-top-right">
          <img src="~/static/pics/09.jpg">
        </div>
      </div>
      <div class="main-page-section-5-bottom-text-wrapper">
        <p>{{ $t('main-page.section.5.text.bottom') }}</p>
      </div>
    </section>
    <section class="main-page-section-6">
      <div class="main-page-section-6-inner">
        <p v-for="p in $t('main-page.section.6').length" :class="{ 'main-page-section-6-bold' : p == $t('main-page.section.6').length }">
          <span v-for="line in $t('main-page.section.6')[p-1]">{{ line }}</span>
        </p>
      </div>
    </section>
    <section class="main-page-section-7">
      <div class="main-page-section-7-inner">
        <div class="main-page-section-7-left">
          <h3 class="main-page-section-7-title">
            <span v-for="line in $t('main-page.section.7.title')">{{ line }}</span>
          </h3>
          <img src="~/static/pics/IROD5874.jpg">
        </div>
        <div class="main-page-section-7-right">
          <img src="~/static/pics/IMG_0037.jpg">
        </div>
      </div>
    </section>
    <section class="main-page-section-8">
      <h3 class="main-page-section-8-title">{{ $t('main-page.section.8.title') }}</h3>
      <div class="main-page-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <img v-for="(slide, i) in section8Pics" :src="slide" :key="i" class="swiper-slide" />
          </div>
          <button class="main-page-slider-arrow-left" @click="mySwiper.slidePrev()">
            <img src="~/static/svg/arrow-left.svg">
          </button>
          <button class="main-page-slider-arrow-right" @click="mySwiper.slideNext()">
            <img src="~/static/svg/arrow-right.svg">
          </button>
        </div>
      </div>
    </section>
    <section class="main-page-section-9">
      <div class="main-page-section-9-top">
        <h3 class="main-page-section-9-title">{{ $t('main-page.section.9.title') }}</h3>
        <div class="main-page-section-9-top-gray-area"></div>
      </div>
      <div class="main-page-section-9-bottom">
        <div class="main-page-section-9-left main-page-section-9-address-area">
          <span v-html="$t('main-page.section.9.text.left')"></span>
        </div>
        <div class="main-page-section-9-address-area">
          <span v-html="$t('main-page.section.9.text.right')"></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    beforeMount () {
      if (process.browser) {
        require('swiper/dist/css/swiper.css');
        const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr');
        Vue.use(VueAwesomeSwiper);
      }
    },

    data() {
      return {
        section8Pics: [
          '/pics/1.jpg',
          '/pics/2.jpeg',
          '/pics/3.jpeg',
          '/pics/4.jpeg',
          '/pics/5.jpg',
          '/pics/1.jpg',
          '/pics/2.jpeg',
          '/pics/3.jpeg',
          '/pics/4.jpeg',
          '/pics/5.jpg'
        ],
        swiperOption: {
          spaceBetween: 2,
          slidesPerView: 5,
          loop: true,
          breakpoints: {
            900: {
              slidesPerView: 4
            },
            700: {
              slidesPerView: 3
            },
            500: {
              slidesPerView: 2
            },
            400: {
              slidesPerView: 1
            }
          }
        }
      }
    },

    methods: {
      getEditedPurpleText(text, index) {
        let html = this.$t(text).split(' ');
        if (html[index])
          html[index] = '<span class="text-purple">' + html[index] + '</span>';
        return html.join(' ');
      }
    }
  }
</script>
