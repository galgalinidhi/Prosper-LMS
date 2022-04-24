import React,{useState,useEffect} from 'react'
import '../CSS/Home.css'
import { Link, useParams } from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import axios from 'axios'
import * as IOicons from "react-icons/io"
import * as Gicons from "react-icons/gi"
import { IconContext } from 'react-icons/lib'


import '../CSS/sidebar.css'


export default function Course_details() {

const {username,subject}= useParams();
const [detail,setdetails]=useState([]);
const sidemenu =[
  {
    title: 'Dashboard',
    path: `/student_dashboard/${username}`,
    icon: <faicons.FaTh/>,
    cName: 'nav-text',
  },
  {
    title: 'Announcements',
    path: `/getannouncements/${username}/${subject}`,
    icon: <faicons.FaBullhorn/>,
    cName: 'nav-text',
  },
  {
    title: 'Assignments',
    path: `/getassignments/${username}/${subject}`,
    icon: <Gicons.GiSpellBook/>,
    cName: 'nav-text'
  },
  {
    title: 'Grades',
    path: `/getgrades/${username}/${subject}`,
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





  
  useEffect (() =>{

    axios.get(`http://149.165.153.133:8989/course/get/${subject}`)
    .then((response) => {
    console.log(response.data);
    setdetails(response.data);
    
    
    }).catch((error) => {
    console.log(error);
    });
      
  }, [])

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
            <h5 className="course-title text-center">Welcome To {detail.courseTitle} !</h5>
         <hr/>
         <p className='course-description'>{detail.courseDescription}</p>
           
        </div>
       
        
 
    
        </>
    )
}




 

