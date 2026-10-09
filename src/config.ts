/**
 * Links used across the website. Change them here once (e.g. when the app goes live on
 * Google Play, or the web app moves to a custom domain).
 */
export const LINKS = {
  /** The Be Alert web app (the actual product in the browser). */
  webApp: 'https://razachaudhary5512-a11y.github.io/smart-radar/',
  /** Android app. Switch to the Play Store listing once published:
   *  https://play.google.com/store/apps/details?id=com.bealert.app */
  android: 'https://github.com/razachaudhary5512-a11y/smart-radar/releases/latest/download/BeAlert.apk',
  /** True once `android` points to Google Play (changes the button wording). */
  androidOnPlay: false,
  privacy: 'https://razachaudhary5512-a11y.github.io/smart-radar/privacy',
  terms: 'https://razachaudhary5512-a11y.github.io/smart-radar/terms',
} as const;
