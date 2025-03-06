import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Oldalak/Home';
import Menu from './Oldalak/Menu';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
