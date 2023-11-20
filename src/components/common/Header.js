// Header.js
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Header = ({ onMenuPress, navigation }) => {
  const handleLogoPress = () => {
    navigation.navigate("Home"); // Use the correct screen name for your HomeScreen
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../assets/images/pattern.png")} // Replace with your pattern image path
        style={styles.backgroundContainer}
      >
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={handleLogoPress}
          >
            <Image
              source={require("../../assets/images/LOGO.png")} // Replace with your logo image path
              style={styles.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
            <Image
              source={require("../../assets/images/Menu.png")} // Replace with your menu icon path
              style={styles.menuIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    justifyContent: "space-between", // Space distribution
    alignItems: "center", // Vertical center alignment
    flexDirection: "row", // Align children in a row
    justifyContent: "space-between", // Align children with space between
    alignItems: "center", // Align children at the start of the cross axis (top in a row)
    paddingTop: 20, // Padding at the top of the header
    backgroundColor: "transparent", // Light background
    borderBottomWidth: 1, // Border for delineation
    borderBottomColor: "#E0E0E0",
    paddingHorizontal: 20, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    shadowOpacity: 0.3, // Shadow for depth, iOS only
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 0 },
    elevation: 5, // Elevation for Android
    flexDirection: "row", // Row direction for items
  },
  root: {
    flex: 1, // Set the width according to your logo's aspect ratio // Set the height according to your logo's aspect ratio
  },
  container: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    top: 40, // Set the width according to your logo's aspect ratio // Set the height according to your logo's aspect ratio
  },
  logoContainer: {
    flex:1
  },
  logo: {
    width: 150, // Set the width according to your logo's aspect ratio
    height: 50,
    // Set the height according to your logo's aspect ratio
  },
  menuButton: {
    padding: 5, // Padding to increase the touchable area
  },
  menuIcon: {
    width: 30, // Adjust according to your icon size
    height: 30, // Adjust according to your icon size
  },
});

export default Header;
