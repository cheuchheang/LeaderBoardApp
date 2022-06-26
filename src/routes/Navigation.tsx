import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamsList} from '../types/navigation';
import {COLORS} from '../constants/colors';
const Stack = createNativeStackNavigator<StackParamsList>();
import InputScreen from '../components/InputScreen/InputScreen';
import BoardScreen from '../components/BoardScreen/BoardScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Leaderboard"
          component={BoardScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerShadowVisible: false,
            headerTintColor: COLORS.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
