import './App.css';
import Login from './components/login'
import Register from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PasswordReset from './components/PasswordReset';
import Change_password from './components/changepassword';
import Home from './components/Home';
import SD from './components/student_dashboard';
import VC from './components/Course_cards';
import Map_instructor from './components/Map_Instructor';
import Map_Student from './components/Map_students';
import EventsCalendar from './components/calendar';
import PostAnnounce from './components/postAnnouncements';
import SE from './components/SE';
import Chat from './components/chat';
import AddCourse from './components/add_course_details';
import InstDashboard from './components/Instructor_dasboard';
import Getpost from './components/getAnnounce';
import GetAssign from './components/getassignment';
import AdminDashboard from './components/Admin_dasboard';
import Approveposts from './components/approve_posts';
import Assign_instructor from './components/assign_instructor';
import ManagerUsers from './components/Manageusers';
import GetAllUsers from './components/GetUsers';
import GetGrades from './components/viewgrades';
import FullScreenDialog from './components/Submit_Assignment';
import PostAssignment from './components/post_assignments';
import GradeAssignment from './components/grade_assignment';
import Inst_course from './components/Instructor_course';
import Chat_try from './components/chat_try';
import Adduser from './components/addusers';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path = "/" element = {<Home/>}/>
      <Route exact path = "/login" element = {<Login/>}/>
      <Route exact path = "/register" element = {<Register/>}/>
      <Route exact path = "/PasswordReset" element = {<PasswordReset/>}/>
      <Route exact path = "/changepassword" element = {<Change_password/>}/>
      <Route exact path = "/student_dashboard/:username" element = {<SD/>}/>
      <Route exact path = "/instructor_dashboard/:username/" element = {<InstDashboard/>}/>
      <Route exact path = "/instructor_course/:username/:subject" element = {<Inst_course/>}/>
      <Route exact path = "/calendar" element = {<EventsCalendar/>}/>
      <Route exact path = "/announcements/:username/:subject" element = {<PostAnnounce/>}/>
      <Route exact path = "/postassignments/:username/:subject" element = {<PostAssignment/>}/>
      <Route exact path = "/getassignments/:username/:subject" element = {<GetAssign/>}/>
      <Route exact path = "/admin_dashboard" element = {<AdminDashboard/>}/>
      <Route exact path = "/SE/:username/:subject" element = {<SE/>}/>
      <Route exact path = "/viewcourse" element = {<VC/>}/>
      <Route exact path = "/addcourse" element = {<AddCourse/>}/>
      <Route exact path = "/approveposts" element = {<Approveposts/>}/>
      <Route exact path = "/mapinstructor" element = {<Map_instructor/>}/>
      <Route exact path = "/manageusers" element = {<ManagerUsers/>}/>
      <Route exact path = "/submittry" element = {<FullScreenDialog/>}/>
      <Route exact path = "/mapstudent" element = {<Map_Student/>}/>
      <Route exact path = "/getannouncements/:username/:subject" element = {<Getpost/>}/>
      <Route exact path = "/getgrades/:username/:subject" element = {<GetGrades/>}/>
      <Route exact path = "/assigninstructor" element = {<Assign_instructor/>}/>
      <Route exact path = "/getusers" element = {<GetAllUsers/>}/>
      <Route exact path = "/gradeassignments/:username/:subject" element = {<GradeAssignment/>}/>
      <Route exact path = "/chat/:username" element = {<Chat/>}/>
      <Route exact path = "/chattry" element = {<Chat_try/>}/>
      <Route exact path = "/adduser" element = {<Adduser/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
