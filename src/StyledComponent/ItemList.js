import React, { useEffect, useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import Style from '../../assets/css/styles'
import { getImage } from '../utils/utilsAxios'
import { useNavigation } from '@react-navigation/native';


const ItemList = ({ restaurante }) =>{
    const [urlImage, setUrlImage] = useState(null)
    const [logo, setLogo] = useState(null)
    const navigation = useNavigation()

    const goToRestaurante = () =>{
        navigation.navigate("Restaurante", { id: restaurante?.id, background: urlImage, logo })
      }
    
    useEffect(()=>{
        if (!urlImage)
            getImage(restaurante.image, setUrlImage)
        if(!logo)
            getImage(restaurante.logo, setLogo)
    },[])
    
    return(
        <TouchableOpacity onPress={goToRestaurante} style={Style.viewItemList}>
        <ImageBackground source={{uri: urlImage}} style={Style.itemListImage}>
            <View style={Style.viewOpacity}>
                <Text style={Style.titleItemList} >{restaurante.name}</Text>
            </View>
        </ImageBackground>
        </TouchableOpacity>
    )
}


export default ItemList;