import React,{ useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import * as Gicons from "react-icons/gi"
import 'C:/Users/nidhi/Documents/git_UI/git/Software-Engineering-Spring2022/UI/src/CSS/announcement.css'
import '../bootstrap/dist/css/bootstrap.css'
import '../CSS/sidebar.css'


export default function PostAnnounce() {
  // const API = "localhost:8989/announcement/add";
  const[sidebar,setSidebar] = useState(false)
  const showSidebar =() => setSidebar(!sidebar)
  const {subject} = useParams();
  const post_title = useRef(null);
  const post_description = useRef(null);
  const [postResult, setPostResult] = useState(null);



  const sidemenu =[
    {
      title: 'Dashboard',
      path: '/instructor_dashboard',
      icon: <faicons.FaTh/>,
      cName: 'nav-text',
    },
   {
      title: 'Assignments',
      path: `/postassignments/${subject}`,
      icon: <Gicons.GiSpellBook/>,
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
 
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 3);
  }
  async function postData() {
    const post_Data = {
      announcementTitle: post_title.current.value,
      announcementDescription: post_description.current.value,
      courseTitle:subject,
    };


  

    try {
      const res = await fetch("http://localhost:8989/announcement/add", {
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
      window.alert("Announcement posted");
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
<h2>Post Announcements</h2>
<hr/>

<form>
  <div className="input-group">
    <label for="post_title">Title</label>
    <input type="text" ref={post_title} id="post_title"/>
  </div>
  <div className="input-group">
    <label for="post_subject">Subject</label>
    <textarea  ref={post_description}  id="post_subject" rows="8" /><br />
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

 </>
    )
}