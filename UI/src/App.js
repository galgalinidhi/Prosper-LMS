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
import SE from './components/SE';
//import Gettry from './components/getAnnounce';
import InstDashboard from './components/Instructor_dasboard';
import Getpost from './components/getAnnounce';
import GetAssign from './components/view_assignments';
import AdminDashboard from './components/Admin_dasboard';
import Approveposts from './components/approve_posts';
import Assign_instructor from './components/assign_instructor';
import GetAllUsers from './components/GetUsers';
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
      <Route exact path = "/instructor_dashboard" element = {<InstDashboard/>}/>
      <Route exact path = "/coursedetails" element = {<Coursedetails/>}/>
      <Route exact path = "/calendar" element = {<EventsCalendar/>}/>
      <Route exact path = "/announcements" element = {<PostAnnounce/>}/>
      <Route exact path = "/assignments" element = {<PostAssign/>}/>
      <Route exact path = "/getassignments" element = {<GetAssign/>}/>
      <Route exact path = "/admin_dashboard" element = {<AdminDashboard/>}/>
      <Route exact path = "/SE" element = {<SE/>}/>
      <Route exact path = "/approveposts" element = {<Approveposts/>}/>
      <Route exact path = "/getannouncements" element = {<Getpost/>}/>
      <Route exact path = "/assigninstructor" element = {<Assign_instructor/>}/>
      <Route exact path = "/I_SE" element = {<GetAllUsers/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
