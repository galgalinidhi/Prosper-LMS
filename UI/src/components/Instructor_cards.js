import React,{Component} from 'react'
import '../CSS/Grid.css'
import '../bootstrap/dist/css/bootstrap.css'
import img1 from '../images/se.jpg'
import img2 from '../images/cn.jpg'
import img3 from '../images/aa.jpg'
const Card= props =>{
return(
<div className='card text-center'>
    <div className='overflow'>
        <img src={props.imgsrc} alt="image" className='card-img-top'/>
    </div>
    <div className='card-body text-dark'>
        <h4 className='card-title'>{props.title}</h4>
        <br/>
        <a href= {props.url} className='btn btn-outline-success'>View Course Details</a>
    </div>
</div>
)
}
const data = [
    {
        title: "Software Engineering"
    },
    {
        title: "Computer Networks"
    },
    {
        title: "Applied Algorithms"
    },
]
const url = ""
async function getcode(){
    //const res = await fetch (url);
    //const data = await res.json();
    for (let i=0;i< data.length;i++)
    {
        ('.card-title').eq(i).html(data[i].title)
    }
}
export default class IGrid extends Component{
    render(){
        return(
            <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
              <div className='col-md-4'>
                <Card imgsrc={img1} title= "Software Engineering"url='/I_SE'/>
              </div>
              {/* <div className='col-md-4'>
              <Card imgsrc={img2} title= "Computer Networks"url='/CN'/>
              </div>
              <div className='col-md-4'>
              <Card imgsrc={img3} title= "Applied Algorithms"url='/AA'/>
              </div> */}
            </div>
            </div>
        )
    }
}
