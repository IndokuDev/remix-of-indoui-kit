import { useId as useReactId, useState, useLayoutEffect } from 'react';

let idCounter = 0;

function generateId() {
  idCounter += 1;
  return `indo-${idCounter}`;
}

export function useId(providedId?: string): string {
  // Try to use React 18's useId if available
  let reactId: string | undefined;
  try {
    reactId = useReactId();
  } catch {
    // React < 18, fall back to custom implementation
  }

  const [id] = useState(() => providedId ?? reactId ?? generateId());
  
  return id;
}

export function useIds(count: number, providedIds?: string[]): string[] {
  const [ids] = useState(() => {
    return Array.from({ length: count }, (_, i) => {
      return providedIds?.[i] ?? generateId();
    });
  });
  
  return ids;
}
