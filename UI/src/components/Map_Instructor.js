import React,{useState,useEffect} from "react";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import '../CSS/announcement.css'
import '../bootstrap/dist/css/bootstrap.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Map_instructor(){
  const [users,setusers] =useState([]);
  const [courses,setcourses] =useState([]);
  const [userName, setUserName] = useState();
  const [courseName, setCourseName] = useState();
  useEffect(function(){
    axios.get("http://149.165.153.133:8989/user/instructor")
    .then((response) => setusers(response.data))
    .then((error) => console.log(error));
  },[]);
  useEffect(function(){
    axios.get("http://149.165.153.133:8989/course/get")
    .then((response) => setcourses(response.data))
    .then((error) => console.log(error));
  },[]);
  useEffect(function(){
    if(users.length){
      setUserName(users[0])
    }

  },[users])
  
  useEffect(function(){
    if(courses.length){
        setCourseName(courses[0])
    }

  },[courses])

  const handlechange_username = (e) => {
    // alert(e.target.value);
    setUserName(e.target.value)
  };
  const handlechange_coursename = (e) => {
    // alert(e.target.value);
    setCourseName(e.target.value)
  };

  const handleSubmit = (e) => {
    
    console.log(userName)
    axios.put("http://149.165.153.133:8989/user/assign_instructor",{
      "userName": userName,
      "courseName": courseName
  })
  .then((response) =>{
  console.log(response.status);
  if(response.status==200)
  {
    toast('Instructor assigned to course!')
  }
  })
    e.preventDefault();

  }; 
 
  return(
    <>
     <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">Assign Instructor</a>
    </div>
    
    <ul className="nav navbar-nav navbar-right">
      
    <li><a href="/manageusers"><span className="adminlogout"><BiArrowBack/><span></span>Back</span></a></li>
    </ul>
  </div>
</nav>
 
    <div align="center">
    <form onSubmit={handleSubmit}>
      <div className="input-group">
      <label for="selectname">UserName</label>
    <select className = "input-group" id="selectname" onChange ={handlechange_username} required value={userName} defaultValue={"--User Name--"}> 
       <option value="0">--User Name--</option> 
      {
      users.map((user) => (
      <option key ={user} value = {user}>{user}</option>
      ))
}
    </select>
    </div>
    <div className="input-group">
      <label for="selectname">Course Name</label>
    <select className = "input-group" id="selectcourse" onChange ={handlechange_coursename} required value={courseName}> 
      <option value="0">--Course Name--</option>
      {
      courses.map((course) => (
      <option key ={course} value = {course}>{course}</option>
      ))
}
    </select>
    </div>
    <button  className="post-btn" type="Submit" value = "Submit">Assign</button>
    </form>
    </div>
    </>
  );
}