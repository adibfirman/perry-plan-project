import React, { Fragment } from 'react'
import moment from 'moment';

const Notification = props => {

  const { notifications } = props

  const ListItem = ({ notif }) => {
    return (
      <li>
        <span className="pink-text">{notif.user}</span>
        <span> {notif.content}</span>
        <div className="rey-text note-date">{moment(notif.time.toDate()).fromNow()}</div>
      </li>
    )
  }
  
  return (
    <Fragment>
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notification</span>
            <ul className="notifications">
            {notifications && notifications.map(notif => {
              return (
                <ListItem
                  key={notif.id}
                  notif={notif} />
              )
            })}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )

}

export default Notification
