import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link} from "react-router"
import { authContext } from '../context/AuthContext'
import { getAllHoots, deleteHoot } from '../service/hootService'


function HootList() {
    const [hoots,setHoots] = useState([])

    const {user} = useContext(authContext)
    console.log(user._id)

    async function getHoots(){
        try{
            
            const fetchedHoots = await getAllHoots()
            console.log(fetchedHoots)
            setHoots(fetchedHoots)

        }
        catch(error){
            console.log(error)
        }

    }

    async function deleteHoot(id){
  
      await deleteHoot()
      // refetching the hoots after we delete and setting the state again
      await getHoots()
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

          {user._id === oneHoot.author._id && (
            <>
            <button onClick={()=>{deleteHoot(oneHoot._id)}}>Delete Hoot</button>
            <Link to={`/hoots/${oneHoot._id}/edit`}><button>Update Hoot</button></Link>

            </>

            )}
          
        
                
      </div>
    )}
    </div>
  )
}

export default HootList
