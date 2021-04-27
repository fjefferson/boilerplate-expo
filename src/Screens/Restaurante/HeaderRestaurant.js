import React from 'react'
import { ImageBackground, StatusBar, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from '../../../assets/css/styles'
import { useNavigation } from '@react-navigation/native';



const HeaderRestaurante = ({ background }) => {
  const navigation = useNavigation()
  return (
    <View style={[Styles.headerWrap, Styles.restauranteHeader]}>
      <ImageBackground source={{ uri: background }} style={Styles.headerImage}>
        <View style={Styles.headerWrapTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={Styles.restauranteBackButton}>
            <Icon name="angle-left" color="#FFF" size={35} style={Styles.restauranteBackButtonIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar translucent backgroundColor="transparent" />
    </View>)
}

export default HeaderRestaurante;