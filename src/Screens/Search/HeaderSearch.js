import React from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import Styles from '../../../assets/css/styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setSearch } from '../../Slices/Restaurante.slice';
import { translate } from '../../configs/lang';

export default function HeaderSearch(){
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { search } = useSelector(state => state.restaurante)

    const goBackHome = ()=>{
        dispatch(setSearch(null))
        navigation.goBack()
    }

    return(
        <View style={Styles.searchHeader}>
            <TouchableOpacity onPress={goBackHome} style={Styles.searchBackButton}>
                <Icon name="angle-left" color="#333" size={24} style={Styles.searchBackButtonIcon} />
            </TouchableOpacity>
            <Text style={Styles.searchSubTitle}>{translate('search.result')}</Text>
            <Text style={Styles.searchTitle}>{search}</Text>
        </View>
    )
}