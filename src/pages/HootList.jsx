import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router"

function HootList() {
    const [hoots,setHoots] = useState([])

    async function getHoots(){
        try{
            console.log(import.meta.env.VITE_BACKEND_URL)
            const token = localStorage.getItem("token")
            const fetchedHoots = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/hoot`,{headers:{Authorization:`Bearer ${token}`}})
            console.log(fetchedHoots.data)
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

      {hoots.map((oneHoot)=>
      <div style={{margin:"100px"}} key={oneHoot._id}>
        
            <Link to={`/hoots/${oneHoot._id}`}>
            <h2>{oneHoot.title}</h2>
                <p>{oneHoot.text}</p>
                <p>Author:{oneHoot.author.username}</p>
                <p>Category:{oneHoot.category}</p>
            </Link>
                
      </div>
    )}
    </div>
  )
}

export default HootList
