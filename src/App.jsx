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
import { useContext } from 'react'
import { authContext } from './context/AuthContext'
import CreateHoot from './pages/CreateHoot'
import EditHoot from './pages/EditHoot'
function App() {

  const {user} = useContext(authContext)

  return (
    <>
      <Navbar/>
      <Routes>
        {
          user ? (
            <>
              <Route path="/hoots" element={<HootList/>}/>
              <Route path="/hoots/:hootId" element={<HootDetails/>} />
              <Route path="/hoots/create" element={<CreateHoot/>} />
              <Route path="/hoots/:hootId/edit" element={<EditHoot/>} />
              
            </>
    
          ):
          (
            <>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>

            </>
          )
        }

      </Routes>
    </>
  )
}

export default App
