
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';

import { BrowserRouter,Routes,Route , Link } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
      <BrowserRouter>
    <div className="App container-fluid">
      {/* navbar goes here  */}
      <Navbar/>
      <header className="App-header">
      
        <h1  style={{ color: "#1e40af",borderRadius: "8px", width:"100%", height:"90px  "
  }}  id='mimi'>🚗Furious motors</h1>
      </header>
     
      {/* nav link  */}
      <nav className='text-center'>
        {/* <Link to="/" className='btn btn-info m-1'>Getproduct component</Link>
        <Link to="/Signup" className='btn btn-primary m-1'> Signup component</Link>
        <Link to="/Signin" className='btn btn-primary m-1'>Signin component</Link>
        <Link to="/Addproduct" className='btn btn-info m-1'>Addproduct component</Link>
         */}
        
      </nav>
      {/* Routes  */}
      <Routes>
        <Route path='/' element={<Getproduct/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Addproduct' element={<Addproduct/>}/>
        <Route path='/makepayment' element={<Mpesapayment/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
