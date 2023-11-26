// Footer.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Make sure to install react-native-vector-icons

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.universityText}>Universitas Gadjah Mada</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => console.log("Instagram icon pressed")}
          style={styles.iconSpacing}
        >
          <FontAwesome name="instagram" size={24} color="#009934" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Twitter icon pressed")}
          style={styles.iconSpacing}
        >
          <FontAwesome name="twitter" size={24} color="#009934" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Facebook icon pressed")}
          style={styles.iconSpacing}
        >
          <FontAwesome name="facebook" size={24} color="#009934" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("LinkedIn icon pressed")}
          style={styles.iconSpacing}
        >
          <FontAwesome name="linkedin" size={24} color="#009934" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    // position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // This will push the text and icons container to opposite ends
    paddingHorizontal: 20, // Adjust this as needed for padding on the sides
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingVertical: 10,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: "#000",
    shadowOffset: { height: 2, width: 0 },
    height: 65, // You may want to adjust this if you need more vertical space
  },

  universityText: {
    fontSize: 16,
    color: "#009934",
    marginLeft: 15, // Adjust this for the desired spacing from the left edge
  },

  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  iconSpacing: {
    marginLeft: 10, // Adjust this for the desired spacing between icons
  },
  // Add additional styles if needed
});

export default Footer;
