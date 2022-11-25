import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import Anon from './components/Anon';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={
       <Anon>
       <Signup/>
        </Anon>
      
    } />
    <Route path='/login' element={<Login/>} />
      </Routes>
    
    </div>
  );
}

export default App;
