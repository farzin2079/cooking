import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/Home/Home'
import Recepe from './pages/Recepies/Recepe'
import Create from './pages/Create/Create'
import Navbar from './component/Navbar';
import ThemeSelector from './component/ThemeSelector';
import { useTheme } from './hook/useTheme';


function App() {
  const { mode } = useTheme();
  
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter >
        <Navbar />
        <ThemeSelector />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recepies/:id' element={<Recepe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
