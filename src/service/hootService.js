import axios from "axios";

  const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/hoot`;
  
  const api = axios.create({
      baseURL: BASE_URL 
  });
  
  api.interceptors.request.use(config => {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
  });
  
  const getAllHoots = async () => {
      try {
          const res = await api.get('/'); 
          console.log('res', res.data);
          return res.data;
      } catch (error) {
          console.log('Error fetching data:', error);
      }
  };


    
  const getOneHoot = async (id) => {
    try {
        const res = await api.get(`/${id}`); 
        return res.data;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
};

async function deleteHoot(id){
    try{
        const res = await api.delete(`/${id}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}

async function createHoot(formData){
    try{
        const res = await api.post(`/`,formData)
        return res.data
    }catch(err){
        console.log(err)
    }
}

async function createComment(id,formData){
    try{
        const res = await api.post(`/${id}/comment`,formData)
        return res.data

    }catch(err){
        console.log(err)
    }
}
  

  export { 
    getAllHoots,
    getOneHoot,
    deleteHoot,
    createHoot,
    createComment
  };