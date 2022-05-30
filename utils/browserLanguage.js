export function getBrowserLocale() {
  const countryCodeOnly = true
  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language

  if (!navigatorLocale) {
    return undefined
  }

  const trimmedLocale = countryCodeOnly
    ? navigatorLocale.trim().split(/-|_/)[0]
    : navigatorLocale.trim()

  return trimmedLocale
}
