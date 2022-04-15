import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Bannar from './Components/Bannar/Bannar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Lunch from './Components/Home/Lunch';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Bannar></Bannar>
      <Routes>
        <Route path='/breakfast' element={<Lunch></Lunch>}></Route>
      </Routes>
      <Home></Home>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
