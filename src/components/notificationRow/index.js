import React from "react";

function NotificationRow({ img, title, text }) {
  return (
    <div className="notification_row">
      <img src={img} className="notification_image" alt="notificaiton image" />
      <div className="notification_right">
        <b className="notification_title">{title}</b>
        <p className="notification_text">{text}</p>
      </div>
    </div>
  );
}

export default NotificationRow;
