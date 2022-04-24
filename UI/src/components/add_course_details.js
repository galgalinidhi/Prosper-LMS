import React,{ useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";

import axios from 'axios'
import 'C:/Users/nidhi/Documents/git_UI/git/Software-Engineering-Spring2022/UI/src/CSS/announcement.css'
import '../bootstrap/dist/css/bootstrap.css'
import '../CSS/sidebar.css'


export default function AddCourse() {
  // const API = "localhost:8989/announcement/add";
 
const post_desc = useRef(null);
const post_course = useRef(null);
const [postResult, setPostResult] = useState(null);
 
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 3);
  }
  const add = () => {
    const post_Data = {
      
      courseTitle:post_course.current.value,
      courseDescripton: post_desc.current.value,
    }
    
    const config = {
      headers:{
        "Content-Type": "application/json",
        "x-access-token": "token-value",
        
      }
    };
    axios.post(`http://localhost:8989/course/add`,post_Data,config)
    .then((response) => {
    console.log(response.data);
    
    })
    .catch((error) => {
    console.log(error);
    });
      
  };

    
  
  const clearPostOutput = () => {
    setPostResult(null);
  }
    return(
        <>
       
       <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">Add Course</a>
    </div>
    
    <ul className="nav navbar-nav navbar-right">
      
    <li><a href="/admin_dashboard"><span className="adminlogout"><BiArrowBack/><span></span>Back</span></a></li>
    </ul>
  </div>
</nav>
<div className="text-center post">
{/* <h2>Add Courses</h2>
<hr/> */}
<hr/>

<form>
<div className="input-group">
    <label for="post_id">Course Name</label>
     <input type="text"  ref={post_course}id="post_id"/> 
   
  </div>
  <div className="input-group">
    <label for="post_title">Course Description</label>
    <input type="text" ref={post_desc} id="post_title"/>
  </div>
  
  <div className="button-container">
  <div className="left"> 

  <button className="post-btn" onClick={add}>Add</button> <br />

  </div>
  <div className="right">

  <button className="post-btn" onClick={clearPostOutput}>Clear</button>
  { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
</div>
</div>
</form>

</div>
<br />
<br />

 </>
    )
}