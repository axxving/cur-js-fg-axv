// Importaciones
import React from "react";
// Compilacion de todos los componentes
// COMPONENTE UNO
function App(props) {
  // LLevar el conteo
  let [contador, setearConteo] = React.useState(0);

  function aumentar() {
    // Estado interno
    setearConteo(contador + 1);
  }

  // CONTENIDO QUE SE MOSTRARA
  return (
    <div style={{ backgroundColor: props.colorFondo }}>
      <h1 style={{ color: props.colorTexto }}>Contador: {contador}</h1>
      <button onClick={aumentar}>Incrementar</button>
    </div>
  );
}

// Exportamos a app que va a ser capturado por index
export default App;
