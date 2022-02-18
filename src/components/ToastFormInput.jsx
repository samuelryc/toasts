import React, { useContext, useState } from "react";
import { ToastContext } from "../context/ToastContext";
import useLocalStorage from "../hooks/useLocalStorage";

function ToastFormInput() {
  const [toastCurrentId, setToastCurrentId] = useLocalStorage("toast_id", 1);
  const [toastContent, setToastContent] = useState("");
  const { toasts, setToasts } = useContext(ToastContext);

  function handleInput(event) {
    setToastContent(event.target.value);
  }

  function toastInputSubmit() {
    if (toastContent.trim().length === 0) {
      return;
    }

    setToasts([
      ...toasts,
      {
        id: toastCurrentId,
        message: toastContent,
        icon: '👋',
        status: 'green',
        isNew: true
      }
    ]);

    setToastCurrentId((previousToastId) => toastCurrentId + 1);
    setToastContent("");
  }

  return (
    <form action="#" onSubmit={toastInputSubmit}>
        <input className="toast-input" type="text" name="toast" value={toastContent} placeholder="Toast input" onChange={handleInput} />
    </form>
  )
}

export default ToastFormInput;