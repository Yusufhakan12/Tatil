import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import SearchBarnew from '../component/searchBar';
import DatePicker from 'react-native-modern-datepicker';
import {getToday, getFormatedDate} from 'react-native-modern-datepicker';
const SearchDestination = () => {
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    'YYYY/MM/DD',
  );
  const [term, setTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(false);
  function handleOnPress() {
    setOpen(!open);
  }
  function handleOnChange(propDate) {
    setDate(propDate);
  }
  return (
    <View>
      <View style={{margin: 20, marginTop: 1}}>
        <SearchBarnew
          value={term}
          onChangevalue={newTerm => setTerm(newTerm)}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={handleOnPress}>
          <View style={styles.dateLoc}>
            <Text style={styles.TextStyle}>Date</Text>
            <Image
              source={require('../assets/takvim.png')}
              style={{margin: 14, marginLeft: 52}}
            />
          </View>
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker
                mode="calender"
                minimumDate={startDate}
                selected={date}
                onDateChange={handleOnChange}
              />
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{right: 13, height: 39, width: 133, borderRadius: 28}}>
                  <TouchableOpacity onPress={handleOnPress}>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 15,
                        margin: 8,
                        marginLeft: 50,
                      }}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    left: 12,
                    height: 39,
                    backgroundColor: '#009B8D',
                    width: 133,
                    borderRadius: 28,
                  }}>
                  <TouchableOpacity onPress={handleOnPress}>
                    <Text
                      style={{
                        fontSize: 15,
                        margin: 8,
                        marginLeft: 50,
                        color: 'white',
                      }}>
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity>
          <View style={styles.dateLoc}>
            <Text style={styles.TextStyle}>Location</Text>
            <Image
              source={require('../assets/Vector(2).png')}
              style={{margin: 14, marginLeft: 29}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateLoc: {
    backgroundColor: '#F6F8FE',
    height: 50,
    width: 156,
    borderRadius: 24,
    marginLeft: 30,
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '87%',
    padding: 35,
    alignItems: 'center',
  },
  TextStyle: {
    margin: 14,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans',
    color: '#9CA4AB',
  },
});
export default SearchDestination;
