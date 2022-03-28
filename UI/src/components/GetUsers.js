import React,{useState,useEffect} from 'react'
import axios from 'axios';
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
axios.get("http://localhost:8989/user/all")
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
                <TableCell>Name</TableCell>
                {/* <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Course</TableCell>
                <TableCell></TableCell> */}
               
            </TableRow>
        </TableHead>
        <TableBody>
            {
                users.map(user => (
                    <TableRow key={user}>
                        <TableCell>{user}</TableCell>
                        {/* <TableCell>{users.userTitle}</TableCell>
                        <TableCell>{users.userDescription}</TableCell>
                        <TableCell>{users.userDescription}</TableCell>
                        <TableCell>{users.userDescription}</TableCell> */}
                       </TableRow>
                ))
            }
        </TableBody>
    </Table>
    </>
);
}
export default GetAllUsers;