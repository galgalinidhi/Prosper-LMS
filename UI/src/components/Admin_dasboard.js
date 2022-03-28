import React from 'react'
import '../CSS/Grid.css'
import AGrid from './Admin_cards'
export default function AdminDashboard () {
    return(
        <>
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand">Admin Dashboard</a>
    </div>
    {/* <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul> */}
    <ul className="nav navbar-nav navbar-right">
      
      <li><a href="/"><span className="adminlogout" ></span>Logout</a></li>
    </ul>
  </div>
</nav>
<div>
        <AGrid/>
      </div>
      </>
    )
}
