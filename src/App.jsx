import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movie from "./routes/Movie/Movie";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  path="/"  element={<Home />}/>
          <Route  path="/about"  element={<About />}/>
          <Route  path="/movies"  element={<Movie />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
