import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './Modules/Auth/LoginScreen';
import SignUpScreen from './Modules/Auth/SignUpScreen';
import HomeScreen from './Modules/Home/HomeScreen';
import NewsHomeScreen from './Modules/News/HomeScreen';
import NewsDetailScreen from './Modules/News/NewsDetailScreen';
import BookmarkScreen from './Modules/Bookmarks/BookmarkScreen';


const RootStack = createStackNavigator()

const App = () => {
  return (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="NewsHomeScreen">
      <RootStack.Screen 
      name="LoginScreen" 
      component={LoginScreen} 
      options={{headerShown: false}} 
      />
      <RootStack.Screen 
      name="SignUpScreen" 
      component={SignUpScreen} 
      options={{headerShown: false}} 
      />
      <RootStack.Screen 
      name="HomeScreen" 
      component={HomeScreen}
      options={{headerShown: false, gestureEnabled:false}} 
      />
      <RootStack.Screen 
      name="NewsHomeScreen" 
      component={NewsHomeScreen}
      options={{headerShown: false, gestureEnabled:false, title:"Home"}} 
      />
      <RootStack.Screen 
      name="NewsDetailScreen" 
      component={NewsDetailScreen}
      options={{headerShown: false, gestureEnabled:true, title:""}} 
      />
      <RootStack.Screen 
      name="BookmarksScreen" 
      component={BookmarkScreen}
      options={{headerShown: false, gestureEnabled:true, title:""}} 
      />
    </RootStack.Navigator>
  </NavigationContainer>
  )
}



export default App;

