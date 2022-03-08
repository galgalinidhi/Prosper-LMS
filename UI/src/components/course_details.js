import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import * as Gicons from "react-icons/gi"
import { IconContext } from 'react-icons/lib'


import 'C:/Users/nidhi/Documents/git_UI/UI/prosper/src/CSS/sidebar.css'
import EventsCalendar from './calendar'
const sidemenu =[
  {
    title: 'Dashboard',
    path: '/student_dashboard',
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
    title: 'Assignments',
    path: '/assignments',
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


export default function Coursedetails () {
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
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
       
      </nav>
      </IconContext.Provider>
    <div>
    <h1 className="main-title text-center"></h1>
    </div>
      </>
      

    )
}