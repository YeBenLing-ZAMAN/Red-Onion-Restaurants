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
import Menu from './Components/Menu/Menu';
import Change from './Components/Change/Change';
function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        {/* <Route to='/' path={}></Route> */}
        <Route  path='/'   element={<Bannar></Bannar>}></Route>
        <Route  path='/home'   element={<Bannar></Bannar>}></Route>
        <Route path = '/menu' element={<Menu></Menu>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={  <AboutUs></AboutUs>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <CheckOut></CheckOut> */}
    </div>
  );
}

export default App;



/* 

{('/', 'home').map(path => <Router path={path} element={<Bannar></Bannar>}>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Router>)}

*/