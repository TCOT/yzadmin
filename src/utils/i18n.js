// translate router.meta.title, be used in breadcrumb sidebar tagsview
//切割国际化对象文件 目前格式是 中文|英文
export function splitLocale(obj,language) {
  for (let i in obj) {
    if (typeof(obj[i]) == 'object') {
      splitLocale(obj[i],language);
    }else {
      if(language == 'zh'){
        obj[i] = obj[i].split('|')[0].trim()
      }else if(language == 'en'){
        obj[i] = obj[i].split('|')[1].trim()
      }
    }
  }
  return obj
}

export function generateTitle(title) {
  const hasKey = this.$te('route.' + title)
  if (hasKey) {
    // $t :this method from vue-i18n, inject in @/lang/index.js
    const translatedTitle = this.$t('route.' + title)

    return translatedTitle
  }
  return title
}
