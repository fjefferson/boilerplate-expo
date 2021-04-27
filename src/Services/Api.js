import axios from 'axios'

const getListRestaurants = async param =>{
    try{
        const defaultParam = {page: 1, limit: 10, name: null};
        const params = {...defaultParam, ...param} 
        const response = await axios.get(`https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants?page=${params.page}&limit=${params.limit}${params.name ? `&name=${params.name}`: ''}`)
        return response.data
    } catch(err){
        console.log(err);
        return []
    }
}

const getRestaurante = async id =>{
    try{
        const resonse = await axios.get(`https://605d074f9386d200171ba209.mockapi.io/api/v1/restaurants/${id}`)
        return resonse.data
    } catch(err){ 
        console.log(err);
        return []
    }
}

export default {
    getListRestaurants,
    getRestaurante
}