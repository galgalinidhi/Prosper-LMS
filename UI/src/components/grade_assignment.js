

import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import { Table,TableHead,TableCell,TableRow,TableBody,Button, makeStyles} from '@material-ui/core'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from 'react-icons/lib'
import '../CSS/announcement.css'
import '../CSS/sidebar.css'
import GradeDialogue from '../components/gradepopup.js';


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


const GradeAssignment = () => 
{
    const classes = useStyle();
    const {username,subject}= useParams();
    const [assignments, setassignments]= useState([]);
    const[file,setfile]=useState();
    const[sidebar,setSidebar] = useState(false)
    const showSidebar =() => setSidebar(!sidebar)
    const[openpopup,setOpen]=useState(false);
    const[submissionid,setid]=useState("");
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
axios.get(`http://localhost:8989/assignment/getStudentSubmission?`, { params: { courseTitle: subject}})
.then((response) => {
console.log(response.data);
setassignments(response.data);
})


.catch((error) => {
console.log(error);
});
}
const downloadStudentData = async (submission_assignmentId) => {
  window.open(`http://localhost:8989/assignment/downloadAssignment/${submission_assignmentId}`);
};



const setvalue = async (id) => {
 setOpen(true);
 setid(id);
}
 
const sidemenu =[ 
{
  title: 'Dashboard',
  path: `/instructor_dashboard/${username}`,
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
  title: 'Chattry',
  path: '/chat/chattry',
  icon: <IOicons.IoIosChatboxes/>,
  cName: 'nav-text'
},
{
  title: 'Back',
  path: `/instructor_course/${username}/${subject}`,
  icon: <BiArrowBack/>,
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
    <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.tablebody}>
                
                <TableCell>Assignment Title</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Username</TableCell>
               
            </TableRow>
        </TableHead>
        <TableBody>
            {
                assignments.map(assignment => (
                    <TableRow>
                        {/* <TableCell>{announcement.assignmentId}</TableCell> */}
                       
                        <TableCell>{assignment.assignmentTitle}</TableCell>
                        <TableCell>{assignment.name}</TableCell>
                        <TableCell>{assignment.userName}</TableCell>
                        <TableCell>
                        <button className='post-btn' onClick={() => downloadStudentData(assignment.studentSubmissionResponseId)}>Download</button>
                        </TableCell>
                        <TableCell>
                        <Button variant="outlined" onClick={() => setvalue(assignment.studentSubmissionResponseId)}>
                          Grade Assignment
                          </Button>
                          </TableCell>
  
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
   <GradeDialogue
     openpopup={openpopup}
     setOpen={setOpen}
     submissionid={submissionid}
     setid={setid}
     >
   </GradeDialogue>
    </>
);

}
export default GradeAssignment;