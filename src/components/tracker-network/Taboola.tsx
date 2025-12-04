'use client';

import React, { useEffect } from 'react';

const Taboola = () => {
  useEffect(() => {
    // Taboola Pixel Code
    window._tfa = window._tfa || [];
    window._tfa.push({ notify: 'event', name: 'page_view', id: 1838593 });
    (function (t, f, a, x) {
      if (!document.getElementById(x)) {
        t.async = true; t.src = a; t.id = x; f?.parentNode?.insertBefore(t, f);
      }
    })(document.createElement('script'),
      document.getElementsByTagName('script')[0],
      '//cdn.taboola.com/libtrc/unip/1838593/tfa.js',
      'tb_tfa_script');
    // End of Taboola Pixel Code
  }, []);

  return (
    <noscript>
      <img
        src="https://trc.taboola.com/1838593/log/1/i?en=page_view"
        width="0"
        height="0"
        style={{ display: 'none' }}
      />
    </noscript>
  );
};

export default Taboola;
