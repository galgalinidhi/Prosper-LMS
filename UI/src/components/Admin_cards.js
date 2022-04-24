// import React,{Component} from 'react'
// import '../CSS/Grid.css'
// import '../bootstrap/dist/css/bootstrap.css'
// import img1 from '../images/users.jpg'
// import img2 from '../images/ins.jpg'
// import img3 from '../images/approve.jpg'

// const Card= props =>{
// return(
// <div className='card text-center'>
//     <div className='overflow'>
//         <img src={props.imgsrc} alt="image" className='card-img-top'/>
//     </div>
//     <div className='card-body text-dark'>
        
//         <br/>
//         <a href= {props.url} className='btn btn-outline-success'>{props.title}</a>
//     </div>
// </div>
// )
// }

// const url = ""

// export default class AGrid extends Component{
//     render(){
//         return(
//             <div className='container-fluid d-flex justify-content-center'>
//             <div className='row'>
//             <div className='col-md-4'>
//               <Card imgsrc={img2} title= "Add course"url='/addcourse'/>
//               </div>
              
//               <div className='col-md-4'>
//                 <Card  imgsrc={img1} title= "View All Users"url='/getusers'/>
//               </div>
//               <div className='col-md-4'>
//               <Card imgsrc={img2} title= "Manage Users"url='/manageusers'/>
//               </div>
              
//               <div className='col-md-4'>
//               <Card  imgsrc={img3} title= "Approve posts"url='/approveposts'/>
//               </div> 
             
//             </div>
//             </div>
//         )
//     }
// }
