import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import '../bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import GoogleBtn from './GoogleBtn'
import '../CSS/Login.css'
import {toast} from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()



export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    var errormsg;
    // const navigate=useNavigate();

    // const history = useNavigate();
    // useEffect(() => {
    //     if(localStorage.getItem('user-info')) {
    //         history("/add")
    //     }
    // }, [])
    async function Auth(e){
        e.preventDefault();
        
        let item = {
            "userName": e.target[0].value,
            "password": e.target[1].value
    }
         let res = await fetch(" http://149.165.153.133:8989/user/authentication",{
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
        console.log(res.roleId);
        errormsg = res.response;
        console.log(errormsg);
        if (errormsg=="Correct password!")
        {
            toast("Login successful!")
           
	
                const authObject ={'Private-Key':'97ef169a-a70b-4470-ae6d-22bfcc2e0b0d'}
            
                    
                    axios.post("https://api.chatengine.io/users/",
                    {'username': userName, 'secret':password},
                    {'headers': authObject}
                    )
                    .then((response) => {
                    console.log(response.data);
                    })
                    .catch((error) => {
                    console.log(error);
                    });
                
            
            
            
            
          
           
            localStorage.setItem('username', userName)
            localStorage.setItem('password', password)
        }
        if (errormsg!="Correct password!")
        {
            toast("Incorrect Username or password!")
        }
        
        if(res.userId!= -1){
            
            if(res.roleId == 2){
                navigate(`/instructor_dashboard/${item.userName}`)
            }
            else if(res.roleId == 3){
                navigate("/admin_dashboard")
            }
            else{
                navigate(`/student_dashboard/${item.userName}`)
            }

        }
        
    //     const res = await fetch("http://149.165.153.133:8989/user/authentication", 
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
                <form onSubmit={Auth} target = "blank">
                <label>Username</label><br/>
                <input type ="text" placeholder = "username" required
                onChange={(e)=>setUserName(e.target.value)} 
                className="form-control"/>
                <br />
                <label>Password</label><br/>
                <input type ="password" placeholder = "password" required
                onChange={(e)=>setPassword(e.target.value)} 
                className="form-control"/>
                <br />
                <button type="submit" className='btn btn-primary' id='sub_btn'>Login</button>
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
