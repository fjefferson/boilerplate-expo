import { configureStore } from '@reduxjs/toolkit'
import restauranteReducer from '../Slices/Restaurante.slice'

export default configureStore({
  reducer: {
    restaurante: restauranteReducer,
  }
})
