import React from "react";
import { View,Text, FlatList } from "react-native";
import { Image } from "react-native-elements";
import { StyleSheet } from "react-native";
const Circle=({data})=>{
return (
   
    <FlatList
     horizontal
     showsHorizontalScrollIndicator={false}
     data={data}
     keyExtractor={i=>i.id}
     renderItem={({item})=>{
        return(

            <View style={styles.Container}>

            <Image source={item.image} style={styles.ImageStyle}/>
            <Text style={styles.TextStyle}>{item.title}</Text>
            </View>

        );

     }}
    
    
    />


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
        alignItems:"center",
        justifyContent:"space-between",
        margin:13
        
        
    },
    ImageStyle:{
        height:35,
        width:35,
        marginTop:10
    }

}))