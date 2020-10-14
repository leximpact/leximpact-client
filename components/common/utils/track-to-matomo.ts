function trackEvent(category, action) {
  if (typeof window !== "undefined") { // run it on client side
    // eslint-disable-next-line no-underscore-dangle
    const _paq = (window as any)._paq || [];
    _paq.push(["trackEvent", category, action]);
  }
}

export default trackEvent;
