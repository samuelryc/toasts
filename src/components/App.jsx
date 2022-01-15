import { useState } from 'react';
import '../App.css';
import ShowToasts from './ShowToasts';

function App() {
  const [toasts, setToasts] = useState([
    {
      id: 1,
      message: 'Hello World!',
      icon: '👋',
      status: 'green'
    },
    {
      id: 2,
      message: 'Hello John!',
      icon: '👋',
      status: 'red'
    },
    {
      id: 3,
      message: 'Hello Bob!',
      icon: '👋',
      status: 'blue'
    },
  ]);
  const [toastCurrentId, setToastCurrentId] = useState(4);
  const [toastContent, setToastContent] = useState("");

  function deleteToast(id) {
    setToasts(toasts.filter(toast => toast.id !== id));
  }

  function toastInputSubmit() {
    event.preventDefault();
    
    setToasts([
      ...toasts,
      {
        id: toastCurrentId,
        message: toastContent,
        icon: '👋',
        status: 'green'
      }
    ]);

    setToastCurrentId((previousToastId) => toastCurrentId + 1);
    setToastContent("");
  }

  function handleInput(event) {
    setToastContent(event.target.value);
  }

  return (
    <div className="App">
      <form action="#" onSubmit={toastInputSubmit}>
        <input className="toast-input" type="text" name="toast" value={toastContent} placeholder="Toast input" onChange={handleInput} />
      </form>

      <ShowToasts toasts={toasts} deleteToast={deleteToast} />
    </div>
  );
}

export default App;
