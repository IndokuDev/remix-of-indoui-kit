import { useMemo, Ref, RefCallback, MutableRefObject } from 'react';

type ReactRef<T> = Ref<T> | MutableRefObject<T>;

function assignRef<T = any>(ref: ReactRef<T> | null | undefined, value: T) {
  if (ref == null) return;

  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  try {
    (ref as MutableRefObject<T>).current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}

export function useMergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]): RefCallback<T> {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null as any;
    }
    return (value: T) => {
      refs.forEach((ref) => {
        assignRef(ref, value);
      });
    };
  }, refs);
}
