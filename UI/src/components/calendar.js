import React,{useState} from "react";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
const locales ={
  "en-US": require("date-fns/locale/en-US")

}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
const events =[
{
  title: "Assignment1",
  allDay: true,
  start: new Date(2022,2,20),
  end: new Date(2022,2,27)
},

]

function EventsCalendar () {
 const[newEvent, setNewEvent] = useState({title:"", start:"", end:""})
 const[allEvent, setAllEvent] = useState(events)

 function handleevents(){
   setAllEvent([...allEvent.at, newEvent])
 }

    return(

      <Calendar
        localizer={localizer}
        events={allEvent}
        startAccessor="start"
        endAccessor= "end"
        style={{height:500, margin:"50px"}}
      />
    )
  }

export default EventsCalendar;