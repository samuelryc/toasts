import React from "react";

function ShowToasts(props) {
  return (
    props.toasts.map((toast, index) => 
      <div className={`toast ${toast.status} ${toast.isNew ? 'animated-toast' : ''}`} key={index}>
        <p>{toast.message}</p>
        <p>{toast.icon}</p>
        <p onClick={() => props.deleteToast(toast.id)}>X</p>
      </div>
    )
  )
}

export default ShowToasts;