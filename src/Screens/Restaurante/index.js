import React, { useEffect } from 'react'
import { Image, Text } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import Styles from '../../../assets/css/styles';
import { translate } from '../../configs/lang';
import { fetchGetRestaurante } from '../../Slices/Restaurante.slice';
import { Line, SubTitleRestaurante, TitleRestaurante, ViewDetalhes, Wrapper, WrapperContent } from '../../StyledComponent/Commons';
import HeaderRestaurante from './HeaderRestaurant';



export default function Restaurante({ route }) {
    const { id, background, logo } = route?.params
    const { restaurante } = useSelector(state => state.restaurante)
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(fetchGetRestaurante(id))
    }, [])

    return (
        <Wrapper flex={1}>
            <HeaderRestaurante background={background}></HeaderRestaurante>
            <WrapperContent style={Styles.restaurantHeaderDiferenca}>

                <Image source={{ uri: logo }} style={Styles.restauranteLogo} />
                <Text style={Styles.restauranteTitle}>{restaurante?.name}</Text>

                <ViewDetalhes>
                    <TitleRestaurante testID={`restaurante-${restaurante?.id}`}>{translate('restaurants.restaurant.description')}</TitleRestaurante>
                    <SubTitleRestaurante>{restaurante?.description}</SubTitleRestaurante>
                </ViewDetalhes>

                <ViewDetalhes>
                    <TitleRestaurante>{translate('restaurants.restaurant.contact')}</TitleRestaurante>
                    <SubTitleRestaurante>{restaurante?.telephone}</SubTitleRestaurante>
                    <SubTitleRestaurante>{restaurante?.website}</SubTitleRestaurante>
                </ViewDetalhes>

                <ViewDetalhes>
                    <TitleRestaurante>{translate('restaurants.restaurant.priceRange')}</TitleRestaurante>
                    <SubTitleRestaurante>{restaurante?.price_range}</SubTitleRestaurante>
                </ViewDetalhes>

                <Line />

                <ViewDetalhes>
                    <TitleRestaurante>{translate('restaurants.restaurant.openingHours')}</TitleRestaurante>
                    <SubTitleRestaurante>{restaurante?.opening_hours}</SubTitleRestaurante>
                </ViewDetalhes>

                <ViewDetalhes>
                    <TitleRestaurante>{translate('restaurants.restaurant.paymentMethods')}</TitleRestaurante>
                    <SubTitleRestaurante>{restaurante?.payment_methods}</SubTitleRestaurante>
                </ViewDetalhes>

            </WrapperContent> 
        </Wrapper>
    )
}