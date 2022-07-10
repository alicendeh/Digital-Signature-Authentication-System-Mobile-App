import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Onboard,
  Selection,
  Login,
  Register,
  Pin,
  UpdateKey,
  PerssonalDetails,
} from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './navigation/BottomNavigation';

export type RootStackParams = {
  Onboard: undefined;
  Login: undefined;
  Signup: undefined;
  Selection: undefined;
  Register: undefined;
  HomeNavigator: undefined;
  Pin: undefined;
  UpdateKey: undefined;
  PerssonalDetails: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeNavigator"
          component={HomeNavigator}
        />
        <Stack.Screen
          name="UpdateKey"
          options={{ headerShown: false }}
          component={UpdateKey}
        />
        <Stack.Screen
          name="Onboard"
          options={{ headerShown: false }}
          component={Onboard}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Pin"
          component={Pin}
        />

        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={Register}
        />

        <Stack.Screen
          name="Selection"
          options={{ headerShown: false }}
          component={Selection}
        />
        <Stack.Screen
          name="PerssonalDetails"
          options={{ headerShown: false }}
          component={PerssonalDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
