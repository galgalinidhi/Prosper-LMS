import React,{Component} from 'react'
import { BiArrowBack } from "react-icons/bi";
import '../CSS/Grid.css'
import '../bootstrap/dist/css/bootstrap.css'
import img1 from '../images/viewusers.jpg'
import img2 from '../images/ins.jpg'
import img3 from '../images/instructor.jpg'
import img4 from '../images/students.jpg'

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
export default function ManagerUsers () {
    return(
        <>
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">Manage Users</a>
    </div>
    {/* <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul> */}
    <ul className="nav navbar-nav navbar-right">
      
    <li><a href="/admin_dashboard"><span className="adminlogout"><BiArrowBack/><span></span>Back</span></a></li>
    </ul>
  </div>
</nav>
<div>
        <MUGrid/>
      </div>
      </>
    )
}

class MUGrid extends Component{
    render(){
        return(
            <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
                          
              <div className='col-md-3'>
                <Card  imgsrc={img1} title= "View All Users"url='/getusers'/>
              </div> 
             <div className='col-md-3'>
              <Card imgsrc={img2} title= "Assign Role"url='/assigninstructor'/>
              </div>
              <div className='col-md-3'>
              <Card  imgsrc={img3} title= "Assign Instructor to Course"url='/mapinstructor'/>
              </div> 
              <div className='col-md-3'>
              <Card  imgsrc={img4} title= "Add student to course"url='/mapstudent'/>
              </div> 
             
            </div>
            </div>
        )
    }
}
