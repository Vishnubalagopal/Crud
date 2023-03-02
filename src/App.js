import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import List from './components/List';

function App() {
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<List/>}></Route>
    <Route path='/create' element={<Create/>}></Route>

  </Routes>
  </BrowserRouter>
</div>  
);
}

export default App;
