import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Table,TableHead,TableCell,TableRow,TableBody} from '@material-ui/core'



const GetAllUsers = () => 
{
    const [users, setUsers]= useState([]);
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
    <Table>
        <TableHead>
            <TableRow>
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
);
}
export default GetAllUsers;