import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskContext from './components/context/TaskContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContext>
      <App />
    </TaskContext>
  </StrictMode>,
)
