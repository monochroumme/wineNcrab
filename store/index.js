export const state = () => ({
  locales: ['ru', 'cn'],
  locale: 'ru'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}