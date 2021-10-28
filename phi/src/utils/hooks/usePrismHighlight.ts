import * as React from 'react';
import Prism from 'prismjs';

const { useEffect } = React;

function usePrismHighlight() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
      /*
      Prism.plugins.toolbar.registerButton(
        'copy-to-clipboard',
        function (env: Prism.Environment) {
          let linkCopy = document.createElement('button');
          linkCopy.textContent = 'Copy';

          let element = env.element;

          registerClipboard();

          return linkCopy;

          function registerClipboard() {
            let clip = new ClipboardJS(linkCopy, {
              text: () => {
                return element?.textContent?.toString() as string;
              },
            });

            clip.on('success', function () {
              linkCopy.textContent = 'Copied!';

              resetText();
            });
            clip.on('error', function () {
              linkCopy.textContent = 'Press Ctrl+C to copy';

              resetText();
            });
          }

          function resetText() {
            setTimeout(function () {
              linkCopy.textContent = 'Copy';
            }, 5000);
          }
        },
      );
      */
    }
  }, []);
}

export default usePrismHighlight;
