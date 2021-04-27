import { StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({

    /** Header */
    headerWrap: {
        textAlign: "left",
        backgroundColor: "#fcd4c8",
        paddingTop: StatusBar.currentHeight
    },
    headerWrapTitle: {
        marginTop: (80 - StatusBar.currentHeight),
        paddingLeft: 45,
        paddingRight: 25
    },
    headerImage: {
        flex: 1,
        resizeMode: "cover",
        minHeight: 360
    },
    headerTitle: {
        color: "#333",
        fontSize: 38,
        fontWeight: "bold"

    },
    headerSubtitle: {
        fontSize: 22,
        marginTop: 15
    },

    /** FlatList */
    flatList: {
        marginTop: 5,
        padding: 5
    },

    /** ItemList */
    itemListImage: {
        flexGrow: 1,
        resizeMode: 'stretch',
        justifyContent: "flex-end"
    },

    viewOpacity: {
        backgroundColor: "#00000066",
        flex: 1,
        justifyContent: "flex-end"
    },

    viewItemList: {
        height: 180,
        flexBasis: 0,
        flexGrow: 1,
        borderRadius: 15,
        overflow: 'hidden',
        margin: 10

    },
    titleItemList: {
        color: "#FFF",
        fontWeight: "bold",
        marginBottom: 15,
        marginLeft: 15
    },

    /** Search */
    viewSearch: {
        padding: 20
    },

    iconSearch: {
        color: "#ED1C23",
        fontSize: 25,
        position: "absolute",
        left: 40,
        top: 36
    },

    /** Loading */

    loadingContainer: {
        flex: 1,
        justifyContent: "center"
    },

    loadingHorizontal: {
        flexDirection: "row",
        justifyContent: "center"
    },

    loadingText: {
        marginTop: 5,
        marginRight: 10
    },


    /** Restaurantes */
    restauranteHeader:{
        marginTop: -StatusBar.currentHeight - 20,
    },

    restauranteTitle:{
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: "center",
        marginTop: 35
    },

    restaurantHeaderDiferenca:{
        marginTop: -140,
        flex: 1
    },

    restauranteLogo: {
        height: 160,
        width: 160,
        borderRadius: 80,
        borderColor: "#FFF",
        borderWidth: 5,
        zIndex: 99,
        position: "absolute",
        alignSelf: "center",
        top: -120,
        backgroundColor: "#FFF"
    },

    restauranteBackButton:{
        position: "absolute",
        top: 40,
        left: 30,
        padding: 20,
        backgroundColor: "#00000044",
        width: 40,
        height: 40,
        borderRadius: 20
    },

    restauranteBackButtonIcon:{
        position: "absolute",
        left: 12
    },


    /** Search Screen */

    searchWrapContent:{
        marginTop: 0
    },

    searchHeader: {
        paddingTop: StatusBar.currentHeight,
        height: 150,
        alignItems: "center",
        marginTop: 15
    },

    searchSubTitle:{
        color: "#AAA",
        fontSize: 16,
        marginTop: 10
    },

    searchTitle:{
        fontSize: 26,
        marginTop: 5,
        fontWeight:"bold"
    },

    searchBackButton:{
        position: "absolute",
        top: 20,
        left: 20,
        padding: 20
    },

    searchBackButtonIcon:{

    },



})