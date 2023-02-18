import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'


// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const myCalendar = (props) => (
  
  <div className="myCustomHeight">
    <h1>Calendar</h1>
    <Calendar
      localizer={localizer}
      //events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

export default myCalendar;