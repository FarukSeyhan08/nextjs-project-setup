import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PawFortuneScreen from './screens/PawFortuneScreen';
import MeowInterpretationScreen from './screens/MeowInterpretationScreen';
import BreedDetectionScreen from './screens/BreedDetectionScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#888',
        }}
      >
        <Tab.Screen name="Paw Fortune" component={PawFortuneScreen} />
        <Tab.Screen name="Meow Interpretation" component={MeowInterpretationScreen} />
        <Tab.Screen name="Breed Detection" component={BreedDetectionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
