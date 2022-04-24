import { Button } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
// import {db, storage} from './firebase'
// import firebase from 'firebase'
// import './ImageUpload.css'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import { useLocation, useParams } from 'react-router-dom'

const Chat = ({route}) => {
    //const [users, setUsers]= useState([]);
    
   

//     useEffect (() =>{
//         getAllData();
//     }, [])

//     const getAllData = () => {
// axios.get("http://149.165.153.133:8989/user/getAlllDetails")
// .then((response) => {
// console.log(response.data);
// // setUsers(response.data.userName);
// })
// .catch((error) => {
// console.log(error);
// });
// }
	const [user_name, setUsername] = useState('')
    const {state} = useLocation();
    console.log(state)
    // const username = state.username;
    const password = "mylo";
	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [user_name] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={user_name} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

    return (
		<ChatEngine
			height='100vh'
			userName= "nid197"
			userSecret="nidhi"
			projectID='8ac79f9f-58e9-4a2e-a3cb-327794a2ad6f'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default Chat;