import React from 'react'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

const EventList = ({ events }) => (
  <div>
    <Styled.h1>Upcoming events</Styled.h1>
    <Styled.ul>
      {events.map((event) => (
        <Styled.li key={event.id}>
          <strong>
            <Link to={event.slug}>{event.name}</Link>
          </strong>
          <br />
          {new Date(event.startDate).toLocaleDateString('id-ID', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
          <br />
          in {event.location}
        </Styled.li>
      ))}
    </Styled.ul>
  </div>
)

export default EventList
