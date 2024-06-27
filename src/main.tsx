import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./App.tsx";

const rootElement = document.querySelector("#root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}
