import {useState,useEffect} from 'react'
import {useParams} from 'react-router'
import axios from 'axios'

function HootDetails() {
    const [hoot,setHoot] = useState(null)

    // step 1: get Id from the parameter
    const {hootId} = useParams()

    async function getHoot(){
        try{
            const token = localStorage.getItem("token")
            const fetchedHoot = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/hoots/${hootId}`,{headers:{Authorization:`Bearer ${token}`}})

            setHoot(fetchedHoot.data)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div>
      <h1>Hoot Details</h1>
    </div>
  )
}

export default HootDetails
