import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import '../CSS/Login.css'


export default function PasswordReset() {
    const [emailId, setEmail] = useState("");

    const history = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('user-info')) {
            history("/add")
        }
    }, [])
    
    async function Reset(){
        let item = {
           
            "emailId": emailId
    }
         let res = await fetch("http://149.165.153.133:8989/user/forgot/password",{
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "x-access-token": "token-value",
              },
            body: JSON.stringify(item)
          })//.then(response => {
        //     return response.json()
        // });
        // console.log(res);
        console.log(res);
    const json = await res.json();
    console.log(json); 
    }



    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your email address to reset your password</h5>
            <form>
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" placeholder = "Email"  
                    onChange={(e)=>setEmail(e.target.value)} 
                    />
                </p>
                <p>
                    <button onClick={Reset} id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>New User? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
