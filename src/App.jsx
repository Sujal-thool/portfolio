import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StarBackground from './components/ui/StarBackground';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-space-950 text-white overflow-hidden selection:bg-primary-500 selection:text-white">
        <StarBackground />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
