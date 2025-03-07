import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GreetingPage from './Greeting';
import './App.css';

function HomePage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name.trim() === '') return;
    navigate(`/greeting?name=${encodeURIComponent(name)}`); // Navigate to next page
  };

  return (
    <div className="container">
    <h1>Greeting App</h1>
    <div className="input-group">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Go to Greeting</button>
    </div>
  </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greeting" element={<GreetingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
