import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import Schedules from "./components/Schedules";
import Users from "./components/Users";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/schedules" element={<Schedules/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/helo" element={<Home/>}/>
          <Route path="/contactus" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
