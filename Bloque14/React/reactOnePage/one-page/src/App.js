import React from "react";

import Saludo from "./Saludo";
import Mensaje from "./Mensaje";

function App() {
  return (
    <div>
      <Saludo nombre="Juan" />
      <Mensaje mensaje="Bienbenido a mi app react"></Mensaje>
      <Saludo nombre="Otro mas" />
    </div>
  );
}

export default App;
