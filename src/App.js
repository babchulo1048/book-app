import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
// import Book from "./components/Book";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/" element={<Book />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
