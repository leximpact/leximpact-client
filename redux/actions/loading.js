export const loadingComplete = () => ({
  type: "onLoadingComplete",
});

export const loadingStart = () => ({
  type: "onLoadingStart",
});

export const loadingError = error => ({
  error,
  type: "onLoadingError",
});
