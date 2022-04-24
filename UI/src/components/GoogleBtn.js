import React, { Component } from 'react'
import reactDom from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';


const CLIENT_ID = '281465148038-4vo966e0khnu884btjun58a44s8ufsj2.apps.googleusercontent.com';


const goto = () => {
    window.location="/student_dashboard"  };
class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.go = this.go.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
  

  login (response) {
    if(response.accessToken){
        
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
        
      }));
    }
    
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }
  go () {
    window.location="/student_dashboard"  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ? 
     
      
            <div>
            <h3>You logged In</h3>
            <button onClick={window.location=("/student_dashboard")}>Logout</button>
            </div>
        
         : <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='Login'
          onSuccess={ this.login}
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          
        />
      }
      

    </div>
    )
  }
}

export default GoogleBtn;