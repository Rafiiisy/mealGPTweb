import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


const Sidebar = ({ isVisible, onClose }) => {
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
        style={styles.menuItem}
        onPress={() => console.log("Profile clicked")}
      >
        <Image
          source={require("../../assets/icons/icon-profile.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>Profile</Text>
      </TouchableOpacity>
      {/*Dashboard */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Dashboard clicked")}
      >
        <Image
          source={require("../../assets/icons/icon-dashboard.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>Dashboard</Text>
      </TouchableOpacity>
      {/*Meal Plan */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Meal Plan clicked")}
      >
        <Image
          source={require("../../assets/icons/icon-apple.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>Dashboard</Text>
      </TouchableOpacity>
      {/*Workout Plan */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Workout Plan clicked")}
      >
        <Image
          source={require("../../assets/icons/icon-gym.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>Workout Plan</Text>
      </TouchableOpacity>
      {/*FAQ */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("FAQ clicked")}
      >
        <Image
          source={require("../../assets/icons/icon-faq.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>FAQ</Text>
      </TouchableOpacity>
      {/*Settings */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => console.log("Settings clicked")}
      >
        <Image
          source={require("../../assets/icons/icon-setting.png")} // Replace with the path to your profile icon
          style={styles.icon}
        />
        <Text style={styles.menuItemText}>Settings</Text>
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
    alignItems: "flex-start"
    // Rest of your styles
  },
  logo: {
    width: 100,
    height: 50,
    marginBottom: 65,
    left: 50
    // Rest of your logo styles
  },
  icon: {
    width: 25, // Set the width of your icon
    height: 25, // Set the height of your icon
    marginRight: 10, // Add some margin between icon and text
    // You can also add other styles such as borderRadius, etc., if needed
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 60,
    // Rest of your menu item styles
  },
  menuItemText: {
    color: "#FFF",
    marginLeft: 10,
    fontSize: 25
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
    fontWeight: "bold"
    // ... other text styles for the 'x' button
  },
  // Rest of your styles
});

export default Sidebar;
