import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

import styles from "../MealPlanner/MealPlannerStyle";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
const MealPlannerScreen = () => {
  return (
    <View>
      <Header />
      <View style={styles.containerButton}>
        <Image
          source={require("../../../assets/ocupied1.png")}
          style={styles.imageSize}
        />
      </View>

      <View style={styles.containerButton}>
        <Image
          source={require("../../../assets/ocupied2.png")}
          style={styles.imageSize}
        />
      </View>

      <View style={styles.containerButton}>
        <Image
          source={require("../../../assets/Empty.png")}
          style={styles.imageSize}
        />
      </View>
      <Footer />
    </View>
  );
};

export default MealPlannerScreen;
