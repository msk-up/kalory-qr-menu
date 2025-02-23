import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:slug" element={<><Hero /><Menu /></>} />
      </Routes>
    </Router>
  );
}

export default App;
