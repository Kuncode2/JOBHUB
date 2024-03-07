import { Outlet} from 'react-router-dom'
import './App.css'

function App() {
    //  The OUTLET is used rendering the child component 
  return (
    <>
    <nav>Nav Bar</nav>
      <Outlet/>  
    </>
  ) 
}

export default App
