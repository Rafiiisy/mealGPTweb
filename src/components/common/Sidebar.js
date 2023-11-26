import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


const Sidebar = ({ isVisible, onClose, navigation }) => {
  if (!isVisible) return null; // Don't render the sidebar if it's not supposed to be visible

  return (
    <ImageBackground
      source={require("../../assets/images/Pattern 2.png")} // Your background pattern
      style={styles.sidebarContainer}
    >
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>x</Text> {/* Style as needed */}
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/LOGO white.png")} // Your logo
        style={styles.logo}
      />

      {/* Menu items */}
      {/*Profile */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UserProfile"); // Navigate to UserProfileScreen
          onClose(); // Close the sidebar
        }}
        style={styles.menuItem}
      >
        <Image
          source={require("../../assets/icons/icon-profile.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>Profile</Text>
      </TouchableOpacity>
      {/*Dashboard */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Dashboard"); // Navigate to UserProfileScreen
          onClose(); // Close the sidebar
        }}
        style={styles.menuItem}
      >
        <Image
          source={require("../../assets/icons/icon-dashboard.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>Dashboard</Text>
      </TouchableOpacity>
      {/*Meal Plan */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MealPlan"); // Navigate to UserProfileScreen
          onClose(); // Close the sidebar
        }}
        style={styles.menuItem}
      >
        <Image
          source={require("../../assets/icons/icon-apple.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>Meal Plan</Text>
      </TouchableOpacity>
      {/*Workout Plan */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("WorkoutPlan"); // Navigate to UserProfileScreen
          onClose(); // Close the sidebar
        }}
        style={styles.menuItem}
      >
        <Image
          source={require("../../assets/icons/icon-gym.png")} // Replace with the path to your profile icon
          style={styles.icon3}
        />
        <Text style={styles.menuItemText}>Workout Plan</Text>
      </TouchableOpacity>
      {/*FAQ */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("FAQ"); // Navigate to UserProfileScreen
          onClose(); // Close the sidebar
        }}
        style={styles.menuItem}
      >
        <Image
          source={require("../../assets/icons/icon-faq.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>FAQ</Text>
      </TouchableOpacity>
      {/*Settings */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Settings"); // Navigate to UserProfileScreen
          onClose(); // Close the sidebar
        }}
        style={styles.menuItem}
      >
        <Image
          source={require("../../assets/icons/icon-setting.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>Settings</Text>
      </TouchableOpacity>
      {/*Logout */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home"); // Navigate to UserProfileScreen
          onClose(); // Close the sidebar
        }}
        style={styles.menuItem}
      >
        <Image
          source={require("../../assets/icons/icon-logout.png")} // Replace with the path to your profile icon
          style={styles.icon2}
        />
        <Text style={styles.menuItemText}>Log out</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sidebarContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 250, // Width of the sidebar
    backgroundColor: "#009934", // A fallback color if the image doesn't load
    padding: 20,
    alignItems: "flex-start",
    zIndex: 1
    // Rest of your styles
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 65,
    left: 50,
    // Rest of your logo styles
  },
  icon: {
    left: 10,
    width: 25, // Set the width of your icon
    height: 25, // Set the height of your icon
    marginRight: 0, // Add some margin between icon and text
    // You can also add other styles such as borderRadius, etc., if needed
  },
  icon2: {
    left: 10,
    width: 23, // Set the width of your icon
    height: 28, // Set the height of your icon
    marginRight: 0, // Add some margin between icon and text
    // You can also add other styles such as borderRadius, etc., if needed
  },
  icon3: {
    left: 10,
    width: 23, // Set the width of your icon
    height: 15, // Set the height of your icon
    marginRight: 0, // Add some margin between icon and text
    // You can also add other styles such as borderRadius, etc., if needed
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
    // Rest of your menu item styles
  },
  menuItemText: {
    Top: 0,
    color: "#FFF",
    marginLeft: 40,
    fontSize: 25,
    // Rest of your menu item text styles
  },
  closeButton: {
    alignSelf: "flex-start",
    padding: 16,
    // ... other styles you might want for the close button
  },
  closeButtonText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    // ... other text styles for the 'x' button
  },
  // Rest of your styles
});

export default Sidebar;
