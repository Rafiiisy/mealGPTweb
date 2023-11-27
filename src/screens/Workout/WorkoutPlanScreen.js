import React from "react";
import { useState } from "react";

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Make sure you have installed react-native-vector-icons
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";
import { useFonts } from "expo-font";

const WorkoutPlanScreen = ({ navigation }) => {
  // This would be replaced with your state management to track which items are checked
  const [checkedItems, setCheckedItems] = React.useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    MADESoulmaze: require("../../assets/fonts/MADE_Soulmaze_PERSONAL_USE.otf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleCheck = (day, index) => {
    // Logic to handle checking off an item
    // For simplicity, we're using JSON strings to track day and index combinations
    const itemKey = `${day}-${index}`;
    setCheckedItems((prevItems) => {
      if (prevItems.includes(itemKey)) {
        return prevItems.filter((item) => item !== itemKey);
      } else {
        return [...prevItems, itemKey];
      }
    });
  };

  const isChecked = (day, index) => {
    return checkedItems.includes(`${day}-${index}`);
  };

  const days = {
    Monday: [
      { exercise: "Bench press", sets: "4 sets of 8" },
      { exercise: "Incline Dumbbell", sets: "3 sets of 10" },
      { exercise: "Tricep Dips", sets: "3 sets of 12" },
    ],
    // Repeat for other days...
  };

  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
  };

  return (
    <>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />

      <ScrollView style={styles.container}>
        <Text style={styles.title}>WORKOUT PLAN</Text>
        <Text style={styles.subtitle}>JANUARY: WEEK 1</Text>
        {Object.entries(days).map(([day, exercises], dayIndex) => (
          <View key={day} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{day.toUpperCase()}</Text>
            {exercises.map((exercise, index) => (
              <View key={`${day}-${index}`} style={styles.exerciseContainer}>
                <TouchableOpacity
                  onPress={() => handleCheck(day, index)}
                  style={[
                    styles.checkCircle,
                    isChecked(day, index) && styles.checked,
                  ]}
                />
                <View style={styles.exerciseDetails}>
                  <Text style={styles.exerciseText}>{exercise.exercise}</Text>
                  <Text style={styles.setsText}>{exercise.sets}</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <Sidebar
        navigation={navigation}
        isVisible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9", // You may need to adjust this color to match MealPlanScreen
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    fontFamily: "MADESoulmaze",
    color: "#00551D",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "MADESoulmaze",
    color: "#00551D",
  },
  dayContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 50, // This might need adjustment if it looks different from MealPlanScreen
    backgroundColor: "#E8E8E8", // Adjust as per your MealPlanScreen
  },
  dayTitle: {
    fontSize: 18,
    color: "#00551D",
    fontFamily: "MADESoulmaze",
    padding: 5,
    backgroundColor: "#E8E8E8", // Adjust as per your MealPlanScreen
  },
  exerciseContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4CAF50",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#4CAF50",
  },
  exerciseDetails: {
    flexDirection: "column",
  },
  exerciseText: {
    fontSize: 16,
    fontFamily: "MADESoulmaze",
    color: "#00551D",
  },
  setsText: {
    fontSize: 14,
    fontFamily: "MADESoulmaze",
    color: "#757575",
  },
  // ... additional styles like for Footer, Header, etc.
});

export default WorkoutPlanScreen;
