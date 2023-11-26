import React from "react";
import { useState } from "react";
import { View, Image } from "react-native";

import styles from "./MealPlannerStyle";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";
import { ScrollView } from "react-native-web";

const MealPlannerScreen = ({navigation}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);


  const handleMenuPress = () => {
      setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
    };

  return (
    <>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.containerButton}>
          <Image
            source={require("../../assets/Occupied 1.png")}
            style={styles.imageSize}
          />
        </View>
        <View style={styles.containerButton}>
          <Image
            source={require("../../assets/Occupied 2.png")}
            style={styles.imageSize}
          />
        </View>
        <View style={styles.containerButton}>
          <Image
            source={require("../../assets/Empty space.png")}
            style={styles.imageSize}
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

export default MealPlannerScreen;
