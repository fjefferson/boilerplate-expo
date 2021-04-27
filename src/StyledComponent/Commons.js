
import { StatusBar } from 'react-native';
import styled from 'styled-components/native'; // 2.2.4



export const Wrapper = styled.ScrollView`
display: flex;
flex: ${(props) => props.flex};
background-color: #fff;
` 
export const WrapperContent = styled.View`
    background-color: #fff;
    border-color: #fff ;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 15px;
    margin-top: ${(props) => props.marginTop || "-65px"};
    flex: 1;
    min-height: 450px
    
`

export const InputBox = styled.TextInput`
    border: 1px solid #CCC;
    padding: 15px 15px 15px 60px;
    width: 100%;
    border-radius: 10px;
    color: #333
`

export const TitleCards = styled.Text`
    font-weight:bold;
    font-size: 18px;    
    padding: 30px 0px 5px 15px ;    
`

export const ViewDetalhes = styled.View`
    margin-bottom: 15px;
    padding: 10px
`
export const TitleRestaurante = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px
`

export const SubTitleRestaurante = styled.Text`
    color: #555
`

export const Line = styled.View`
    border-bottom-color: #666;
    border-bottom-width: 1px;
    margin: 15px 5px 15px 5px;
`