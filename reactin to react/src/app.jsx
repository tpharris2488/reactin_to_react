import React from "react";
import { Greeter, Loading } from "./src/greeter";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    return setUsername(e.target.value);
  };

  const [loaded, setLoaded] = useState(false);

  const handleLoaded = () => {
    return setLoaded(!loaded);
  };

  if (!loaded) {
    setTimeout(() => {
      handleLoaded();
    }, 3000);
  }

  return (
    <div>
      <h1>Sup React!</h1> 
      {/*always displayed */}
      {loaded ? (
        <>
          <Greeter name="Shawn" phrase="Good day"/>
          <Greeter name="Hans the noob" phrase="Howdy Cowboy"/>
          <Greeter name="Baby Billy Freeman" phrase="Go home and be a family man"/>
          <Greeter name="Enzo Ferrari" phrase="I am for the great loves and the great hates" />
          <input type="text" onChange={handleUsername} value={username} />
          <p>Wassup {username}</p>
        </>
      ) : (
        // shows when loaded=false
        <>
          <h1>page loadin</h1>
          <button type="button" onClick={handleLoaded}>
            Hurry it up!
          </button>
        </>
      )}
    </div>
  );
};

export default App;