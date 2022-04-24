import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'


export default function Change_password() {

  
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  

  async function changepassword(){
    let item = {
        
        "password": password,
        "token" : token
}
     let res = await fetch("http://localhost:8989/user/reset_password?",{
        method: 'POST',
        headers: {
        
            "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "x-access-token": "token-value",
          },
        body: JSON.stringify(item)
     })

    console.log(res);
    const json = await res.json();
    console.log(json);
} 


    return (
        < header style={ Background_login}>
        <div className="text-center m-5-auto">
            <h2>Enter your new password:</h2>
            <form action="/login">
                
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="new_password" required  />
                </p>

                
                
                
                <p>
                    <label>Confirm Password</label>
                    
                    <br/>
                    <input type="password" name="password" 
                     onChange={(e)=>setPassword(e.target.value)}
                    required />
                </p>

                <p>
                    <label>Token</label><br/>
                    <input type="string" name="Token"
                      onChange={(e)=>setToken(e.target.value)} 
                      required  />
                </p>

                <p>
                    <button onClick={changepassword} id="sub_btn" type="submit">Reset</button>
                </p>
                
                
            </form>
            <footer>
            <p><Link to="/home">Back To Homepage </Link></p>
            </footer>
        </div>
        </header>
    )
}
const Background_login = {
    width: "100%",
    height: "100vh",
   
}


