import { useEffect } from 'react';

const useRumbleScript = () => {
  useEffect(() => {
    // Create a safety wrapper for Rumble initialization
    const initRumble = () => {
      try {
        if (!window.Rumble) {
          (function(r,u,m,b,l,e) {
            r._Rumble=b;
            r[b]||(r[b]=function(){
              (r[b]._=r[b]._||[]).push(arguments);
              if(r[b]._.length==1){
                l=u.createElement(m);
                e=u.getElementsByTagName(m)[0];
                l.async=1;
                l.src="https://rumble.com/embedJS/u1rzo3y"+
                  (arguments[1].video?'.'+arguments[1].video:'')+
                  "/?url="+encodeURIComponent(location.href)+
                  "&args="+encodeURIComponent(JSON.stringify([].slice.apply(arguments)));
                e.parentNode.insertBefore(l,e);
              }
            });
          })(window, document, "script", "Rumble");
        }

        // Initialize the player with error handling
        if (window.Rumble) {
          window.Rumble("play", {
            "video": "v62u42q",
            "div": "rumble_v62u42q"
          });
        }
      } catch (error) {
        console.error('Failed to initialize Rumble player:', error);
      }
    };

    // Delay initialization slightly to ensure DOM is ready
    const timer = setTimeout(initRumble, 100);

    return () => {
      clearTimeout(timer);
      // Clean up Rumble script if it exists
      const scriptElement = document.querySelector('script[src*="rumble.com/embedJS"]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);
};

export default useRumbleScript;