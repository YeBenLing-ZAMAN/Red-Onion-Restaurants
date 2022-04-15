import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Bannar from './Components/Bannar/Bannar';
import CheckOut from './Components/CheckOut/CheckOut';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Lunch from './Components/Home/Lunch';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Bannar></Bannar>
      <Routes>
        <Route path='/breakfast' element={<Lunch></Lunch>}></Route>
      </Routes>
      <Home></Home>
      <AboutUs></AboutUs>
      <Footer></Footer>
      <Login></Login>
      <SignUp></SignUp>
      <CheckOut></CheckOut>
    </div>
  );
}

export default App;
