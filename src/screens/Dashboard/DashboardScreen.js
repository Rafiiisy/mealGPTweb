import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";

const DashboardScreen = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };

  return (
    <>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />
      {/* <View style={{flex: 1, backgroundColor: "blue"}}></View> */}
      <ScrollView>
        <Text style={styles.dashboardText}>DASHBOARD</Text>

        <View style={styles.mainContainer}>
          <View style={styles.container1}>
            <Image
              source={require("../../assets/images/User info.png")}
              style={styles.userInfo}
            />
            <Image
              source={require("../../assets/images/Progress Tab.png")}
              style={styles.progresstab}
            />
          </View>

          <View style={styles.container2}>
            <Image
              source={require("../../assets/images/Info tab.png")}
              style={styles.infotab}
            />
          </View>
        </View>

        <View style={styles.mototext}>
          <Image
            source={require("../../assets/images/MOTO & TABLE.png")}
            style={styles.motoTable}
          />
        </View>
      </ScrollView>

      <Footer />
      <Sidebar
        navigation={navigation}
        isVisible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row", // Adjusted to column layout
    justifyContent: "center",
    alignItems: "center",
    padding: 60,
    backgroundColor: "#f3f3f3",
  },
  container1: {
    flexDirection: "column", // Items will be laid out in a column
    justifyContent: "space-around", // Distribute space evenly around items
    alignItems: "center", // Center items horizontally in the container
    // backgroundColor: "blue",
    height: 500,
    paddingVertical: 60, // Adds padding to the top and bottom
  },
  progresstab: {
    width: 250 * 1.45,
    height: 200 * 1.45,
    borderRadius: 10,
    resizeMode: "contain",
    bottom: 8
    // backgroundColor: "orange", // Maintain aspect ratio and crop as needed
  },
  userInfo: {
    width: 250 * 1.45,
    height: 100 * 1.45,
    resizeMode: "contain", // Maintain aspect ratio and crop as needed
    marginTop: 0,
    
    // backgroundColor: "yellow", // Adds space only at the top of userInfo
  },
  container2: {
    flexDirection: "column", // Adjusted to column layout
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: "red",
    // padding: 20,
  },
  dashboardText: {
    fontFamily: "MADE Soulmaze",
    alignSelf: "center",
    color: "rgb(0, 85, 29)",
    top: 20,
    fontSize: 40,
    fontWeight: "regular",
    marginBottom: 10,
  },
  mototext: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f3f3f3",
  },
  infotab: {
    width: 400 * 1.2,
    height: 400 * 1.2,
    borderRadius: 10,
    resizeMode: "contain", // Maintain aspect ratio and crop as needed
    marginBottom: 10, // Adjust the margin or other styles as needed
  },

  motoTable: {
    bottom: 100,
    width: 1000,
    height: 200,
    borderRadius: 10,
    resizeMode: "contain", // Maintain aspect ratio and crop as needed
    marginBottom: 0, // Adjust the margin or other styles as needed
    // backgroundColor: "red",
  },
});

export default DashboardScreen;
