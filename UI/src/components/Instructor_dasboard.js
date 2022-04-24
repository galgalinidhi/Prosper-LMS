import React,{useState,useEffect,Component} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import img1 from '../images/se.jpg'
import '../CSS/sidebar.css'




const Card= (props) =>{
  return(
  <div className='card text-center'>
      <div className='overflow'>
          <img src={props.imgsrc} alt="image" className='card-img-top'/>
      </div>
      <div className='card-body text-dark'>
          <h4 className='card-title'>{props.title}</h4>
          <br/>
           <a href= {props.url} className='btn btn-outline-success'>View Course Details</a> 
      </div>
  </div>
  )
  }
const sidemenu =[
  // {
  //   title: 'Dashboard',
  //   path: '/instructor_dashboard',
  //   icon: <faicons.FaTh/>,
  //   cName: 'nav-text',
  // },
  // {
  //   title: 'Announcements',
  //   path: '/announcements',
  //   icon: <faicons.FaBullhorn/>,
  //   cName: 'nav-text',
  // },
  // {
  //   title: 'Assignments',
  //   path: '/assignments',
  //   icon: <Gicons.GiSpellBook/>,
  //   cName: 'nav-text',
  // },
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


export default function InstDashboard () {
  const[sidebar,setSidebar] = useState(false)
  const showSidebar =() => setSidebar(!sidebar)
  const {username} = useParams();
  const [course,setcourse]=useState([]);
  useEffect (() =>{

    axios.get('http://149.165.153.133:8989/course/getCourse?', { params: { userName: username}})
    .then((response) => {
    console.log(response.data);
    setcourse(response.data);
    
    
    }).catch((error) => {
    console.log(error);
    });
      
  }, [])
    return (
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
      <div className='container-fluid d-flex justify-content-center'>
            
      
            {course.map(c => { 
            return(
          <div className='row'>
          <div className='col-md-4'>
            <div className='cardbody'>
          <Card imgsrc={img1} title={c.courseTitle} url={`/instructor_course/${username}/${c.courseTitle}`}/>
          </div>
          </div>
          </div>
       
        );
        }) }
           
      
      </div>
      </>
      

    )
}