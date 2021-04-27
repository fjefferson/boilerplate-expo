import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Api from '../Services/Api'

export const fetchListRestaurantes = createAsyncThunk(
    `restaurante/list`,
    async params =>{
        const restaurantes = await Api.getListRestaurants(params)
        return restaurantes
    }
)

export const fetchGetRestaurante = createAsyncThunk(
    `restaurante/get`,
    async id =>{
        const restaurante = await Api.getRestaurante(id)
        return restaurante
    }
)

export const restauranteSlice = createSlice({
    name: "restaurante",
    initialState: {
        restaurantes:[],
        search: null,
        restaurante: null,
        loading: true
    },
    reducers: {
        setLoading: (state, action) =>{
            state.loading = action.payload
        },
        setSearch: (state , action) =>{
            state.loading = true
            state.search = action.payload
        }
    },

    extraReducers:{
        [fetchListRestaurantes.fulfilled]:(state, action)=>{
            const { data } = action.payload
            state.loading = false;
            state.restaurantes = data || []
        },
        [fetchGetRestaurante.fulfilled]: (state, action)=>{
            const { data } = action.payload
            state.restaurante = data
            state.loading = false;
        }
    }

})

export const { setLoading, setSearch } = restauranteSlice.actions

export default restauranteSlice.reducer