import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  const routes =
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  return (
    <>
      <Router>
        {routes}
      </Router>
    </>
  );
}

export default App;
