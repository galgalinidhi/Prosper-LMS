import React from 'react'
import '../CSS/Grid.css'
import AGrid from './Admin_cards'
import * as IOicons from "react-icons/io"
import '../bootstrap/dist/css/bootstrap.css'
import img1 from '../images/addcourse.jpg'
import img2 from '../images/users.jpg'
import img3 from '../images/approve.jpg'


const Card= props =>{
  return(
  <div className='card text-center'>
      <div className='overflow'>
          <img src={props.imgsrc} alt="image" className='card-img-top'/>
      </div>
      <div className='card-body text-dark'>
          
          <br/>
          <a href= {props.url} className='btn btn-outline-success'>{props.title}</a>
      </div>
  </div>
  )
  }
  
  const url = ""
export default function AdminDashboard () {
    return(
        <>
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">Admin Dashboard</a>
    </div>
   
    <ul className="nav navbar-nav navbar-right">
      
      <li><a href="/"><span className="adminlogout"><IOicons.IoIosLogOut/><span>Logout</span></span></a></li>
    </ul>
  </div>
</nav>
<div>
<div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
            <div className='col-md-4'>
              <Card imgsrc={img1} title= "Add course"url='/addcourse'/>
              </div>
            <div className='col-md-4'>
              <Card imgsrc={img2} title= "Manage Users"url='/manageusers'/>
            </div>
              
            <div className='col-md-4'>
              <Card  imgsrc={img3} title= "Approve posts"url='/approveposts'/>
            </div> 
             
            </div>
            </div>
      </div>
      </>
    )
}
