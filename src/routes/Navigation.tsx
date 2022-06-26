import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamsList} from '../types/navigation';
const Stack = createNativeStackNavigator<StackParamsList>();
import InputScreen from '../views/InputScreen';
import BoardScreen from '../views/BoardScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Input"
          component={InputScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Leaderboard"
          component={BoardScreen}
          options={{
            headerStyle: {
              backgroundColor: '#4A4AB6',
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
