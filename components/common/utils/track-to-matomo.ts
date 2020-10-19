function trackEvent(category, action, name) {
  if (typeof window !== "undefined") { // run it on client side
    // eslint-disable-next-line no-underscore-dangle
    const _paq = (window as any)._paq || [];
    _paq.push(["trackEvent", category, action, name]);
  }
}

export default trackEvent;
