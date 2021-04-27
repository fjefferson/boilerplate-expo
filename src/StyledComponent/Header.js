import React from 'react'
import { ImageBackground, Text, View } from "react-native"
import Image from '../../assets/images/header.png'
import Styles from '../../assets/css/styles'
import { translate } from '../configs/lang'


const Header = ()=>{
    return(
        <View style={Styles.headerWrap}>
            <ImageBackground source={Image} style={Styles.headerImage}>
                <View style={Styles.headerWrapTitle}>
                    <Text style={Styles.headerTitle}>{translate('home.title')}</Text>
                    <Text style={Styles.headerSubtitle}>{translate('home.subTitle')}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Header;