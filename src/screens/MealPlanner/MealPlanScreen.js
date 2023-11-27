import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Make sure you have installed react-native-vector-icons
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";
import { useFonts } from "expo-font";


const daysOfWeek = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
const mealTimes = ["08:00", "12:00", "18:00"];

// Custom CheckBox component
const CheckBox = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkBox}>
      {isChecked && <Icon name="check" size={16} color="#fff" />}
    </TouchableOpacity>
  );
};

const MealPlanScreen = ({ navigation }) => {
  const [checkedMeals, setCheckedMeals] = useState({});
  const [sidebarVisible, setSidebarVisible] = useState(false);
  // State to keep track of checked meals
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
  // Function to handle checkbox press
  const handleCheck = (day, time) => {
    const key = `${day}_${time}`;
    setCheckedMeals((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
  };

  return (
    <>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>MEAL PLAN</Text>
        <Text style={styles.weekTitle}>JANUARY: WEEK 1</Text>
        <View style={styles.mealPlanContainer}>
          {daysOfWeek.map((day) => (
            <View key={day} style={styles.dayContainer}>
              <Text style={styles.dayTitle}>{day}</Text>
              {mealTimes.map((time) => {
                const key = `${day}_${time}`;
                return (
                  <View key={time} style={styles.mealItem}>
                    <CheckBox
                      isChecked={checkedMeals[key]}
                      onPress={() => handleCheck(day, time)}
                    />
                    <View style={styles.mealContent}>
                      <Text style={styles.mealTime}>{time}</Text>
                      <Text style={styles.mealDescription}>
                        Scrambled Eggs with spinach and Grilled Chicken Breast
                      </Text>
                      <Text style={styles.calorieInfo}>
                        Calories: 200 kcal, Protein: 40 g, Carbs: 20 g, Fats: 20
                        g
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
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
  // ... other styles remain unchanged
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    textAlign: "center",
    color: "#00551D",
    marginVertical: 20,
    fontFamily: "MADESoulmaze",
  },
  weekTitle: {
    fontSize: 18,
    fontFamily: "MADESoulmaze",
    // fontWeight: "bold",
    color: "#00551D",
    textAlign: "center",
    marginBottom: 20,
  },
  mealPlanContainer: {
    padding: 10,
    // backgroundColor: "red",
    paddingHorizontal: 100,
  },
  dayContainer: {
    marginBottom: 50,
    borderRadius: 50,
  },
  dayTitle: {
    fontSize: 18,
    color: "#00551D",
    fontFamily: "MADESoulmaze",
    backgroundColor: "#E8E8E8",
    padding: 5,
  },
  mealItem: {
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 100,
    marginVertical: 5,
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#009934",
    backgroundColor: "#009934",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  mealItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 30,
    borderRadius: 5,
    marginVertical: 5,
  },
  mealContent: {
    flex: 1,
  },
  mealTime: {
    fontSize: 16,
    color: "#00551D",
    fontFamily: "MADESoulmaze",
  },
  mealDescription: {
    color: "#009934",
    fontWeight: "bold",
    fontSize: 14,
  },
  calorieInfo: {
    fontSize: 12,
  },
  // ... other styles remain unchanged
});

export default MealPlanScreen;
