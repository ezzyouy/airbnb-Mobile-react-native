import React from 'react'
import { View, Text } from 'react-native'

const Suggestionrow = ({item}) => (
            <Pressable
              onPress={() => navigation.navigate('Guests')}
              style={Styles.row}>
              <View style={Styles.iconContainer}>
                <Entypo name={'location-pin'} size={30} />
              </View>
              <Text style={Styles.locationText}>{item.description}</Text>
            </Pressable>
          )
    


export default Suggestionrow
