import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin'
import FranchisePage from './pages/franchise'
import ChickenPage from './pages/Chicken'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contato" element={<SigninPage />} />
        <Route path="/franquia" element={<FranchisePage />} />
        <Route path='/invasaodofrango' element={<ChickenPage />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
