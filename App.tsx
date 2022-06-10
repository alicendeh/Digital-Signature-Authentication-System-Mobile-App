import React from 'react';
import { StyleSheet } from 'react-native';
import { Onboard, Selection, Login, Register } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParams = {
  Onboard: undefined;
  Login: undefined;
  Signup: undefined;
  Selection: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboard"
          options={{ headerShown: false }}
          component={Onboard}
        />
        <Stack.Screen
          name="Selection"
          options={{ headerShown: false }}
          component={Selection}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={Register}
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
