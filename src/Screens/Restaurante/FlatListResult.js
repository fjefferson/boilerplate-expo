import React, { useEffect } from 'react'
import { FlatList,  Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListRestaurantes } from '../../Slices/Restaurante.slice'
import ItemList from '../../StyledComponent/ItemList'
import Styles from '../../../assets/css/styles';
import Loading from '../../StyledComponent/Loading'
import { translate } from '../../configs/lang'

export default function FlatListResult(){
    const { restaurantes, search, loading } = useSelector(state => state.restaurante)
    const dispatch = useDispatch()
  
    useEffect(() => { 
      dispatch(fetchListRestaurantes({name: search}))
    }, [search])  

    return(
        <>
        { loading && <Loading /> }
        { !loading && <FlatList
            style={Styles.flatList}
            data={restaurantes}
            ListEmptyComponent={()=><Text>{translate('restaurants.notFound')}</Text>}
            keyExtractor={item => item.id}
            numColumns={2}            
            renderItem={({ item }) => <ItemList testID={`restaurante-${item.id}`} restaurante={item} /> }
          />
        }
        </>
    )
}