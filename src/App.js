import logo from './logo.svg';
import './App.css';




import Exchange from './Component/Exchange/Exchange';
import Navigator from './Component/Navigation/Navigator';
import Infor from './Component/Infor/Infor'

function App() {
  return (
    <div className="App">
     
     <Navigator/>
     <Exchange/>
     <Infor/>
    </div>
  );
}

export default App;

