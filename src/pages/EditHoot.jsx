import {useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router'
import { useEffect } from 'react'

function EditHoot() {

    const [formData,setFormData] = useState({
        title:"",
        text:"",
        category:"News"
    })

    const navigate = useNavigate()

    const {hootId} = useParams()
    console.log("Husain Id")

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()

        try{
            const token = localStorage.getItem("token")

            const createdHoot = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/hoot/${hootId}`,formData,{headers:{Authorization:`Bearer ${token}`}})
    
            navigate("/hoots")

        }
        catch(err){
            console.log(err)
        }
    
    }

    async function getHoot(){
        const token = localStorage.getItem("token")

        const foundHoot = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/hoot/${hootId}`,{headers:{Authorization:`Bearer ${token}`}})
        setFormData(foundHoot.data)
        console.log(foundHoot.data)

    }


    useEffect(()=>{
        getHoot()
    },[])
  return (
    <div>
      <h1>Edit Hoot</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title</label>
        <input 
        type="text" 
        name='title'
        id='title'
        value={formData.title}
        onChange={handleChange}
        />

        <label htmlFor="text">Text:</label>
        <textarea
        name='text'
        id='text'
        value={formData.text}
        onChange={handleChange}
        required
        >
            
        </textarea>


        <label htmlFor="category"></label>
        <select
         name="category" id="category"
         value={formData.category}
         onChange={handleChange}
         >
            <option value="News">News</option>

            <option value="Games">Games</option>

            <option value="Music">Music</option>

            <option value="Movies">Movies</option>

            <option value="Sports">Sports</option>

            <option value="Television">Television</option>
         </select>
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default EditHoot
