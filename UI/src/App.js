import './App.css';
import Login from './components/login'
import Register from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PasswordReset from './components/PasswordReset';
import Change_password from './components/changepassword';
import Home from './components/Home';
import SD from './components/student_dashboard';
import Coursedetails from './components/course_details';
import EventsCalendar from './components/calendar';
import PostAnnounce from './components/postAnnouncements';
import PostAssign from './components/post_assignments';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path = "/" element = {<Home/>}/>
      <Route exact path = "/login" element = {<Login/>}/>
      <Route exact path = "/register" element = {<Register/>}/>
      <Route exact path = "/PasswordReset" element = {<PasswordReset/>}/>
      <Route exact path = "/changepassword" element = {<Change_password/>}/>
      <Route exact path = "/student_dashboard" element = {<SD/>}/>
      <Route exact path = "/coursedetails" element = {<Coursedetails/>}/>
      <Route exact path = "/calendar" element = {<EventsCalendar/>}/>
      <Route exact path = "/announcements" element = {<PostAnnounce/>}/>
      <Route exact path = "/assignments" element = {<PostAssign/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
