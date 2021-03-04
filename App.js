
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Instagram from './screens/Instagram';
import Facebook from './screens/Facebook'


export default class App extends React.Component {
  render(){
  return (
    
    <AppContainer/>
  );
}
}

const TabNavigator=createBottomTabNavigator({
  Instagram:{screen:Instagram},
  Facebook:{screen:Facebook}
});
const AppContainer= createAppContainer(TabNavigator)