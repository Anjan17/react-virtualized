const throttleAndDebounceFn = (fn, throttle_delay, debounce_delay) => {
  let timer = null;
  let debounce_timer = null;

  function throttled(...args) {
    const context = this;

    if (debounce_timer !== null) {
      clearTimeout(debounce_timer);
    }

    debounce_timer = setTimeout(() => {
      debounce_timer = null;
      return fn.call(context, ...args);
    }, debounce_delay);

    if (timer) {
      return; // Do nothing if there's already a scheduled call
    }

    // Call the function immediately
    fn.call(context, ...args);

    // Set a new timeout to reset the timer
    timer = setTimeout(() => {
      timer = null; // Reset the timer after delay
    }, throttle_delay);
  }

  return throttled;
};

export default throttleAndDebounceFn;
