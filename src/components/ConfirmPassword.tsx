import 'semantic-ui-css/semantic.min.css';
import {SubmitHandler, useForm } from "react-hook-form";
import '../App.css';

import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function ConfirmPassword() {
    const [password, setPassword]= useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    
    
    async function PasswordReset(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (password !== ConfirmPassword) {
            alert("Passwords do not match.");
            return;
          }
        if (password.length<6){
            alert("password must be at least 6 charachters long");
            return;
        }
        /*try {
            const response = await axios.post("http://localhost:8088/reset-password", 
            email: "user@example.com", 
            newPassword: password,
        }*/
        
        navigate("/");
      } 
    
    return (
            <div className="Container">
            {/*<img src={logo} className='outside-image'/>*/}
            <form onSubmit={PasswordReset}>
                <br/>
                
                <h2>Set Password  <h3>Enter the password for your account</h3></h2>
                
                <div className="ui divider"></div>
                <br></br>
                <div className="ui form">
                <div className="field">
                    
                <input type="password"  placeholder="Password" value={password}
                onChange={(event) => {
                setPassword(event.target.value);
                }}/>
                </div>
                
                <div className="field">
                <input type="password" placeholder="Confirm password"  value={ConfirmPassword}
                onChange={(event) => {
                setConfirmPassword(event.target.value);
                }}/>
                  
                </div>
                <button type="submit" id = "PasswordConfirmation" className='fluid ui button blue'>CONFIRM</button>
                <br/>
                </div>
                
            </form>
        </div>
    )
}

export default ConfirmPassword;



