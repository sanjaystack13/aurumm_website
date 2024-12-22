import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import Topnavbar from './Topnavbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Contact from './Contact';
import LowNavbar from './LowNavbar';
import AuPay from './AuPay';


function App() {
  return (
    <div >

<BrowserRouter>
<Routes>
  <Route path='/Topnavbar' element={<Topnavbar/>}/>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/AuPay' element={<AuPay/>}/>
  <Route path='/LowNavbar' element={<LowNavbar/>}/>


</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
