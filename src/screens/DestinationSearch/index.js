import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Pressable} from 'react-native';
import Styles from './styles';
import searchRes from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Suggestionrow from './Suggestionrow';
const DestinationSearch = props => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests', {
            viewport: details.geometry.viewport,
          });
        }}
        fetchDetails
        styles={{
          textInput: Styles.textInput,
        }}
        query={{
          key: 'AIzaSyDYnkl8rGqpQ9-6XjrH3ssqNSDiJHpULGw',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <Suggestionrow item={item} />}
      />
    </View>
  );
};

export default DestinationSearch;
