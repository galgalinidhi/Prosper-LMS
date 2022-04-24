

import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import { Table,TableHead,TableCell,TableRow,TableBody,Button, makeStyles} from '@material-ui/core'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import SD from '../components/student_dashboard'
import '../CSS/announcement.css'
import '../CSS/sidebar.css'
import AddIcon from "@material-ui/icons/Add"
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import SubmitDialogue from '../components/Submit_Assignment.js';


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


const Approveposts = () => 
{
    const classes = useStyle();
    const {username,subject}= useParams();
    const [announcements, setannouncemnets]= useState([]);
    const[file,setfile]=useState();
    const[sidebar,setSidebar] = useState(false)
    const showSidebar =() => setSidebar(!sidebar)
    const[openpopup,setOpen]=useState(false);
    const[title,settitle]=useState("");
    const post_title = useRef(null);
    const post_description = useRef(null);
    const post_course = useRef(null);
    const post_date = useRef(null);
    const [postResult, setPostResult] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect (() =>{
        getAllData();
    }, [])

    const getAllData = () => {
axios.get(`http://149.165.153.133:8989/assignment/get?`, { params: { courseTitle: subject}})
.then((response) => {
console.log(response.data);
setannouncemnets(response.data);
})


.catch((error) => {
console.log(error);
});
}
const downloadEmployeeData = async (assignmentId) => {
  window.open(`http://149.165.153.133:8989/assignment/downloadFile/${assignmentId}`);
};


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const handleFileSelect = (event) => {
  setSelectedFile(event.target.files[0])
  
}

const clearPostOutput = () => {
  setPostResult(null);
  
 }
const setvalue = async (assignmenttitle) => {
 setOpen(true);
 settitle(assignmenttitle);
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
                
                <TableCell>Announcement Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell> </TableCell>
                <TableCell> </TableCell>
                <TableCell> </TableCell>
               
            </TableRow>
        </TableHead>
        <TableBody>
            {
                announcements.map(announcement => (
                    <TableRow>
                        {/* <TableCell>{announcement.assignmentId}</TableCell> */}
                       
                        <TableCell>{announcement.assignmentTitle}</TableCell>
                        <TableCell>{announcement.assignmentDescription}</TableCell>
                        <TableCell>{announcement.dueDate}</TableCell>
                        <TableCell>
                        <button className='post-btn' onClick={() => downloadEmployeeData(announcement.assignmentId)}>Download</button>
                        </TableCell>
                        <TableCell>
                        <Button variant="outlined" onClick={() => setvalue(announcement.assignmentTitle)}>
                          Submit Assignment
                          </Button>
                          </TableCell>
  
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
   <SubmitDialogue
     openpopup={openpopup}
     setOpen={setOpen}
     title={title}
     settitle={settitle}
     >
   </SubmitDialogue>
    </>
);
}
export default Approveposts;