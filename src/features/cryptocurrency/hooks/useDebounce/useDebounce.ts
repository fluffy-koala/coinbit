import { useEffect, useState } from 'react';

import type { UseDebounceParams } from './useDebounce.types';

const useDebounce = <T>({ delay, value }: UseDebounceParams<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      return setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
