import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { BiArrowBack } from "react-icons/bi";
import { Table,TableHead,TableCell,TableRow,TableBody,makeStyles} from '@material-ui/core'
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
 

const GetAllUsers = () => 
{
    const [users, setUsers]= useState([]);
    const classes = useStyle();
   
    useEffect (() =>{
        getAllData();
    }, [])

    const getAllData = () => {
axios.get("http://localhost:8989/user/getAlllDetails")
.then((response) => {
console.log(response.data);
setUsers(response.data);
})
.catch((error) => {
console.log(error);
});
}

return (
    <>
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand">User Information</a>
      </div>
      
      <ul className="nav navbar-nav navbar-right">
        
        <li><a href="/manageusers"><span className="adminlogout"><BiArrowBack/><span></span>Back</span></a></li>
      </ul>
    </div>
  </nav>
  
 
    <Table className={classes.table} >
        <TableHead>
            <TableRow className={classes.tablebody}>
                <TableCell>Name</TableCell>
                 <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contact Number</TableCell>
                  <TableCell>Role</TableCell>
                
               
            </TableRow>
        </TableHead>
        <TableBody >
            {
                users.map(user => (
                    <TableRow key={user}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.userName}</TableCell>
                        <TableCell>{user.emailId}</TableCell>
                        <TableCell>{user.contactNo}</TableCell> 
                        <TableCell>{user.roleId}</TableCell>
                       </TableRow>
                ))
            }
        </TableBody>
    </Table>
    </>
);
}
export default GetAllUsers;