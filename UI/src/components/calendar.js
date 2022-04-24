// import React, { Component } from 'react';
// // date = moment(date).format("YYYY-MM-DD")
// import Calendar from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// import axios from 'axios'
// moment.locale('en-GB');
// Calendar.momentLocalizer(moment);

// class App extends Component {

  

//   constructor(props) {
//     super(props)

//     this.state = {
//       cal_events: [
//         //State is updated via componentDidMount
//       ],
//     }

//   }

//   convertDate = (date) => {
//     return moment.utc(date).toDate()
//   }

//   componentDidMount() {


//     axios.get('http://149.165.153.133:3001/events')
//       .then(response => {
//         console.log(response.data);
//         let appointments = response.data;
        
//         for (let i = 0; i < appointments.length; i++) {
          
//           appointments[i].start = this.convertDate(appointments[i].start)
//           appointments[i].end = this.convertDate(appointments[i].end)
          
//         }

//         this.setState({
//           cal_events:appointments
//         })
  
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }


//   render() {

//     const { cal_events } = this.state

//     return (
//       <div className="App">
//         <header className="App-header">
          
//           <h1 className="App-title">React Calendar</h1>
//         </header>
//         <div style={{ height: 700 }}>
//           <Calendar
//             events={cal_events}
//             step={30}
//             defaultView='week'
//             views={['month','week','day']}
//             defaultDate={new Date()}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;