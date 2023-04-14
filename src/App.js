import React from "react";

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 100}}>
      <button>Send Request</button>
      <div style={{padding: 100}}>Recieved data</div>
    </div>
  );
}

export default App;
