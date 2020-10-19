
/**
 * Get event category from page url.
 * @return {string} 'dotations', 'ir' or '?'
*/
function getEventCategory() {
  const url = document.location;
  let category: string;
  if (url.href.includes("/ir")) {
    category = "ir";
  } else if (url.href.includes("/dotations")) {
    category = "dotations";
  } else {
    category = "?";
  }
  return category;
}


/**
 * Send event information to matomo tracking service.
 * @param category 'dotations', 'ir' or '?'
 * @param action The user action (button click, key push, ...) that dispatched the event.
 * @param name Event name accordinf to its impact.
 * @link https://fr.matomo.org/docs/event-tracking/
 */
function trackEvent(category: string, action: string, name: string) {
  if (typeof window !== "undefined") { // run it on client side
    // eslint-disable-next-line no-underscore-dangle
    const _paq = (window as any)._paq || [];
    _paq.push(["trackEvent", category, action, name]);
  }
}

export { getEventCategory, trackEvent };
