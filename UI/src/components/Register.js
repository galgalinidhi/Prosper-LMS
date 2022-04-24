import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../CSS/Register.css';

export default function Register() {

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  

  async function register(){
    let item = {
        "userName": userName,
        "emailId": emailId,
        "name": name,
        "password": password,
        "contactNo": contactNo
}
     let res = await fetch("http://localhost:8989/user/register",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
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


// const postRequestHandler = () => {};  
//    let handleSubmit = async(e)=>{
//       e.preventDefault();
//       try{
//           let res =
//           fetch("http://localhost:8989/user/register", {
//               method:"POST",
//               body: JSON.stringify({
//                 userName :userName,
//                 emailId: emailId,
//                 password: password

//               }),
//           });
//           let resJson = await res.json();
//           if(res.status == 200){
//             setUserName("");
//             setEmailId("");
//             setPassword("");
//             setmsg("success");
//           }else{
//               setmsg("fail");
//           }
//       }catch(err){
//           console.log(err);
//       }
//   };
 
   return (
        <div className="text-center">
            <h2>Create your account</h2>
        <div>
            <form action='/login'>
            
                <p>
                    <label>Username</label><br/>
                    <input type="text" value={userName} required onChange={(e) => setUserName(e.target.value)} />
                </p>
                <p>
                    <label>Name</label><br/>
                    <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" value={emailId} required onChange={(e) => setEmailId(e.target.value)} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <label>Contact Number</label><br/>
                    <input type="text" value={contactNo} required onChange={(e) => setContactNo(e.target.value)} />
                </p>
               

           
                <p>
                    <button id="sub_btn" type="submit" onClick={register}>Register</button>
                </p>
               
            </form>
            </div>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );

}
