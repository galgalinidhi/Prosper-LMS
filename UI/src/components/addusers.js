import axios from 'axios';
import React,{useEffect} from 'react';

const Adduser = () => {
	
	const authObject ={'Private-Key':'97ef169a-a70b-4470-ae6d-22bfcc2e0b0d'}
    useEffect (() =>{
		
		axios.post("https://api.chatengine.io/users/",
		{'username':"millie_baker", 'secret':"secret123"},
		{'headers': authObject}
		)
		.then((response) => {
		console.log(response.data);
		})
		.catch((error) => {
		console.log(error);
		});
    })




// var config = {
// 	method: 'post',
// 	url: 'https://api.chatengine.io/users/',
// 	headers: {
// 		'PRIVATE-KEY': '97ef169a-a70b-4470-ae6d-22bfcc2e0b0d'
// 	},
// 	data : data
// };
return(
<h1>Adding Users</h1>
)



}
export default Adduser;