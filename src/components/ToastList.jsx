import React, { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ToastContext } from "../context/ToastContext";

function ToastList() {
  const { toasts, setToasts } = useContext(ToastContext);
  
  function deleteToast(id) {
    setToasts(toasts.filter(toast => toast.id !== id));
  }

  return (
    <TransitionGroup className="todo-list">
      {toasts.map((toast, index) => 
        <CSSTransition in={toast.isNew} key={`toast_${index}`} timeout={300} classNames="slide-vertical">
          <div className={`toast ${toast.status}`} key={index}>
            <p>{toast.message}</p>
            <p>{toast.icon}</p>
            <p onClick={() => deleteToast(toast.id)}>X</p>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

export default ToastList;