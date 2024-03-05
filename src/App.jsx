import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Profile from "./routes/Profile/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movie from "./routes/Movie/Movie";
import Series from "./routes/Series/Series"
import SingleMovie from "./routes/Movie/singleMovie";


function App() {

  return (
    <>
      <Router>
      <Header  />      
        <Routes>
          <Route  path="/"  element={<Home />}/>
          <Route  path="/profile"  element={<Profile />}/>
          <Route  path="/movies"  element={<Movie />}/>
          <Route  path="/series"  element={<Series />}/>
          <Route  path="/movies/:id"  element={<SingleMovie />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
