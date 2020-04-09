import React from 'react'

// const Event = (props) => <pre>{JSON.stringify(props, null, 2)}</pre>
const Event = ({ name, location, url, startDate, endDate }) => (
  <div>
    <h1>
      {name} ({location})
    </h1>
    <p>
      {startDate} - {endDate}
    </p>
    <p>
      Website: <a href={url}>{url}</a>
    </p>
  </div>
)

export default Event
