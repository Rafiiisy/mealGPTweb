import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/Home/HomeScreen";
import UserProfileScreen from "./src/screens/UserProfile/UserProfileScreen";
import LoginScreen from "./src/screens/Login/LoginScreen"
import SignupScreen from "./src/screens/Signup/SignupScreen"
import MealPlannerScreen from "./src/screens/MealPlanner/MealPlannerScreen";
import MealPlanScreen from "./src/screens/MealPlanner/MealPlanScreen";
import WorkoutPlanScreen from "./src/screens/Workout/WorkoutPlanScreen";
import UserPreferenceScreen from "./src/screens/UserPreferenceScreen/UserPreferenceScreen";
import UserPreferenceScreen2 from "./src/screens/UserPreferenceScreen/UserPreferenceScreen2";
import UserPreferenceScreen3 from "./src/screens/UserPreferenceScreen/UserPreferenceScreen3";
import FaceToBMIScreen from "./src/screens/FaceToBMIScreen/FaceToBMIScreen";
import DashboardScreen from "./src/screens/Dashboard/DashboardScreen";
// import MealPlannerScreen from "./src/screens/MealPlanner/MealPlannerScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home is the landing page */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* Redirect to User Preferences after signing up */}
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserPreference"
          component={UserPreferenceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserPreference2"
          component={UserPreferenceScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserPreference3"
          component={UserPreferenceScreen3}
          options={{ headerShown: false }}
        />

        {/* Redirect to Login after User Preferences */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Redirect to Dashboard after Login */}
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />

        {/* Accessible from Sidebar */}
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="MealPlan" component={MealPlanScreen} /> 
        <Stack.Screen name="WorkoutPlan" component={WorkoutPlanScreen} />
        <Stack.Screen name="MealPlanner" component={MealPlannerScreen} />
        <Stack.Screen name="FaceToBMI" component={FaceToBMIScreen} />
        {/* ...other screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;