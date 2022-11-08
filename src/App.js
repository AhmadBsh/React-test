import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav />
    <Routes>
    <Route path="/" element={< Home />}/>
      <Route path="/about" element={< About />}/>
      <Route path="/profile" element={< Profile />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
