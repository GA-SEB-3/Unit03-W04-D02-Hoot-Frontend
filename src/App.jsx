import './App.css'
import {Routes ,Route} from 'react-router'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import ValidateIsLoggedIn from './validators/ValidateIsLoggedIn'
import ValidateIsLoggedOut from './validators/ValidateIsLoggedOut'
import HootList from './pages/HootList'
import HootDetails from './pages/HootDetails'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<ValidateIsLoggedOut><Signup/></ValidateIsLoggedOut>}/>
        <Route path="/login" element={<ValidateIsLoggedOut><Login/></ValidateIsLoggedOut>}/>
        <Route path="/hoots" element={<HootList/>}/>
        <Route path="/hoots/:hootId" element={<HootDetails/>} />

      </Routes>
    </>
  )
}

export default App
