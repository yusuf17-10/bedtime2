import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import WriteStoryScreen from './Screens/WriteStoryScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory :WriteStoryScreen,
  ReadStory:ReadStoryScreen
},

{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
          
          source={require("./assets/write.png")}
          style = {{width:40,height:40}}
          
          />
        )
      }
      else if(routeName === "ReaadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style = {{width:40,height:40}}
          />
        )
      }
    }
  })
}

)