import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams } from 'react-router-dom';
import { List, ListItem, Paper, Typography,Button,Divider} from '@material-ui/core';
import Module from './module_player';
import axios from 'axios';
import ReactPlayer from 'react-player';
import '../CSS/Grid.css';
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import { BiArrowBack } from "react-icons/bi";
import '../CSS/sidebar.css'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    background: theme.palette.secondary.main,
  },
  appBar: {
    position: 'relative',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  dialog: {
    padding: theme.spacing(3),
    height: "100vh",
  }
}));


export default function ViewModules() {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [uploadOpen, setUploadOpen] = React.useState(false);
  const [selectedLecture, setSelectedLecture] = React.useState(null);
  const [lectureList, setLectureList] = React.useState([]);
  const {username,subject}= useParams();
  const[sidebar,setSidebar] = useState(false)
  const showSidebar =() => setSidebar(!sidebar)

  const sidemenu =[
    {
      title: 'Dashboard',
      path: `/student_dashboard/${username}`,
      icon: <faicons.FaTh/>,
      cName: 'nav-text',
    },
   
  ]

  useEffect(() => {
    axios.get(`http://149.165.153.133:8989/module/get/${subject}`)
      .then(res => {
        setLectureList(res.data)
      })
      .catch(console.log);

  
  }, []);

 

  

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


        <Typography variant="h6">
          Lectures
        </Typography>
        <List>
        {lectureList.map((file) => (
          <>
          <Paper>
          <div className='video'>
          <Typography sx={{ ml: 6 }}>{file.moduleTitle}</Typography>
            &nbsp;
            <ReactPlayer 
            controls={true}
            url={`http://149.165.153.133:8989/module/downloadModule/${file.moduleEntityId}`}
            width="580px"
          />
            
          {/* <Module videopath={file.moduleEntityId} /> */}
        
          </div>
          </Paper> 
          <Divider variant="inset" component="li" />

          </>
        ))}
        </List>
     
    </>
    )
  }