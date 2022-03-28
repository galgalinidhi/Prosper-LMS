import React,{ useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import * as Gicons from "react-icons/gi"
import '../CSS/announcement.css'
import '../bootstrap/dist/css/bootstrap.css'
import '../CSS/sidebar.css'


const sidemenu =[
    {
      title: 'Dashboard',
      path: '/instructor_dashboard',
      icon: <faicons.FaTh/>,
      cName: 'nav-text',
    },
    {
        title: 'Announcements',
        path: '/announcements',
        icon: <faicons.FaBullhorn/>,
        cName: 'nav-text',
      },
    {
      title: 'Calender',
      path: '/calendar',
      icon: <faicons.FaCalendarAlt/>,
      cName: 'nav-text'
    },
    {
      title: 'Chat',
      path: '/chat',
      icon: <IOicons.IoIosChatboxes/>,
      cName: 'nav-text'
    },
    {
      title: 'Logout',
      path: '/',
      icon: <IOicons.IoIosLogOut/>,
      cName: 'nav-text'
    },
  ]

export default function PostAssign() {
    const[sidebar,setSidebar] = useState(false)
    const showSidebar =() => setSidebar(!sidebar)
  // const API = "localhost:8989/announcement/add";
  const post_title = useRef(null);
  const post_description = useRef(null);
  const post_course = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 3);
  }
  async function postData() {
    const post_Data = {
        assignmentTitle: post_title.current.value,
        assignmentDescripton: post_description.current.value,
        courseTitle:post_course.current.value,
    };
    try {
      const res = await fetch("http://localhost:8989/assignment/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(post_Data),
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
      window.alert("Assignment posted");
      //setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }
  
  const clearPostOutput = () => {
    setPostResult(null);
  }
    return(
        <>
        <IconContext.Provider value={{color:'#fff'}}>

   
<div className= 'navbar-instructor'>
  <Link to= "#" className='menubars'>
    <faicons.FaBars onClick={showSidebar}/>
  </Link>
</div>
<nav className={sidebar ? 'nav-menu-instructor active': 'nav-menu-instructor'}>
  <ul className='nav-menu-items'onClick={showSidebar}>
    <li className='nav-toggle'>
      <Link to ="#" className='menubars'>
        <Aiicons.AiOutlineClose />
      </Link>
    </li>
    {sidemenu.map((item,index) =>{
      return(
        <li key ={index} className={item.cName}>
          <Link to ={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      )
    })}
  </ul> 
 
</nav>
</IconContext.Provider>
<div className="text-center post">
    <h2>Post Assignments</h2>
    <hr/>
<form>
<div className="input-group">
    <label for="cname">Course Name</label>
     <input type="text" ref={post_course}id="cname"/> 
    {/* <select name="selectList" ref={post_course} id="selectList">
  <option selected value="Select Course Id" />
   <option value="option 1">Software Engineering</option>
   <option value="option 2">Applied Algorithms</option>
</select> */}
  </div>
  {/* <div className="col-sm-6 offset-sm-3"> */}
  <div className="input-group">
    <label for="assigntitle">Assignment Title</label>
    <input type="text" ref={post_title} id="assigntitle"/>
  </div>
  <div className="input-group">
    <label for="assigndesc">Assignment Description</label>
    <textarea ref={post_description}  id="assigndesc" rows="8" /><br />
  </div>
  <div className= "input-group">
  <label for="formGroupExampleInput2">Upload a file</label>
   <input type="file" accept="application/pdf,application/doc"/> 
 
  </div>
  <div className="button-container">
  <div className="left"> 

  <button className="post-btn" onClick={postData}>Post</button> <br />

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
 {/* <hr class="solid"></hr>
<div className="recent_announce">
    <h2>Recent Announcements</h2>
</div>
<div>
  <span id="spanResult">

</span>
</div>  */}
 </>
    )
}