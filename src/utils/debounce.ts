const debounce = (fn: (...args: $Unknown[]) => void, wait: number) => {
  let current: boolean = false;

  return function() {
    if (!current) {
      current = true;

      setTimeout(() => {
        current = false;
        fn.apply(this, arguments);
      }, wait);
    }
  };
};

export { debounce };
