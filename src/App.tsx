import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home/Home"
import Calendar from "./components/Calendar/Calendar";
import Projects from "./components/Projects/Project";
import Main from "./components/Dash/Main";
import Users from "./components/Users/Users";
import Prestataires from "./components/Prestataire/Prestataires";
import RegisterForm from "./components/RegisterForm/RegisterForm";


function App() {
    return (
        <div>
      <Router>
        <div>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/calendar" element= { <Calendar/>} />
              <Route path="/" element= { <Login/>} />
              <Route path="/Projects" element= { <Projects/>} />
              <Route path="/main" element= { <Main/>} />
              <Route path="/users" element= { <Users/>} />
              <Route path="/Prestataires" element= { <Prestataires/>} />
              <Route path="/RegisterFm" element = {<RegisterForm/>} />

            </Routes>
          </div>
        </Router>
    </div>
    );
}

export default App;



