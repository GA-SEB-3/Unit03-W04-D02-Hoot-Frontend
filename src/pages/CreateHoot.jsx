import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router'
import { createHoot } from '../service/hootService'

function CreateHoot() {
    const [formData,setFormData] = useState({
        title:"",
        text:"",
        category:"News"
    })

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        try{
            const token = localStorage.getItem("token")

            const createdHoot = await createHoot(formData)
    
            navigate("/hoots")

        }
        catch(err){
            console.log(er)
        }
      



    }

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <h1>Create Hoot</h1>

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

export default CreateHoot
