import React,{ useRef, useState, Component, useEffect} from 'react'
import axios from 'axios';
import {useParams,Link} from 'react-router-dom'
import * as faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import * as IOicons from "react-icons/io"
import { IconContext } from 'react-icons/lib'
import { BiArrowBack } from "react-icons/bi";
import Button from "@material-ui/core/Button";
import  DatePicker  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AddIcon from "@material-ui/icons/Add"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/announcement.css'
import '../bootstrap/dist/css/bootstrap.css'
import '../CSS/sidebar.css'
toast.configure()





export default function PostAssignment() {
  const[sidebar,setSidebar] = useState(false)
  const showSidebar =() => setSidebar(!sidebar)
  const {username,subject} = useParams();
  const post_title = useRef(null);
  const post_description = useRef(null);
  const post_course = useRef(null);
  const post_date = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const[selectedDate, setdate] =useState(null);
  

  const sidemenu =[
    {
      title: 'Dashboard',
      path: `/instructor_dashboard/${username}`,
      icon: <faicons.FaTh/>,
      cName: 'nav-text',
    },
 
    {
      title: 'Chat',
      path: '/chattry',
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
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 3);
  }
      

  const postData =() => {
     
    // const post_Data = {
        const assignmentTitle = post_title.current.value;
        const assignmentDescripton = post_description.current.value;
        const courseTitle = subject;
        const duedate = selectedDate;
        
    // };
    const formData = new FormData();
          formData.append(
              "file", selectedFile);
              
    const config = {
                headers:{
                  'content-type': 'multipart/form-data',
                  
                }
              };
              
   axios.post(`http://149.165.153.133:8989/assignment/uploadAssignment/${assignmentTitle}/${courseTitle}/${duedate}/${assignmentDescripton}`,formData,config)
  .then((response) => {
   if(response.status==200)
    {
    toast("Assignment Posted!")
    }
  //console.log(duedate);
  
  
  })
  .catch((error) => {
  console.log(error);
  });
    
      
 
    
}
  



  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
    
  }
  
  const clearPostOutput = () => {
    setPostResult(null);
    
  }

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
<div className="text-center post">
    <h2>Post Assignments</h2>
    <hr/>
<form>
{/* <div className="input-group">
    <label for="cname">Course Name</label>
     <input type="text" ref={post_course}id="cname"  /> 
    
  </div> */}
  
  <div className="input-group">
    <label for="assigntitle">Assignment Title</label>
    <input type="text" ref={post_title} id="assigntitle" />
  </div>
  <div className="input-group">
    <label for="assigndesc">Assignment Description</label>
    <textarea ref={post_description}  id="assigndesc" rows="8" /><br />
  </div>
  <div className="left">
    
  
  {/* <Button variant="contained" component="label" color="#0097a7">
        {" "}
        <AddIcon/> Upload a file
        <input type="file"  onChange={handleFileSelect} />
      </Button> */}
   
   <div className="mb-3">
  <label for="formFile" className="form-label">Upload a File</label>
  <input className="form-control" type="file" id="formFile" onChange={handleFileSelect}/>
</div>


      <br/>
</div>

<div>


<DatePicker 
    selected={selectedDate} onChange={date => setdate(date)}
     minDate ={new Date()}
     dateFormat= "MM-dd-yyyy"
     isClearable
     showYearDropdown
     scrollableYearDropdown
  />

</div>
<br/>
  <div className="button-container">
  <div className="left"> 

  <button className="post-btn" onClick={postData}>Post</button> <br />

  </div>
  <div className="right">

  <button className="post-btn" onClick={clearPostOutput}>Clear</button>
  { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
</div>
</div>
<br/>
<br/>


</form>
</div>
 
 </>
    )

}

