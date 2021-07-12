import React from 'React'
import{StyleSheet, Text, View, Image} from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';


const TabNavigator = createBottomTabNavigator({
    ReadStory: {screen: ReadStoryScreen},
    WriteStory: {screen: WriteStoryScreen},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        console.log(routeName)
        if(routeName === "ReadStory"){
          return(
            <Image
            source={require("./read.png")}
            style={{width:40, height:40}}
          />
          )
          
        }
        else if(routeName === "WriteStory"){
          return(
            <Image
            source={require("./write.png")}
            style={{width:40, height:40}}
          />)
          
        }
      }
    })
  }
  );

  const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});