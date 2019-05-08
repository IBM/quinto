const debounce = (fn: (...args: $Unknown[]) => void, wait: number) => {
  let current = false;

  return function(this: $Unknown) {
    if (!current) {
      current = true;

      setTimeout(() => {
        current = false;
        fn.apply(this, arguments as $Unknown);
      }, wait);
    }
  };
};

export { debounce };
