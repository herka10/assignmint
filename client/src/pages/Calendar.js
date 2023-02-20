import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import auth from '../utils/auth'
import { Navigate } from 'react-router-dom'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import myEventsList from '../utils/placeholderEvents'

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const myCalendar = (props) => {
  const isAuthenticated = auth.loggedIn()
  if (!isAuthenticated) {
    return <Navigate to='/' />
  }

  return (
      <Calendar
        localizer={localizer}
        events={myEventsList}
      />
  )
}
export default myCalendar;