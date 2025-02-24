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
            const fetchedHoot = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/hoot/${hootId}`,{headers:{Authorization:`Bearer ${token}`}})

            setHoot(fetchedHoot.data)
            console.log(fetchedHoot.data)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getHoot()
    },[])

  return (
    <div>
      <h1>Hoot Details</h1>

      {hoot && (
        <div>
            <p>Category:{hoot.category}</p>

            <h1>{hoot.title}</h1>

            <p>
                {hoot.author.username} posted on {hoot.createdAt}
            </p>

            <p>{hoot.text}</p>

            <h2>Comments</h2>
            {hoot.comments.map((oneComment)=>
            <div key={oneComment._id}>
                <p>Author:{oneComment.author.username}</p>
                <p>{oneComment.text}</p>
            </div>
            )}
        </div>
      )}
    </div>
  )
}

export default HootDetails
