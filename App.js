// import React from "react";
// import UserProfileScreen from "./src/screens/UserProfile/UserProfileScreen";
// import Header from "./src/components/common/Header"
// const App = () => {
//   return <UserProfileScreen />;
//   // return <Header />;
// };

// export default App;


// App.js (located at the root level)
// import React from 'react';
// import { SafeAreaView, StatusBar } from 'react-native';
// import LoginScreen from './src/screens/Login/LoginScreen'; // Adjust the path accordingly

// const App = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle="dark-content" />
//       <LoginScreen />
//     </SafeAreaView>
//   );
// };

// export default App;


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login/LoginScreen';
import SignUpScreen from './src/screens/Signup/SignupScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;