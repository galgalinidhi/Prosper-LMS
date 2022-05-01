import React,{useState} from 'react'
import '../CSS/Grid.css'
import '../CSS/sidebar.css'
import '../bootstrap/dist/css/bootstrap.css'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import img1 from '../images/announce.jpg'
import img2 from '../images/assign.jpg'
import img3 from '../images/grades.jpg'
import img4 from '../images/module.jpg'
import { useParams,Link} from 'react-router-dom';

const Card= props =>{
return(
<div className='card text-center'>
    <div className='overflow'>
        <img src={props.imgsrc} alt="image" className='card-img-top'/>
    </div>
    <div className='card-body text-dark'>
        {/* <h4 className='card-title'>{props.title}</h4> */}
        <br/>
        <a href= {props.url} className='btn btn-outline-success'>{props.title}</a>
    </div>
</div>
)
}
export default function Inst_course () {
  const {username,subject} = useParams();
  const[sidebar,setSidebar] = useState(false)
  const showSidebar =() => setSidebar(!sidebar)
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
            <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
             
             <div className='col-md-3'>
              <Card imgsrc={img1} title= "Post Announcements"url={`/announcements/${username}/${subject}`}/>
              </div>
              <div className='col-md-3'>
              <Card  imgsrc={img2} title= "Create Assignments"url={`/postassignments/${username}/${subject}`}/>
              </div> 
              <div className='col-md-3'>
              <Card  imgsrc={img3} title= "Grade Assignments"url={`/gradeassignments/${username}/${subject}`}/>
              </div> 
              <div className='col-md-3'>
              <Card  imgsrc={img4} title= "Upload Lecture Videos"url={`/uploadmodule/${username}/${subject}`}/>
              </div> 
             
            </div>
            </div>
            </>
        )
    
}
