import { useState, useEffect } from 'react';

export const useTwitterScript = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charSet = 'utf-8';
    
    script.onload = () => {
      if (window.twttr) {
        window.twttr.widgets.load();
        setIsLoading(false);
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return { isLoading };
};