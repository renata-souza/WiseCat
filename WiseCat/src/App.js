import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Advices from './components/Advice/Advice';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/advices" element={<Advices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
