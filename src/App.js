import React from "react";

function App() {
  const sendDataToReactNativeApp = async () => {
    window.ReactNativeWebView.postMessage('Data from WebView / Website');
  };
  return (
    <div>
        html: ` 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <button onclick="sendDataToReactNativeApp()" style={{padding: 20, width: 200, fontSize: 20, color: 'white', backgroundColor: '#6751ff'}}>
          Send Data To React Native App
        </button>
        `,
      </div>
  );
}

export default App;
