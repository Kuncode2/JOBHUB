import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
    //  The OUTLET is used rendering the child component 
  return (
    <>
    {/* <ThemeToggle /> */}
    <Navbar/>
    <Outlet/>  
    </>
  ) 
}

export default App
