

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","messages":{"en":{"message":{"Email":"Email","firstName":"First Name","lastName":"Last Name","Price":"Price","Negotiate":"Negotiate"}},"fr":{"message":{"Email":"Email fr","firstName":"Nom de famille","lastName":"Nom de famille","Price":"Prix","Negotiate":"Négocier"}},"de":{"message":{"Email":"Email de","firstName":"Erster Name","lastName":"Nachname","Price":"Preis","Negotiate":"Verhandeln"}}}},
  vueI18nLoader: false,
  locales: ["de","en","fr"],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: true,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"de"},{"code":"en"},{"code":"fr"}],
  localeCodes: ["de","en","fr"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "}",
}

export const localeMessages = {}
