import React,{useState,useEffect} from "react";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import '../CSS/announcement.css'
import '../bootstrap/dist/css/bootstrap.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


export default function Assign_instructor(){
  const [users,setusers] =useState([]);
  const [userName, setUserName] = useState();

  useEffect(function(){
    axios.get("http://149.165.153.133:8989/user/all")
    .then((response) => setusers(response.data))
    .then((error) => console.log(error));
  },[]);
  useEffect(function(){
    if(users.length){
      setUserName(users[0])
    }

  },[users])

  const handlechange = (e) => {
    // alert(e.target.value);
    setUserName(e.target.value)
  };

  const handleSubmit = (e) => {
    
    console.log(userName)
    axios.put("http://149.165.153.133:8989/user/create_instructor",{
      "userName": userName
  })
  .then((response) => {
    if(response.status==200)
    {
      toast("Role Assigned!")
    }
  })
   e.preventDefault();

  }; 
 
  return(
    <>
     <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">Assign Role</a>
    </div>
    
    <ul className="nav navbar-nav navbar-right">
    <li><a href="/manageusers"><span className="adminlogout"><BiArrowBack/><span></span>Back</span></a></li>
    </ul>
  </div>
</nav>
  

    <div align="center">
    <form onSubmit={handleSubmit}>
      <div className="input-group">
      <label for="selectname">Instructor UserName</label>
    <select className = "input-group" id="selectname" onChange ={handlechange} required value={userName} defaultValue={"--User Name--"}> 
       <option value="0">--User Name--</option> 
      {
      users.map((user) => (
      <option key ={user} value = {user}>{user}</option>
      ))
}
    </select>
    </div>
    {/* <div className="input-group">
      <label for="selectname">Course Name</label>
    <select className = "input-group" id="selectcourse" onChange ={handlechange}> 
      <option value="0">--Course Name--</option>
      {
      users.map((user) => (
      <option key ={user.id} value = {user.id}>{user.name}</option>
      ))
}
    </select>
    </div> */}
    <button  className="post-btn" type="Submit" value = "Submit">Assign</button>
    </form>
    </div>
    </>
  );
}