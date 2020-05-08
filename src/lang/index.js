import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import locale from './locale'

import {splitLocale} from "@/utils/i18n";
import {DeepCopy} from "@/utils/base";


Vue.use(VueI18n)
const enLocale = splitLocale(DeepCopy(locale), 'en')
const zhLocale = splitLocale(DeepCopy(locale), 'zh')

console.dir(locale);
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage
  return 'zh'
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
