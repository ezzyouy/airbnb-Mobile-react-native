import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        margin:20
    },
    image:{
        width:'100%',
        aspectRatio:3 / 2,
        resizeMode:'cover',
        borderRadius:10
    },
    prices:{
        fontSize:18
    },
    oldPrice:{
        color:'#5b5b5b',
        textDecorationLine:'line-through',
    },
    newPrice:{
        fontWeight:'bold'
    },
    totalPrice:{
        color:'#5b5b5b',
        textDecorationLine:'underline', 
    },
    bedroom:{
        marginVertical:10,
        color:'#5b5b5b',

    },
    description:{
        fontSize:18,
        lineHeight:26

    },
});

export default Styles;

