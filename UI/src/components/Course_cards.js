import React,{Component} from 'react'
import 'C:/Users/nidhi/Documents/git_UI/UI/prosper/src/CSS/Grid.css'
import 'C:/Users/nidhi/Documents/git_UI/UI/prosper/src/bootstrap/dist/css/bootstrap.css'
//import img from 'C:/Users/nidhi/Documents/git_UI/copy/prosper/src/images/card_image.jpg'
const Card= props =>{
return(
<div className='card text-center'>
    <div className='overflow'>
        <img src={props.img} alt="image"/>
    </div>
    <div className='card-body text-dark'>
        <h4 className='card-title'></h4>
        <p className='card-text text-secondary'>
         
        </p>
        <a href="/coursedetails" className='btn btn-outline-success'>View Course Details</a>
    </div>
</div>
)
}
const url = ""
async function getcode(){
    const res = await fetch (url);
    const data = await res.json();
    for (let i=0;i< data.length;i++)
    {
        ('.card-title').eq(i).html(data[i].title)
    }
}
export default class Grid extends Component{
    render(){
        return(
            <div className='container-fluid d-flex justify-content-center'>
            <div className='row'>
              <div className='col-md-4'>
                <Card />
              </div>
              <div className='col-md-4'>
              <Card />
              </div>
              <div className='col-md-4'>
              <Card />
              </div>
            </div>
            </div>
        )
    }
}
