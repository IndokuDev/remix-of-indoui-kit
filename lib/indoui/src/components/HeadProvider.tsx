import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// Head metadata types
export interface HeadMeta {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  robots?: string;
  viewport?: string;
  charset?: string;
  themeColor?: string;
  favicon?: string;
  customMeta?: Record<string, string>;
}

interface HeadContextValue {
  head: HeadMeta;
  setHead: (meta: Partial<HeadMeta>) => void;
  resetHead: () => void;
}

const defaultHead: HeadMeta = {
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
};

const HeadContext = createContext<HeadContextValue | null>(null);

export const HeadProvider: React.FC<{ children: React.ReactNode; defaultMeta?: HeadMeta }> = ({
  children,
  defaultMeta = {},
}) => {
  const [head, setHeadState] = useState<HeadMeta>({ ...defaultHead, ...defaultMeta });

  const setHead = useCallback((meta: Partial<HeadMeta>) => {
    setHeadState((prev) => ({ ...prev, ...meta }));
  }, []);

  const resetHead = useCallback(() => {
    setHeadState({ ...defaultHead, ...defaultMeta });
  }, [defaultMeta]);

  // Apply head changes to DOM
  useEffect(() => {
    // Title
    if (head.title) {
      document.title = head.title;
    }

    // Meta tags
    const updateMeta = (name: string, content: string | undefined, property?: boolean) => {
      if (!content) return;
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMeta('description', head.description);
    updateMeta('keywords', head.keywords);
    updateMeta('author', head.author);
    updateMeta('robots', head.robots);
    updateMeta('theme-color', head.themeColor);
    
    // Open Graph
    updateMeta('og:title', head.ogTitle || head.title, true);
    updateMeta('og:description', head.ogDescription || head.description, true);
    updateMeta('og:image', head.ogImage, true);
    updateMeta('og:url', head.ogUrl, true);
    
    // Twitter
    updateMeta('twitter:card', head.twitterCard);
    updateMeta('twitter:title', head.twitterTitle || head.ogTitle || head.title);
    updateMeta('twitter:description', head.twitterDescription || head.ogDescription || head.description);
    updateMeta('twitter:image', head.twitterImage || head.ogImage);

    // Canonical
    if (head.canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', head.canonical);
    }

    // Favicon
    if (head.favicon) {
      let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = head.favicon;
    }

    // Custom meta
    if (head.customMeta) {
      Object.entries(head.customMeta).forEach(([name, content]) => {
        updateMeta(name, content);
      });
    }
  }, [head]);

  return (
    <HeadContext.Provider value={{ head, setHead, resetHead }}>
      {children}
    </HeadContext.Provider>
  );
};

// Hooks
export const useHead = () => {
  const context = useContext(HeadContext);
  if (!context) {
    throw new Error('useHead must be used within a HeadProvider');
  }
  return context;
};

export const usePageMeta = (meta: HeadMeta) => {
  const { setHead, resetHead } = useHead();

  useEffect(() => {
    setHead(meta);
    return () => resetHead();
  }, []);
};

// Utility functions for SSR
export const mergeHead = (...heads: Partial<HeadMeta>[]): HeadMeta => {
  return heads.reduce((acc, head) => ({ ...acc, ...head }), {} as HeadMeta);
};

export const resolveHead = (head: HeadMeta): string => {
  const tags: string[] = [];
  
  if (head.charset) {
    tags.push(`<meta charset="${head.charset}" />`);
  }
  if (head.viewport) {
    tags.push(`<meta name="viewport" content="${head.viewport}" />`);
  }
  if (head.title) {
    tags.push(`<title>${head.title}</title>`);
  }
  if (head.description) {
    tags.push(`<meta name="description" content="${head.description}" />`);
  }
  if (head.keywords) {
    tags.push(`<meta name="keywords" content="${head.keywords}" />`);
  }
  if (head.author) {
    tags.push(`<meta name="author" content="${head.author}" />`);
  }
  if (head.robots) {
    tags.push(`<meta name="robots" content="${head.robots}" />`);
  }
  if (head.themeColor) {
    tags.push(`<meta name="theme-color" content="${head.themeColor}" />`);
  }
  if (head.ogTitle || head.title) {
    tags.push(`<meta property="og:title" content="${head.ogTitle || head.title}" />`);
  }
  if (head.ogDescription || head.description) {
    tags.push(`<meta property="og:description" content="${head.ogDescription || head.description}" />`);
  }
  if (head.ogImage) {
    tags.push(`<meta property="og:image" content="${head.ogImage}" />`);
  }
  if (head.ogUrl) {
    tags.push(`<meta property="og:url" content="${head.ogUrl}" />`);
  }
  if (head.twitterCard) {
    tags.push(`<meta name="twitter:card" content="${head.twitterCard}" />`);
  }
  if (head.canonical) {
    tags.push(`<link rel="canonical" href="${head.canonical}" />`);
  }
  if (head.favicon) {
    tags.push(`<link rel="icon" href="${head.favicon}" />`);
  }
  
  return tags.join('\n');
};

export type { HeadContextValue };
