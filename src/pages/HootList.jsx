import {useState, useEffect} from 'react'
import axios from 'axios'

function HootList() {
    const [hoots,setHoots] = useState([])

    async function getHoots(){
        try{
            const token = localStorage.getItem("token")
            const fetchedHoots = await axios.get(`${import.meta.VITE_BACKEND_URL}/hoots`,{headers:{Authorization:`Bearer ${token}`}})
            setHoots(fetchedHoots.data)

        }
        catch(error){
            console.log(error)
        }

    }

    useEffect(()=>{
        getHoots()
    },[])
  return (
    <div>
      <h1>Hoot List</h1>
    </div>
  )
}

export default HootList
