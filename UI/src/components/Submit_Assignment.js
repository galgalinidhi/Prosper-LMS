import React,{ useRef, useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import '../CSS/announcement.css'
import '../bootstrap/dist/css/bootstrap.css'
import '../CSS/sidebar.css'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  export default function SubmitDialogue (props) {
  const {title,openpopup,setOpen}= props;
  
  // const [open, setOpen] = React.useState(false);
  const post_title = useRef(null);
  const post_description = useRef(null);
  const post_course = useRef(null);
  const post_date = useRef(null);
  const [postResult, setPostResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const{username,subject} = useParams();


  const SubmitAssignment = async (assignment_title) => {
     
    const assignmentDescripton = post_description.current.value;
    console.log(assignmentDescripton);

    
    const formData = new FormData();
          formData.append(
              "file", selectedFile);
              console.log(formData);
    const config = {
                headers:{
                  'content-type': 'multipart/form-data',
                  
                }
              };
              
   axios.post(`http://localhost:8989/assignment/submitAssignment/${assignment_title}/${subject}/${username}/${assignmentDescripton}`,formData,config)
  .then((response) => {
  console.log(response.data);
  
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
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        
        <Dialog
          fullScreen
          open={openpopup}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative', color:'primary'}}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {title}
              </Typography>
              </Toolbar>
          </AppBar>
          <div className="text-center post">
    <h2>Post Assignments</h2>
    <hr/>
<form>

  <div className="input-group">
    <label for="assigndesc">Text Submission</label>
    <textarea ref={post_description}  id="assigndesc" rows="8" /><br />
  </div>
  <div className="mb-3">
  <label for="formFile" className="form-label">Upload a File</label>
  <input className="form-control" type="file" id="formFile" onChange={handleFileSelect}/>
</div>
  <div className="button-container">
  <div className="left"> 

  <button className="post-btn" onClick={() => SubmitAssignment(title)}>Submit</button> <br />

  </div>
  {/* <div className="right">

  <button className="post-btn" onClick={clearPostOutput}>Clear</button>
  { postResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{postResult}</pre></div> }
</div> */}
</div>
<br/>
<br/>
<div className="left">
  
  {/* <Button variant="contained" component="label" color="primary">
        {" "}
        <AddIcon/> Upload a file
        <input type="file"  onChange={handleFileSelect} />
      </Button> */}
       
</div>
<div>
  

</div>
</form>
</div>
        </Dialog>
      </div>
    );
  }


