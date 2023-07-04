import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/pages/Home/home';
import About from './Components/pages/About/about';
import ContactUs from './Components/pages/ContactUs/contactUs';
import Classes from './Components/pages/Classes/classes';
import SignUp from './Components/pages/SignUp/SignUp';
import Login from './Components/pages/login/login';
function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contactUs' element={<ContactUs/>} />
         <Route path='/classes' element={<Classes/>} />
         <Route path='/SignUp' element={<SignUp/>} />
         <Route path='/login' element={<Login/>} />


       </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
