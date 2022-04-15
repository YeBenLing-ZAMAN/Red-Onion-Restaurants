import './App.css';
import Bannar from './Components/Bannar/Bannar';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Bannar></Bannar>
      <Home></Home>
    </div>
  );
}

export default App;
