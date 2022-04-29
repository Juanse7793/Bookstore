import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Author from './pages/author';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/author" element={<Author />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
