/**
 * Links used across the website. Change them here once (e.g. when the app goes live on
 * Google Play, or the web app moves to a custom domain).
 */
export const LINKS = {
  /** The Be Alert web app (the actual product in the browser). */
  webApp: 'https://be-alert.github.io/app/',
  /** Android app. Switch to the Play Store listing once published:
   *  https://play.google.com/store/apps/details?id=com.bealert.app */
  android: 'https://github.com/be-alert/app/releases/latest/download/BeAlert.apk',
  /** True once `android` points to Google Play (changes the button wording). */
  androidOnPlay: false,
  /** Owner / admin management console (inside the web app). */
  ownerConsole: 'https://be-alert.github.io/app/admin/dashboard',
  privacy: 'https://be-alert.github.io/app/privacy',
  terms: 'https://be-alert.github.io/app/terms',
} as const;
