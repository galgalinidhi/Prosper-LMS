import React,{useRef} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';


export default function GradeDialogue (props) {
    const {openpopup,setOpen,submissionid}= props;
    const post_grade= useRef(null);


    const GradeAssignment = async (assignment_id) => {
      //  const id= Number(assignment_id);
     
        const assignment_grade = post_grade.current.value;
        console.log(assignment_grade);
        console.log(typeof(assignment_id));
    
      // axios.put('http://localhost:8989/assignment/grade?',{ params: { submitAssignmentId: assignment_id,
      // grade:assignment_grade}})
      axios.put(`http://localhost:8989/assignment/grade?submitAssignmentId=${assignment_id}&grade=${assignment_grade}`)
      .then((response) => {
      console.log(response.data);
      
      })
      .catch((error) => {
      console.log(error);
      });
        
    }

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

 return(
    
<div>
      
      <Dialog open={openpopup} onClose={handleClose}>
        <DialogTitle>Grade Assignment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Grades"
            type="text"
            fullWidth
            variant="standard"
            inputRef={post_grade}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=> GradeAssignment(submissionid)}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}