import { useState, useEffect } from 'react';

export function useSSR() {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  return {
    isServer,
    isBrowser: !isServer,
  };
}

export function useSafeLayoutEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList
) {
  const { isBrowser } = useSSR();

  useEffect(() => {
    if (isBrowser) {
      return effect();
    }
  }, [isBrowser, ...(deps || [])]);
}
