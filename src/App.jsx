import { useState } from "react";

export default function App() {
  const [metal, setMetal] = useState("aur");
  const [stone, setStone] = useState("diamant");

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Configurator Bijuterii 💎</h1>

      <div>
        <h3>Alege metalul:</h3>
        <button onClick={() => setMetal("aur")}>Aur</button>
        <button onClick={() => setMetal("argint")}>Argint</button>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Alege piatra:</h3>
        <button onClick={() => setStone("diamant")}>Diamant</button>
        <button onClick={() => setStone("safir")}>Safir</button>
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>Rezultatul tău:</h2>
        <p>Metal: {metal}</p>
        <p>Piatra: {stone}</p>
      </div>
    </div>
  );
}