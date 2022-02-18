import '../App.css';
import ToastList from './ToastList';
import ToastFormInput from './ToastFormInput';
import { ToastContext } from '../context/ToastContext';
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [toasts, setToasts] = useLocalStorage("toasts", []);

  return (
    <div className="App">
      <ToastContext.Provider value={{toasts, setToasts}}>
        <ToastFormInput />
        <ToastList />
      </ToastContext.Provider>
    </div>
  );
}

export default App;
