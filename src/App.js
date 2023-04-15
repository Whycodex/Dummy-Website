import React from "react";

function App() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <button
        onclick={async () => {
          window.ReactNativeWebView.postMessage('Data from WebView / Website');
        }}
        style={{
          padding: 20,
          width: 200,
          fontSize: 20,
          color: "white",
          backgroundColor: "#6751ff"
        }}
      >
        Send Data To React Native App
      </button>
    </>
  );
}

export default App;
