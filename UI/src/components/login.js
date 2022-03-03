import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import 'C:/Users/nidhi/Documents/git_UI/UI/prosper/src/bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import GoogleBtn from './GoogleBtn'
import 'C:/Users/nidhi/Documents/git_UI/UI/prosper/src/CSS/Login.css'



export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    var errormsg;
    const navigate=useNavigate();

    const history = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('user-info')) {
            history("/add")
        }
    }, [])
    async function login(){
        console.log(userName,password)
        let item = {
            "userName": userName,
            "password": password
    }
         let res = await fetch(" http://localhost:8989/user/authentication",{
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "x-access-token": "token-value",
              },
            body: JSON.stringify(item)
         }).then(response => {
            return response.json()
        });
        console.log(res);
        errormsg = res.response;
        console.log(errormsg);
        
    //     const res = await fetch("http://localhost:8989/user/authentication", 
    //     {method: "POST" , 
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(item)});
        
    //     console.log(res);
    //     const json = await res.json();
    //     console.log(json);
    //     if(json.response== "Correct password!"){
    //       navigate('/student_dashboard');
    //     }
    //     else{
    //       alert(json.response)
    //     }
    //     //navigate(`/dashboard`, {state: {userId: json.userId, emailId: emailId , name : emailId}});
        
      }
    

    
    return (
        
        <div className="text-center m-5-auto">
            <h2>Login</h2>
            <div className="col-sm-6 offset-sm-3">
                <form action='/student_dashboard'>
                <label>Username</label><br/>
                <input type ="text" placeholder = "username"
                onChange={(e)=>setUserName(e.target.value)} 
                className="form-control"/>
                <br />
                <label>Password</label><br/>
                <input type ="password" placeholder = "password" 
                onChange={(e)=>setPassword(e.target.value)} 
                className="form-control"/>
                <br />
                <button onClick={login} className='btn btn-primary' id='sub_btn'>Login</button>
                <br />
                <p>
                    <GoogleBtn/>
                </p>
                <p><Link to="/passwordreset">Forgot password? </Link></p>
               
               
        
        {/*  <BrowserRouter>
        <Routes>
          <Route  path="/forgotPassword" element = {<PasswordReset/>} />
          </Routes>
        </BrowserRouter> */}
                <h3> {errormsg} </h3>
                </form>
                <footer>
               
                <p><Link to = "/Register" className='Register'>New User? Click here to Register</Link></p>
                <p><Link to="/">Back to Homepage</Link></p>
                </footer>
            </div>
        </div>
        
    )


}
