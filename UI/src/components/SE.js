import React,{useState} from 'react'
import '../CSS/Home.css'
import { Link } from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import * as Gicons from "react-icons/gi"
import { IconContext } from 'react-icons/lib'

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
    title: 'Assignments',
    path: '/getassignments',
    icon: <Gicons.GiSpellBook/>,
    cName: 'nav-text'
  },
  {
    title: 'Grades',
    path: '/grades',
    icon: <faicons.FaEdit/>,
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

export default function SE() {
    const[sidebar,setSidebar] = useState(false)
  const showSidebar =() => setSidebar(!sidebar)
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
                    <span>&ensp;{item.title}</span>
                    
                  </Link>
                </li>
              )
            })}
          </ul>
         
        </nav>
        </IconContext.Provider>
        <div>
            <h5 className="course-title text-center">Welcome To Software Engineering!</h5>
         <hr/>
         <p className='course-description'>This co-located course will be your introduction to the the world of Software Engineering and will revolve around a semester long project.We hope that you will enjoy learning about software design/development methodologies (including requirements specification, analysis, design, implementation of software systems, and software quality assurance), and skills that can be used in any development environment. Please note that this course remains a "work in progress" and this website will be updated frequently.</p>
           
        </div>
        </>
    )
}




 

