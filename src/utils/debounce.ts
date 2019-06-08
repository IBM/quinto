const debounce = <T>(fn: (...args: T[]) => void, wait: number) => {
  let current = false;

  return function(this: T[]) {
    if (!current) {
      current = true;

      setTimeout(() => {
        current = false;
        fn.apply(this, [...arguments]);
      }, wait);
    }
  };
};

export { debounce };
