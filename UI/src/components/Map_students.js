import React,{useState,useEffect} from "react";
import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import '../CSS/announcement.css'
import '../bootstrap/dist/css/bootstrap.css'
import { ColorLensTwoTone } from "@material-ui/icons";

export default function Map_Student(){
  const [users,setusers] =useState([]);
  const [courses,setcourses] =useState([]);
  const [userName, setUserName] = useState();
  const [courseName, setCourseName] = useState();
  useEffect(function(){
    axios.get("http://localhost:8989/user/student")
    .then((response) => setusers(response.data))
    .then((error) => console.log(error));
  },[]);
  useEffect(function(){
    axios.get("http://localhost:8989/course/get")
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
    axios.post("http://localhost:8989/user/map_student",{
      "userName": userName,
      "courseName": courseName
  })
  .then((response) => {
    console.log(response.status);
    if(response.status == 200)
    {
      Add_chatuser();
    }

    })
    
    e.preventDefault();

  };
  const Add_chatuser =() => {
  var axios = require('axios');
  const data = {
    "username": "barney",
    "secret": "secret_key123",
    "custom_json": {"coursename": "Software Engineering"},
     
    
  };
  
  var config = {
    method: 'post',
    url: 'https://api.chatengine.io/users/',
    headers: {
      "Private-Key": "6d76d9c3-5747-407a-b859-6e7946a35d37"
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}
  return(
    <>
     <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">Add students to course</a>
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