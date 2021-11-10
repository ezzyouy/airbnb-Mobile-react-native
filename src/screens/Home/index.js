import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import Styles from './styles';
import Fontisto from "react-native-vector-icons/Fontisto";
import {useNavigation} from '@react-navigation/native';

const HomeScreen = props => {
    const navigation=useNavigation(); 
    return (
        <View>
            <Pressable
                style={Styles.searchButton}
                onPress={() => navigation.navigate('Destination Search')}>
                    <Fontisto name="search" size={25} color={'#f15454'}/>
                <Text style={Styles.searchbuttontext}>Where are you going</Text>
            </Pressable>
            <ImageBackground
                source={require('../../../assets/images/wallpaper.jpeg')}
                style={Styles.image}>
                <Text style={Styles.title}>Go Near</Text>
                <Pressable
                    style={Styles.button}
                    onPress={() => console.warn('Explore Btn clicked')}>
                    <Text style={Styles.buttontext}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
