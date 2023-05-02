import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {TOP_PLACES} from '../src/data';
import {FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import {useState} from 'react';

const FrequentlyDetail = ({data}) => {
  const [like, setLike] = useState([]);

  const onFavorite = trip => {
    setLike([...like, trip]);
  };

  // function to remove an item from favorite list
  const onRemoveFavorite = trip => {
    const filteredList = like.filter(item => item.id !== trip.id);
    setLike(filteredList);
  };

  const ifExists = trip => {
    if (like.filter(item => item.id === trip.id).length > 0) {
      return true;
    }
    return false;
  };
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item}) => {
        return (
          <View>
            <View style={{marginTop: 12}}>
              <Image
                source={item.image}
                style={{height: 150, width: 160, borderRadius: 15, margin: 8}}
              />
              <View style={styles.favButton}>
                <TouchableOpacity
                  onPress={() =>
                    ifExists(item) ? onRemoveFavorite(item) : onFavorite(item)
                  }>
                  <Icon
                    name={ifExists(item) ? 'favorite' : 'favorite-outline'}
                    color={ifExists(item) ? 'red' : 'black'}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>
              <Image source={require('../assets/Vector.png')} />
              {item.location}
            </Text>
            <View style={{margin: 5, flexDirection: 'row'}}>
              <Text style={styles.price}> {item.price} </Text>

              <Text style={styles.stars}>
                <Image source={require('../assets/stars.png')} />
                {item.stars}{' '}
              </Text>
              <Text style={styles.comment}>({item.comment})</Text>
            </View>
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  favButton: {
    position: 'absolute',
    marginLeft: 125,
    marginTop: 14,
    backgroundColor: '#FFFFFF',
    width: 36,
    height: 36,
    justifyContent: 'center',
    borderRadius: 18,
  },
  title: {
    left: 16,
    fontFamily: 'PlusJakartaSans-ExtraBold',
    color: '#111111',
  },
  location: {
    left: 16,
    fontFamily: 'PlusJakartaSans',
    color: '#78828A',
  },
  price: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
    color: '#111111',
  },
  stars: {
    color: '#FFCD1A',
    fontSize: 13,
    marginLeft: 53,
    marginTop: 2,
  },
  comment: {
    marginLeft: 137,
    position: 'absolute',
    fontSize: 13,
    marginTop: 2,
  },
});

export default FrequentlyDetail;
