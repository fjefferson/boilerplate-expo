import axios from 'axios'

export const getImage = async (url, callBack) =>{
    await axios.get(`${url}`).then( response =>{
        callBack(response.request.responseURL)
     }
  )
}