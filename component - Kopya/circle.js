import React from "react";
import { View,Text } from "react-native";
import { Image } from "react-native-elements";
import { StyleSheet } from "react-native";
const Circle=(props)=>{
return (
    <View style={styles.Container}>

    <Image source={props.source} style={styles.ImageStyle}/>
    <Text style={styles.TextStyle}>{props.title}</Text>
    </View>



);


}

export default Circle;

const styles=StyleSheet.create(({
    TextStyle:{
        marginTop:15,
        fontFamily:"PlusJakartaSans",
        color:"#78828A"

    },
    Container:{
        borderRadius:100,
        backgroundColor:"#F6F8FE",
        height:63,
        width:63,
        alignItems:"center"
    },
    ImageStyle:{
        height:35,
        width:35,
        marginTop:10
    }

}))