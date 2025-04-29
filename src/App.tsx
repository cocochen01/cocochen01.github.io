import { useFlexFont } from "./hooks/useFlexFont";
import Home from "./pages/Home";
import "./index.css";

function App() {
  useFlexFont();
  return <Home />;
}

export default App;
