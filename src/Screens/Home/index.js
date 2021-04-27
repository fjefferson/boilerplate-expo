import React from 'react';
import { translate } from '../../configs/lang';
import { TitleCards, Wrapper, WrapperContent } from '../../StyledComponent/Commons';
import Header from '../../StyledComponent/Header';
import SearchBox from '../../StyledComponent/SearchBox';
import FlatListResult from '../Restaurante/FlatListResult';

export default function HomeScreen(props) {
  return (
    <Wrapper flex={1}>
      <Header />
      <WrapperContent>
        <SearchBox />
        <TitleCards>{translate('restaurants.titleList')}</TitleCards>
        <FlatListResult />
      </WrapperContent>
    </Wrapper>
  );
}
