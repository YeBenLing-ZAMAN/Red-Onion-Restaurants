import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Bannar from './Components/Bannar/Bannar';
import CheckOut from './Components/CheckOut/CheckOut';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Breakfast from './Components/Home/Breakfast';
import Lunch from './Components/Home/Lunch';
import Dinner from './Components/Home/Dinner';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Bannar></Bannar>
      <Routes>
        <Route path='/home' element={<Home></Home>}>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <AboutUs></AboutUs>
      <Footer></Footer>
      <CheckOut></CheckOut>
      <Breakfast></Breakfast>
    </div>
  );
}

export default App;
