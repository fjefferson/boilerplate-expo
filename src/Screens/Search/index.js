import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { StatusBar } from 'react-native'
import { fetchListRestaurantes } from '../../Slices/Restaurante.slice';
import { TitleCards, Wrapper, WrapperContent } from '../../StyledComponent/Commons';
import SearchBox from '../../StyledComponent/SearchBox';
import HeaderSearch from './HeaderSearch'
import FlatListResult from '../Restaurante/FlatListResult';
import { translate } from '../../configs/lang';


export default function SearchScreen() {  
  const { search } = useSelector(state => state.restaurante)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchListRestaurantes({name: search}))
  }, [])

  return (
    <Wrapper flex={1} > 
          <HeaderSearch />
      <WrapperContent marginTop="-30px">          
          <SearchBox />
          <TitleCards>{translate('restaurants.titleList')}</TitleCards>      
          <FlatListResult />
      </WrapperContent>
      <StatusBar translucent backgroundColor="#00000044" />
    </Wrapper>
  );
}
