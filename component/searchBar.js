import React from "react";
import { View,Text, TextInput,StyleSheet,Image ,TouchableOpacity} from "react-native";
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
const SearchBarnew=({term,onChangevalue})=>{
    const navigation = useNavigation();
return(

<View style={styles.background}>
        <Image source={require("../assets/Search.png")}
        style={styles.iconStyle}
        />
        <TextInput  style={styles.inputStyle}
         placeholder="Search..." 
         value={term}
         onChangeText={(newText)=>onChangevalue(newText)}
         
        />

        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate('Search')

        }}
        >

            <Image source={require("../assets/searchIcon.png")}
            style={styles.ImageStyle}
            />
        </TouchableOpacity>
    </View>
);

}


const styles=StyleSheet.create({

    background:{
        marginTop:40,
        backgroundColor:'#F6F8FE',
        height:52,
        borderRadius:5,
        flexDirection:'row',
        borderRadius:24
        
    },
    inputStyle:{
        
        flex:1,
        fontSize:16,
    },
    iconStyle:{
        fontSize:16,
        marginHorizontal:10,
        marginVertical:5,
        marginTop:18

    },
    ImageStyle:{
        marginTop:20,
        marginRight:20
    }

});
export default SearchBarnew;