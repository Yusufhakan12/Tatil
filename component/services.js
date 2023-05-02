import React from "react";
import { FlatList, View,StyleSheet,Image } from "react-native";
import { Text } from "react-native-elements";

const Service=({data})=>{

    return(

      
        <FlatList
        
      
        data={data}
        keyExtractor={i=>i.d}
        renderItem={({item})=>{

            return(

                <View>
                <View style={{flexDirection: 'row', margin: 1}}>
              <View style={{margin: 4}}>
                <Image source={item.image} style={{height: 84, width: 84}} />
               

                
              </View>

              <View style={{margin: 4}}>
                <Text style={styles.title}>{item.title}</Text>

                

                <Text style={styles.location}>
                  <Image source={require('../assets/Vector(1).png')} />
                  {item.location}
                </Text>
              </View>
          
        <View>
        <Text style={styles.price}>
          <Text style={{color:"black"}} >{item.price}</Text>/
          <Text style={{color:"#78828A"}}>{item.transform}</Text>
          </Text>
         
          <Text style={styles.starsText}>
                   
                   <Image source={require('../assets/stars.png')} />
                   {item.stars}{item.comment}
                 </Text>
                 
            </View>
        
          
              

                </View>
                
                </View>
            );
        }}
        
        />
      
    )
}

const styles = StyleSheet.create({
    title: {
      fontSize: 16,
      fontFamily: 'PlusJakartaSans-Bold',
      color: 'black',
    },
    price: {
      fontSize: 14,
      fontFamily: 'PlusJakartaSans-Bold',
      margin:10,
      marginLeft:70
    },
    location: {
      color: '#434E58',
      fontSize: 12,
      marginTop: 35,
    },
    starsContainer: {
      position: 'absolute',
  
      marginTop: 64,
      backgroundColor: 'white',
      height: 30,
      width: 65,
      borderRadius: 16,
      marginLeft: 9,
    },
    starsText: {
      fontSize: 12,
      fontFamily: 'PlusJakartaSans',
      color: '#171725',
      textAlign: 'center',
      paddingTop: 5,
      paddingLeft: 86,
      marginTop: 18,
     
    },
  });
export default Service