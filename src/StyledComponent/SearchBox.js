import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../Slices/Restaurante.slice';
import { InputBox } from './Commons';
import Style from '../../assets/css/styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { translate } from '../configs/lang';

export default function SearchBox() {
    const dispatch = useDispatch()
    const { search } = useSelector(state => state.restaurante)
    const [text, setText] = useState(null)
    const navigation = useNavigation()
    const route = useRoute();

    const onChangeText = text => {
        setText(text)
    }

    const onEndEditing = e => {
        dispatch(setSearch(e.nativeEvent.text)) 
          if (route.name !== "Search")
              navigation.push("Search")
    }

    useEffect(()=>{
        setText(search)
    }, [search])

    return (
        <View style={Style.viewSearch}>
            <Icon style={Style.iconSearch} name="search" />
            <InputBox value={text} onEndEditing={onEndEditing} onChangeText={onChangeText} placeholder={translate('search.placeholder')} />
        </View>
    )
}