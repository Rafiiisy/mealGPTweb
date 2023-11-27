import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-web";
import { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";

const HomeScreen = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };

  const handleLoginPress = () => {
    navigation.navigate("Login"); // Navigate to Login screen
  };

  const handleSignupPress = () => {
    navigation.navigate("SignUp"); // Navigate to SignUp screen
  };


  return (
    <View style={styles.root}>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />
      <TouchableOpacity style={styles.LoginButton} onPress={handleLoginPress}>
        <Image
          source={require("../../assets/images/Log in.png")}
          style={styles.LoginImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignUpButton} onPress={handleSignupPress}>
        <Image
          source={require("../../assets/images/Sign up.png")}
          style={styles.SignUpImage}
        />
      </TouchableOpacity>
      <ScrollView style={styles.landing}>
        {/* Main Content */}
        <Image
          source={require("../../assets/images/MOTO & TABLE.png")}
          style={styles.tableWithBowls}
        />
        <Image
          source={require("../../assets/images/Line 2.png")}
          style={styles.lineUnderHeader}
        />
        {/* ... Other Images and Text */}
        <View style={styles.container2}>
          <Image
            source={require("../../assets/images/Group 11.png")}
            style={styles.MainBody}
          />
          {/* Try Now Button */}
          <TouchableOpacity
            style={styles.tryNowButton}
            onPress={handleSignupPress}
          >
            <Image
              source={require("../../assets/images/TRY NOW.png")}
              style={styles.tryNowImage}
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: 100 }}>
          {" "}
          {/* Adjust height as needed /}
          {/ You can put additional content here or leave it empty */}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

// Example styles that might correspond to some of your CSS
const styles = StyleSheet.create({
  landing: {
    flex: 1,
    height: "110%",
    backgroundColor: "#f2f2f2",
  },
  root: {
    flex: 1, // Use flex to fill the screen
    justifyContent: "space-between", // Push content to the top and footer to the bottom
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 134,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container2: {
    backgroundColor: "transparent",
    marginHorizontal: 40,
  },
  tableWithBowls: {
    width: "100%",
    top: 30 * 1.1,
    height: 100 * 1.1, // Adjust height accordingly
    resizeMode: "contain",
  },
  tryNowButton: {
    position: "absolute",
    bottom: 20,
    // put in right
    right: 389,
  },
  tryNowImage: {
    width: 241 * 0.6,
    height: 77 * 0.6,
    left: 250,
  },
  textWrapper: {
    fontSize: 30,
    color: "#004f1b",
    // fontFamily: 'YourFontFamily', // Make sure the font is supported in React Native
  },
  MainBody: {
    width: 1000,
    padding: 20,
    height: 1000, // Adjust height accordingly
    alignSelf: "center",
    resizeMode: "contain",
  },
  lineUnderHeader: {
    width: 2500,
    padding: 20,
    height: 100, // Adjust height accordingly
    alignSelf: "center",
    resizeMode: "contain",
  },
  LoginButton: {
    //top left of screen next to logo
    position: "absolute",
    top: 60,
    left: 160,
    zIndex: 1,
  },
  LoginImage: {
    width: 140,
    height: 50,
  },
  SignUpButton: {
    //top left of screen next to logo
    position: "absolute",
    top: 60,
    left: 312,
    zIndex: 1,
  },
  SignUpImage: {
    width: 140,
    height: 50,
  },
});

// Remember that you'll need to adjust these styles for your actual design.

export default HomeScreen;
