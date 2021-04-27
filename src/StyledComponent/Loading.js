import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Style from '../../assets/css/styles'
import { translate } from '../configs/lang';


export default ()=>{
    return(<View style={[Style.loadingContainer, Style.loadingHorizontal]}>
        <Text style={ Style.loadingText }>{translate('loading')}</Text>
        <ActivityIndicator size="large" color="#CC0000" />
    </View>)
}


