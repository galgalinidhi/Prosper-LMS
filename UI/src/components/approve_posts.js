

import React,{useState,useEffect} from 'react'
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


const Approveposts = () => 
{
    const classes = useStyle();
    const [announcements, setannouncemnets]= useState([]);

    useEffect (() =>{
        getAllData();
    }, [])

    const getAllData = () => {
axios.get("http://localhost:8989/announcement/get/unapproved?courseTitle=Software Engineering")
.then((response) => {
console.log(response.data);
setannouncemnets(response.data);
})
.catch((error) => {
console.log(error);
});
}
const Approve = async(announcementTitle) => {
// // let item = {
// //          "announcementTitle":announcementTitle
// //  }
// const item = { Title: announcementTitle };
//  const response = await axios.post("http://localhost:8989/announcement/approve/announcement", item);
//  this.setState({ Id: response.data.announcementId });
// console.log(response);
let item = {
    "announcementTitle":announcementTitle
}
 let res = await fetch("http://localhost:8989/announcement/approve/announcement",{
    method: 'PUT',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        
      },
    body: JSON.stringify(item)
  })//.then(response => {
//     return response.json()
// });
// console.log(res);
console.log(res);
const json = await res.json();
console.log(json); 
window.location.reload();
}
return (
    <>
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">Admin</a>
    </div>
    
    <ul className="nav navbar-nav navbar-right">
      
      <li><a href="/admin_dashboard"><span className="glyphicon glyphicon-log-out"></span>Back</a></li>
    </ul>
  </div>
</nav>
    <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.tablebody}>
                <TableCell>Course Name</TableCell>
                <TableCell>Announcement Title</TableCell>
                <TableCell>Description</TableCell>
               
            </TableRow>
        </TableHead>
        <TableBody>
            {
                announcements.map(announcement => (
                    <TableRow>
                        <TableCell>{announcement.courseTitle}</TableCell>
                        <TableCell>{announcement.announcementTitle}</TableCell>
                        <TableCell>{announcement.announcementDescription}</TableCell>
                        <TableCell>
                            <Button  variant="contained" onClick ={() => Approve(announcement.announcementTitle)}>Approve</Button>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
    
    </>
);
}
export default Approveposts;