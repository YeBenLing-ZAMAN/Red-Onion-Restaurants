import './App.css';
import Bannar from './Components/Bannar/Bannar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Bannar></Bannar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
