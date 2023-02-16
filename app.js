import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/sass/styles';

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = (props) => (
  <div className="myCustomHeight">
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

const DnDCalendar = withDragAndDrop(Calendar)

/* ... */

return (
  <DnDCalendar
    localizer={myLocalizer}
    events={events}
    draggableAccessor={(event) => true}
  />
)
