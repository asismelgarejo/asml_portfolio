import React from "react";
import AllRoutes from "./routes/AllRoutes";
import AllTheme from "./theme/AllTheme";
import AllContext from "./context/AllContext";

import "./toolbox/styles/reset.sass";

function App() {
  return (
    <AllContext>
      <AllTheme>
        <AllRoutes />
      </AllTheme>
    </AllContext>
  );
}

export default App;
