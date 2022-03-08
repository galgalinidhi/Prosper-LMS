import React,{useState,Component} from 'react'
import { Link } from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import SD from '../components/student_dashboard'
import {Table} from 'antd'
import 'antd/dist/antd.css';

import '../CSS/sidebar.css'

const sidemenu =[
  {
    title: 'Dashboard',
    path: '/student_dashboard',
    icon: <faicons.FaTh/>,
    cName: 'nav-text',
  },
  {
    title: 'Announcements',
    path: '/getannouncements',
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

const columns = [
    {
        title : 'Announcement Title',
        dataIndex : 'announcementTitle',
        key : 'announcementTitle'
    },

    {
    
        title : 'Description',
        dataIndex : 'announcementDescription',
        key : 'announcementDescription'
    },

    {
    
        title : 'Course Title',
        dataIndex : 'courseTitle',
        key : 'courseTitle'
    }



]

export default function Getpost () {
  var sd = SD();
  var data =[];
  console.log(sd.course_title);
const[sidebar,setSidebar] = useState(false)
const showSidebar =() => setSidebar(!sidebar)

const [assign_title, setAssignTitle] = useState("");
const [description, setDescription] = useState("");
const [course_title, setCourseTitle] = useState("");
const [assignmentList, setAssignmentList] = useState([]);
//window.onload=getAssignment();

async function getAssignment(e){
    e.preventDefault();
  fetch('http://localhost:8989/announcement/get?courseTitle=Software Engineering')
      .then(async response => {
          data = await response.json();
  setAssignmentList(data)
  
});
  
}   
//    const displayAssignment = (assignment) =>  {
//        return <div key = {assignment.assignmentId} >{assignment.assignmentId}</div>



//    }
//    const displayAssignmentList = () =>{
//        return assignmentList.map((assignment)=>displayAssignment(assignment))
//    }
  return (
    <>
    
    
    <IconContext.Provider value={{color:'#fff'}}>

   
    <div className= 'navbar'>
      <Link to= "#" className='menubars'>
        <faicons.FaBars onClick={showSidebar}/>
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
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
    <div className='table text-center'>
    <Table className='assignment-table' columns={columns} dataSource={assignmentList} pagination = {false}/>
    </div>
    
    <div className="text-center m-5-auto"> 
       
       {/* for( var i=0; i<data.length; i++){
           {data[i].course_title}
       } */}

           <form onSubmit={getAssignment}>
              
             
              {/* <p>
                  <label>Course Title</label><br/>
                  <input type="text" name="course_title"  
                  onChange={(e)=>setCourseTitle(e.target.value)} />
              </p> */}

               <p>
                  <button id="sub_btn" type="submit">Get Announcements</button>
              </p> 
 </form> 


 </div>  
    </>
    

  )
}