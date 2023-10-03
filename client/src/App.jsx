
// import { Outlet } from 'react-router-dom';


import './App.css';
import LoginForm from './Components/Login';
import WeaponList from './Components/WeaponsList';


function App() {
  return (
    <div>
      <LoginForm />
      <WeaponList />
    </div>
  )
}

export default App;