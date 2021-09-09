import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { CardDetails } from '../screens/CardDetails';
import { MyCars } from '../screens/MyCars';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes () {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name='Splash' component={Splash}/>
        <Screen name='Home' component={Home} options={{gestureEnabled: false}}/>
        <Screen name='CardDetails' component={CardDetails}/>
        <Screen name='MyCars' component={MyCars}/>
        <Screen name='Scheduling' component={Scheduling}/>
        <Screen name='SchedulingDetails' component={SchedulingDetails}/>
        <Screen name='SchedulingComplete' component={SchedulingComplete}/>
      </Navigator>
    </NavigationContainer>
  );
}
