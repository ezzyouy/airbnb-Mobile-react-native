import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, Pressable} from 'react-native';
import Styles from './styles';

const GuestScreen = (props) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const navigation=useNavigation();
  return (
    <View style={{justifyContent:'space-between', height:'100%'}}>
      <View>
        <View style={Styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Age 13 or abore</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Pressable
              onPress={() => setAdults(Math.max(0,adults - 1))}
              style={Styles.button}>
              <Text style={{fontSize:20, color:'#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal:20, fontSize:16}}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={Styles.button}>
              <Text style={{fontSize:20, color:'#474747'}}>+</Text>
            </Pressable>
          </View>  
        </View>
        <View style={Styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Age 2-12</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Pressable
              onPress={() => setChildren(Math.max(0,children - 1))}
              style={Styles.button}>
              <Text style={{fontSize:20, color:'#474747'}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal:20, fontSize:16}}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={Styles.button}>
              <Text style={{fontSize:20, color:'#474747'}}>+</Text>
            </Pressable>
          </View>  
        </View>
        <View style={Styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: '#8d8d8d'}}>Age 13 or abore</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Pressable
            onPress={() => setInfants(Math.max(0,infants - 1))}
            style={Styles.button}>
            <Text style={{fontSize:20, color:'#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal:20, fontSize:16}}>{infants}</Text>
          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={Styles.button}>
            <Text style={{fontSize:20, color:'#474747'}}>+</Text>
          </Pressable>
        </View>  
      </View>
      
        <Pressable 
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResult'
            }
        })}
        style={{
            marginTop:340, 
            backgroundColor:'#f15454',
            alignItems:'center',
            justifyContent:'center',
            height:50,
            marginHorizontal:20
            }}>
          <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}>Search</Text>
        </Pressable>
      </View>
    
    </View>
  );
};

export default GuestScreen;
