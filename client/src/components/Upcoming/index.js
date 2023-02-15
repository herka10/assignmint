import React from 'react'
import FullCalender from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class DemoApp extends React.Component {
    render () {
        return (

            <FullCalender
            plugins={[ dayGridPlugin ]}
            initialView="dayGridDay"
            contentHeight={400}


            />

        )
    }
}