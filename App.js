import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/Home/HomeScreen";
import UserProfileScreen from "./src/screens/UserProfile/UserProfileScreen";
import LoginScreen from "./src/screens/Login/LoginScreen"
import SignupScreen from "./src/screens/Signup/SignupScreen"
import MealPlannerScreen from "./src/screens/MealPlanner/MealPlannerScreen";
import UserPreferenceScreen from "./src/screens/UserPreferenceScreen/UserPreferenceScreen";
import FaceToBMIScreen from "./src/screens/FaceToBMIScreen/FaceToBMIScreen";
// import MealPlannerScreen from "./src/screens/MealPlanner/MealPlannerScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MealPlan">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="UserPreference" component={UserPreferenceScreen} />
        <Stack.Screen name="MealPlan" component={MealPlannerScreen} />
        <Stack.Screen name="FaceToBMI" component={FaceToBMIScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;