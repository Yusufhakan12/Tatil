import React from 'react';
import {TOUR_GUİDE} from '../src/data';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';

const TourGuide = ({data}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={i => i.id}
      renderItem={({item}) => {
        return (
          <View>
            <View style={{flexDirection: 'row', margin: 1}}>
              <View style={{margin: 4}}>
                <Image source={item.image} style={{height: 84, width: 84}} />
                <View style={styles.starsContainer}>
                  <Text style={styles.starsText}>
                    {' '}
                    <Image source={require('../assets/stars.png')} />{' '}
                    {item.stars}
                  </Text>
                </View>
              </View>

              <View style={{margin: 4}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>
                  {item.price} ({item.time})
                </Text>
                <Text style={styles.location}>
                  <Image source={require('../assets/Vector(1).png')} />
                  {item.location}
                </Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Bold',
    color: 'black',
  },
  price: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans',
    color: '#78828A',
  },
  location: {
    color: '#434E58',
    fontSize: 12,
    marginTop: 15,
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
    paddingLeft: 0,
  },
});
export default TourGuide;
