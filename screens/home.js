import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, Text, ScrollView} from 'react-native';
import {Badge, SearchBar} from 'react-native-elements';
import Circle from '../component/circle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TOP_PLACES, TOUR_GUİDE, SERVICE,CIRCLE} from '../src/data';
import FrequentlyDetail from '../component/frequentlyDetail';
import TourGuide from '../component/tour_guide';
import Service from '../component/services';
import SearchBarnew from '../component/searchBar';
import { useState } from 'react';
const Home = ({navigation}) => {
const [term,setTerm]=useState('');
console.log(term)
  return (
    <View>
    <ScrollView>
      <View style={[styles.userInfoSection]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.ProfileImage}
            source={require('../assets/profile.png')}
          />
        </View>

        <View>
          <Text style={styles.TextStyle}>Hi,Andy</Text>
          <Text style={styles.CaptionStyle}>
            {' '}
            <Icon name="location-on" style={{fontSize: 11}}></Icon> İstanbul
          </Text>

          <View style={[styles.circle, {left: 240, top: 28}]}>
            <Icon name="notifications-none" style={styles.icon}>
              <Badge status="success" />
            </Icon>
          </View>
          <View style={[styles.circle, {left: 311, top: 28}]}>
            <Icon
              name="message"
              style={[
                styles.icon,
                {fontSize: 23, paddingTop: 6, paddingLeft: 7},
              ]}>
              <Badge status="success" />
            </Icon>
          </View>
        </View>
        <View style={styles.deneme}>

              <SearchBarnew
              value={term}
              onChangevalue={(newTerm)=>setTerm(newTerm)}
              
              />

        </View>
        <View style={[styles.deneme,]}>
          <Circle data={CIRCLE}/>
          
        </View>

        <View style={{marginTop: 23}}>
          <Text style={styles.title}>Frequently visited</Text>
        </View>
              
        <ScrollView showsVerticalScrollIndicator={false}>
          <FrequentlyDetail data={TOP_PLACES} />
        </ScrollView>

        <View>
          <Text style={styles.title}>Tour Guide</Text>
        </View>
        <View style={{height: 100}}>
          <TourGuide data={TOUR_GUİDE} />
        </View>
        <View>
          <Text style={styles.title}>Services</Text>
        </View>
        <View>
          <Service data={SERVICE} />
        </View>
      </View>
    </ScrollView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  ProfileImage: {
    width: 40,
    height: 40,
    left: 2,
    top: 63,
    borderRadius: 63,
    flexDirection: 'row',
    marginTop: 0,
  },
  TextStyle: {
    marginTop: 20,
    width: 75,
    height: 26,
    left: 51,
    fontFamily: 'PlusJakartaSans-ExtraBold',
    fontSize: 16,
    color: 'black',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  CaptionStyle: {
    marginTop: 0,
    left: 50,
    fontSize: 12,
  },
  circle: {
    width: 40,
    height: 40,
    borderColor: '#E3E7EC',
    borderRadius: 63,
    borderWidth: 1,
    flexDirection: 'row',
    position: 'absolute',
    borderStyle: 'solid',
  },

  icon: {
    fontSize: 28,
    color: '#111111',
    paddingLeft: 3,
    paddingTop: 2,
    alignItems: 'center',
  },
  deneme: {
    height: 92,
    marginTop: 20,
   
  },
  cotainer: {
    flexDirection: 'row',

    backgroundColor: 'red',
  },
  title: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
    color: 'black',
    marginTop: 6,
    fontSize: 18,
    left: 7,
  },
});
