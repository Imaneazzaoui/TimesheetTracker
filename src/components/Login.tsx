import 'semantic-ui-css/semantic.min.css';
import {SubmitHandler, useForm } from "react-hook-form";
import '../App.css';

import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import apiService from '../services/apiService';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    async function login(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      try {
        const response = await apiService.get(`/sign/${email}/${password}`);
  
        console.log(response.data);
  
        if (response.data === "No login is found for this username") {
          alert("No login is found for this username");
        } else if (response.data === "User Found") {
          navigate('/home');
        } else {
          alert("Incorrect Email and Password not match");
        }
      } catch (error) {
        alert("An error occurred. Please try again later.");
      }
    }
      
    
    return (
            <div className="Container">
            {/*<img src={logo} className='outside-image'/>*/}
            <form onSubmit={login}>
                <br/>
                
                <h2>LOGIN  <h3>Sign in to your account</h3></h2>
                
                <div className="ui divider"></div>
                <br></br>
                <div className="ui form">
                <div className="field">
                    
                <input type="email" id="email" placeholder="Enter Name" value={email}
                onChange={(event) => {
                setEmail(event.target.value);
                }}/>
                </div>
                
                <div className="field">
                <input type="password" placeholder="Password"  value={password}
                onChange={(event) => {
                setPassword(event.target.value);
                }}/>
                  
                </div>
                <button type="submit" id = "buttonlogin" className='fluid ui button blue'>LOGIN</button>
                <br/>
                <center><label><a href="#">I forgot my password</a></label></center>
                </div>
                
            </form>
        </div>
    )
              
}
export default Login;



