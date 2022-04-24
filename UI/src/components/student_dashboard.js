import React,{useEffect, useState, Component} from 'react'
import { useParams } from 'react-router-dom';
import '../CSS/Grid.css'
import '../bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import '../CSS/sidebar.css'
import * as Gicons from "react-icons/gi"
import { Link } from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import img1 from '../images/card_image.jpg'
//import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import { Button, CardActionArea, CardActions } from '@material-ui/core/';
// import { PinDropSharp } from '@material-ui/icons';

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
 

 
function SD(){
  const {username} = useParams();
  const [course,setcourse]=useState([]);
  const sidemenu =[
    {
      title: 'Dashboard',
      path: '/student_dashboard/',
      icon: <faicons.FaTh/>,
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
      path: `/chat/chattry`,
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

  axios.get('http://149.165.153.133:8989/course/getCourse?', { params: { userName: username}})
  .then((response) => {
  console.log(response.data);
  setcourse(response.data);
  
  
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
    <div className='container-fluid d-flex justify-content-center'>
            
      
      {course.map(c => { 
      return(
    <div className='row'>
    <div className='col-md-4'>
      <div className='cardbody'>
    <Card imgsrc={img1} title={c.courseTitle} url={`/SE/${username}/${c.courseTitle}`}/>
    </div>
    </div>
    </div>
 
  );
  }) }
     

</div>
</>
);
  }
  



  
 export default SD;