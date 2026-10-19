/**
 * Links used across the website. Change them here once (e.g. when the app goes live on
 * Google Play, or the web app moves to a custom domain).
 */
export const LINKS = {
  /** The Be Alert web app (the actual product in the browser). */
  webApp: 'https://app.bealert.online/',
  /** Android app. Switch to the Play Store listing once published:
   *  https://play.google.com/store/apps/details?id=com.bealert.app */
  android: 'https://bealert.online/download',
  /** False = pre-launch: download buttons become "Launching soon" + follow/notify links. */
  launched: false,
  /** WhatsApp chat pre-filled to ask for a launch alert. */
  notify: 'https://wa.me/923395512912?text=' + encodeURIComponent('Hi! Please let me know when Be Alert launches.'),
  /** True once `android` points to Google Play (changes the button wording). */
  androidOnPlay: false,
  /** Owner / admin management console (inside the web app). */
  ownerConsole: 'https://app.bealert.online/admin/dashboard',
  privacy: 'https://app.bealert.online/privacy',
  terms: 'https://app.bealert.online/terms',
  /** Social profiles and WhatsApp (shown in the footer and the floating chat button). */
  facebook: 'https://www.facebook.com/profile.php?id=61595424180866',
  instagram: 'https://www.instagram.com/bealert.online/',
  whatsapp: 'https://wa.me/923395512912?text=' + encodeURIComponent('Hi Be Alert!'),
} as const;
