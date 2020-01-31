<template>
  <div class="main-page">
    <section class="main-page-welcome">
      <img class="main-page-welcome-bg" src="~/static/pics/H68A4312.jpg">
      <img class="main-page-welcome-logo" src="~/static/svg/logo.svg">
      <div class="main-page-welcome-text-area">
        <div class="main-page-welcome-text-bg"><span>{{ $t('main-page.welcome.title') }}</span></div>
        <div class="main-page-welcome-text-bg"><span v-html="getWelcomeSubtitle"></span></div>
      </div>
      <span class="main-page-welcome-text-bottom">{{ $t('main-page.welcome.bottom-text') }}</span>
    </section>
    <section class="main-page-section-1">
      <div class="main-page-section-1-inner-wrapper">
        <div class="main-page-section-1-inner">
          <p>
            {{ $t('main-page.section.1.text') }}
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
  </div>
</template>

<script>
  export default {
    computed: {
      getWelcomeSubtitle() {
        let html = this.$t('main-page.welcome.subtitle').split(' ');
        html[0] = '<span class="text-purple">' + html[0] + '</span>';
        return html.join(' ');
      }
    }
  }
</script>
