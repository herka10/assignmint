import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import auth from '../utils/auth'
import { Navigate } from 'react-router-dom'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import myEventsList from '../utils/placeholderEvents'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const DnDCalendar = withDragAndDrop(Calendar)

const myCalendar = (props) => {
  const isAuthenticated = auth.loggedIn()
  if (!isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
    <div className="myCustomHeight">
    <DnDCalendar
      localizer={localizer}
      events={myEventsList}
      defaultView="week"
      startAccessor="start"
      endAccessor="end"
      draggableAccessor={(event) => true}
      showMultiDayTimes
      step={60}

      

    />
  </div>
  )
}
export default myCalendar;