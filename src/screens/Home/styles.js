import { Dimensions, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
   image:{
       width:'100%',
       height:500,
       resizeMode:'cover',
       justifyContent:'center',
   },
   title:{
    fontSize:80,
    fontWeight:'bold',
    color:'white',
    width:'70%',
    marginLeft:25
   },
   button:{
    backgroundColor:"#fff",
    width:200,
    height:40,
    borderRadius:10,
    marginTop:25,
    marginLeft:25,
    justifyContent:'center',
    alignItems:'center'

   },
   buttontext:{
    fontSize:16,
    fontWeight:'bold'
   },
   searchButton:{
    backgroundColor:"#fff",
    height:60,
    borderRadius:30,
    width:Dimensions.get('screen').width - 20,
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    position:'absolute',
    top:30,
    zIndex:100
   },
   searchbuttontext:{

   }
})

export default Styles
