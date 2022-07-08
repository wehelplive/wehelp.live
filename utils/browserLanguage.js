export function getBrowserLocale() {
  const currentLocale = localStorage.getItem('currentLocale')
  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language

  if (!navigatorLocale && !currentLocale) {
    return undefined
  }

  const trimmedLocale = navigatorLocale
    ? navigatorLocale.trim().split(/-|_/)[0]
    : navigatorLocale.trim()

  return currentLocale || trimmedLocale
}
