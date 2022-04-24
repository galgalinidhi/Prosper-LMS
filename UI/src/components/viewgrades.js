

import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom';
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import '../CSS/announcement.css'
import '../CSS/sidebar.css'
import axios from 'axios';
import { Table,TableHead,TableCell,TableRow,TableBody,Button, makeStyles} from '@material-ui/core'



const useStyle = makeStyles({
  table: {
    width: '90%',
    margin: '50px 0 0 50px'
  },
  tablebody:{
    '& > *': {
      background: '#7393B3',
      color: '#ffffff'
      
    },
   
     
  }
})


const GetGrades = () => 
{
    const classes = useStyle();
    const [grades, setgrades]= useState([]);
    const[sidebar,setSidebar] = useState(false)
    const showSidebar =() => setSidebar(!sidebar)
    const{username,subject}=useParams();
    console.log(username);
    console.log(subject);

    useEffect (() =>{
        getAllData();
    }, [])

    const getAllData = () => {
axios.get(`http://149.165.153.133:8989/assignment/getGrade?userName=${username}&courseTitle=${subject}`)
.then((response) => {
console.log(response.data);
setgrades(response.data);
})
.catch((error) => {
console.log(error);
});
}
const sidemenu =[
  {
    title: 'Dashboard',
    path: `/student_dashboard/${username}`,
    icon: <faicons.FaTh/>,
    cName: 'nav-text',
  },
  {
    title: 'Announcement',
    path:`/getannouncements/${username}/${subject}`,
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
 
    <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.tablebody}>
                <TableCell>Assignment Title</TableCell>
                <TableCell>Grades</TableCell>
               
            </TableRow>
        </TableHead>
        <TableBody>
            {
                grades.map(announcement => (
                    <TableRow>
                        <TableCell>{announcement.assignmentTitle}</TableCell>
                        <TableCell>{announcement.grade}</TableCell>
                       
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
    
    </>
);
}
export default GetGrades;