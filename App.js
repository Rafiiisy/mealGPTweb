import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/Home/HomeScreen";
import UserProfileScreen from "./src/screens/UserProfile/UserProfileScreen";
import Header from "./src/components/common/Header"
import LoginScreen from "./src/screens/Login/LoginScreen"
import SignupScreen from "./src/screens/Signup/SignupScreen"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;