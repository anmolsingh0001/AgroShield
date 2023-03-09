// import logo from './logo.svg';
// import Navbar from './Components/Navbar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Form from './Components/Form';
// import inputvalue from './Components/Navbar'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Startpage from './Components/Startpage';
import Page from './Components/Page';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Home/> */}
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Navbar />} />
        <Route path='/form' element={<Form/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
