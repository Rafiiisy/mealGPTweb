// import React from "react";
// import UserProfileScreen from "./src/screens/UserProfile/UserProfileScreen";
// import Header from "./src/components/common/Header"
// const App = () => {
//   return <UserProfileScreen />;
//   // return <Header />;
// };

// export default App;

// App.js (located at the root level)
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginScreen from './src/screens/Login/LoginScreen'; // Adjust the path accordingly

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;