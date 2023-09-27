import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Pia" breed="Beijing" animal="Dog" />
    <Pet name="Lu" breed="Japanese" animal="Dog" />
    <Pet name="Ky" breed="Beijing" animal="Dog" />
    <Pet name="Kid" breed="Scottish Fold" animal="Cat" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
