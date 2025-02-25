import {useState} from 'react'
import axios from 'axios'
import { createComment } from '../service/hootService'
function CommentBox({hootId, getHoot}) {

    const [formData,setFormData] = useState({
        text:""
    })

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        await createComment(hootId,formData)
        await getHoot()
        setFormData({
            text:""
        })



    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="text"></label>
            <textarea
             name="text" 
             id="text"
             value={formData.text}
             onChange={handleChange}
             minLength={20}
             maxLength={280}
             ></textarea>

             <button>Submit</button>
        </form>
      
    </div>
  )
}

export default CommentBox
