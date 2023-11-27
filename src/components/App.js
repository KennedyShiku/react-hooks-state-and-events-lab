import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <h1>My App</h1>
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  );
}

export default App;
