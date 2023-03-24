import './App.css';
import First from './First';
import Movies from './Movies';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/movies' element={<Movies/>}/>
        
     
      
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
