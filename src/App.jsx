import './App.css';
import icon from './icon.jpg';
import Main from './Components/Layout/Main/Main';
import Sidebar from './Components/Layout/Sidebar/Sidebar';
function App() {

  return (
    <>
      <div className="App">  {/* This Layout  is divided into two components sidebar and main */}
        <Sidebar/>
        <Main img={icon}/>
      </div>
    </>
  );
}

export default App;
