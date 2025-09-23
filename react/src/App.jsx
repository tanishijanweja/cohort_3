import React from "react";
const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

function MyComponent() {
  return (
    <div style={{ backgroundColor: "pink", color: "white", padding: 10, borderRadius: 18 }}>Hello, World!</div>
  );
}
export default App;
