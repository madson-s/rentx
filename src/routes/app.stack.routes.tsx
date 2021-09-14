import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Splash } from '../screens/Splash';
import { CardDetails } from '../screens/CardDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { TabRoutes } from './app.tab.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes () {
  return(
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Screen name='Splash' component={Splash}/> */}
      <Screen name='Home' component={TabRoutes}/>
      <Screen name='CardDetails' component={CardDetails}/>
      <Screen name='Scheduling' component={Scheduling}/>
      <Screen name='SchedulingDetails' component={SchedulingDetails}/>
      <Screen name='Confirmation' component={Confirmation}/>
    </Navigator>
  );
}
