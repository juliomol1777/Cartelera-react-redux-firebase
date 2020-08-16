import React from 'react';
import moment from 'moment';

const Notifications= (props) => {
    const {notifications} = props;

    return(
        <div className="card">
            <p>Notificaciones</p>
            <div className="card-body">
                <ul>
                {notifications && notifications.maps(item =>{
                    return (
                        <li key={item.id}>
                            <span>{item.user} </span>
                            <span>{item.content}</span>
                            <div>
                                {moment(item.time.toDate()).fromNow()}
                            </div>
                        </li>
                    )
                })}
                
                </ul>
            </div>
        </div>
    );
}

export default Notifications;