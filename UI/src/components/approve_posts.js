

import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { BiArrowBack } from "react-icons/bi";
import { Table,TableHead,TableCell,TableRow,TableBody,Button, makeStyles} from '@material-ui/core'
import { Input } from 'antd';


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
axios.get("http://149.165.153.133:8989/announcement/get/unapproved")
.then((response) => {
console.log(response.data);
setannouncemnets(response.data);
})
.catch((error) => {
console.log(error);
});
}
const Delete = async(announcementId) => {
  // // let item = {
  // //          "announcementTitle":announcementTitle
  // //  }
  // const item = { Title: announcementTitle };
  //  const response = await axios.post("http://149.165.153.133:8989/announcement/approve/announcement", item);
  //  this.setState({ Id: response.data.announcementId });
  // console.log(response);
  let item = {
      "announcementId":announcementId
  }
   let res = await fetch(`http://149.165.153.133:8989/announcement/delete?announcementId=${announcementId}`,{
      method: 'DELETE',
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          
        },
      body: JSON.stringify(item)
    })
    // 149.165.153.133:8989/announcement/approve/announcement?announcementId=61
    // 149.165.153.133:8989/course/getCourse?userName=hsjoshi96
    //.then(response => {
  //     return response.json()
  // });
  // console.log(res);
  console.log(res);
  const json = await res.json();
  console.log(json); 
  window.location.reload();
  }


const Approve = async(announcementId) => {

let item = {
    "announcementId":announcementId
}
 let res = await fetch(`http://149.165.153.133:8989/announcement/approve/announcement?announcementId=${announcementId}`,{
    method: 'PUT',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        
      },
    body: JSON.stringify(item)
  })
 
console.log(res);
const json = await res.json();
console.log(json); 
useEffect (() =>{
  getAllData();
}, [])
}
return (
    <>
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">Approve Announcements</a>
    </div>
    
    <ul className="nav navbar-nav navbar-right">
      
    <li><a href="/admin_dashboard"><span className="adminlogout"><BiArrowBack/><span></span>Back</span></a></li>
    </ul>
  </div>
</nav>
    <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.tablebody}>
                <TableCell>Course Name</TableCell>
                <TableCell>Announcement Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
               
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
                            <Button  variant="contained" onClick ={() => Approve(announcement.announcementId)}>Approve</Button>
                        </TableCell>
                        <TableCell>
                            <Button  variant="contained" onClick ={() => Delete(announcement.announcementId)}>Delete</Button>
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