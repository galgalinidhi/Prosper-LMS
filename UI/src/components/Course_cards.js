import React,{useEffect, useState, Component} from 'react'
import { useParams } from 'react-router-dom';
import '../CSS/Grid.css'
import '../bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Card= (coursedata) =>{
    return(
    <div className='card text-center'>
        <div className='overflow'>
            {/* <img alt="image" className='card-img-top'/> */}
        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title'>{coursedata.courseTitle}</h4>
            <br/>
            {/* <a href= {props.url} className='btn btn-outline-success'>View Course Details</a> */}
        </div>
    </div>
    )
    }
function VC(){

  const {userName} = useParams();
  const [course,setcourse]=useState([]);
useEffect = (() =>{
  Getcourse();
}, [])
const Getcourse = () =>
{

  
  axios.get(`http://localhost:8989/course/getCourse?userName=${userName}`)
  .then((response) => {
  console.log(response.data);
  setcourse(response.data);
  const coursedata =response.json();
  }).catch((error) => {
  console.log(error);
  });
    
  };
 return(
     <div>
     {course.map((c,index)=>(
         <Card coursedata={c} key={index} ></Card>
     ))}
     </div>
 )
}
export default VC;
