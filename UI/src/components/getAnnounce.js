import React,{useState,Component,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import * as Gicons from "react-icons/gi"
import { IconContext } from 'react-icons/lib'
import SD from '../components/student_dashboard'
import {Table} from 'antd'
import 'antd/dist/antd.css';
import axios from 'axios';
import '../CSS/sidebar.css'



const columns = [

  {
    
    title : 'Course Title',
    dataIndex : 'courseTitle',
    key : 'courseTitle'
},
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
    
      title : 'Posted On',
      dataIndex : 'timeStamp',
      key : 'timeStamp'
  }
   



]

export default function Getpost () {

const {username,subject}= useParams();



const sidemenu =[
  {
    title: 'Dashboard',
    path: `/student_dashboard/${username}`,
    icon: <faicons.FaTh/>,
    cName: 'nav-text',
  },
  {
    title: 'Assignments',
    path:`/getassignments/${username}/${subject}`,
    icon: <Gicons.GiSpellBook/>,
    cName: 'nav-text',
  },
  {
    title: 'Grades',
    path: `/getgrades/${username}/${subject}`,
    icon: <faicons.FaEdit/>,
    cName: 'nav-text'
  },
  {
    title: 'Calender',
    path: '/calendar',
    icon: <faicons.FaCalendarAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'Chat',
    path: '/chat/chattry',
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



  var sd = SD();
  var data =[];

  console.log(sd.course_title);
const[sidebar,setSidebar] = useState(false)
const showSidebar =() => setSidebar(!sidebar)
const[query,setquery] = useState("");
const [assign_title, setAssignTitle] = useState("");
const [description, setDescription] = useState("");
const [course_title, setCourseTitle] = useState("");
const [assignmentList, setAssignmentList] = useState([]);
//window.onload=getAssignment();
const search = (dataSource) => {
  return dataSource.filter((item) => item.announcementTitle.toLowerCase().includes(query) || item.announcementDescription.toLowerCase().includes(query) );
};
useEffect (() =>{
  getAssignment();
}, [])

  
  
const getAssignment = () => {
 
  axios.get('http://localhost:8989/announcement/get/approved?', { params: { courseTitle: subject}})
  // axios.get("http://localhost:8989/announcement/get/approved?courseTitle=")
  .then((response) => {
  console.log(response.data);
  setAssignmentList(response.data);
  })
  .catch((error) => {
  console.log(error);
  });
  }
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
    <input type="text" placeholder='Search' className='search' onChange={(e) => setquery(e.target.value)}/>
    <div className='table text-center'>
    <Table className='assignment-table' columns={columns} dataSource={search(assignmentList)} pagination = {false}/>
    </div>
    
    
              
             
            

               
    </>
    

  )
}