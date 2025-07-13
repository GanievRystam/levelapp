import { Platform } from 'react-native';

export default function GlobalStyles() {
  if (Platform.OS !== 'web') {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Override Expo's inline styles */
          body {
            overflow: visible !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
            height: auto !important;
          }
          
          html {
            overflow: visible !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
            height: auto !important;
          }
          
          #root {
            overflow: visible !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
            height: auto !important;
            display: block !important;
          }
            #root > div {
             min-height: unset !important;
            }
          
          /* Override Expo's reset styles specifically */
          #root, body, html {
            height: auto !important;
          }
          
          body {
            overflow: visible !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
          }
          
          #root {
            display: block !important;
          }
          
          /* Additional selectors */
          [data-reactroot] {
            overflow: visible !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
          }
          
          .expo-root {
            overflow: visible !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
          }
          
          #expo-reset {
            overflow: visible !important;
            overflow-x: visible !important;
            overflow-y: visible !important;
          }
        `,
      }}
    />
  );
} 