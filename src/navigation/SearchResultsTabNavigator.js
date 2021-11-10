import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/searchResults'
import SearchResultMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
    return (
       <Tab.Navigator screenOptions={{
           activeTintColor:'#f15454',
           indicatorStyle:{
               backgroundColor:'#f15454'
           }
       }}>
           <Tab.Screen name={"list"} component={SearchResultsScreen}/>
           <Tab.Screen name={"map"} component={SearchResultMap}/>
       </Tab.Navigator> 
    )
}

export default SearchResultsTabNavigator
