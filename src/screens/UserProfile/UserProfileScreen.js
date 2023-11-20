import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import styles from "./UserProfileStyles"; // Importing styles from styles.js
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer"; // Import Footer component
import Sidebar from "../../components/common/Sidebar";

const UserDetails = {
  age: "20",
  sex: "Male",
  weight: "70 kg",
  height: "174 cm",
  nationality: "Indonesian",
  location: "Indonesia",
  fatPercentage: "Bulky",
  healthConcerns: "None",
  dailyActivityLevel: "Active",
  fitnessGoals: "Bulk until 90kg",
  alcoholConsumption: "No",
  sleep: "7 hours",
};

const MealPreferences = {
  dietaryRestrictions: "Halal",
  allergies: "None",
  mealFrequency: "3",
  snacks: "No",
  caloricGoal: "3000",
  buyFood: "Yes",
  budget: "Rp. 20,000",
  cook: "Yes",
  cookingTime: "20",
  cookingLevel: "2",
  cuisinePreference: "Chicken",
};

const WorkoutPreferences = {
  gymAccess: "Yes",
  aerobics: "No",
  calisthenics: "No",
  equipment: "No",
  sports: "None",
  workoutFrequency: "5",
  preferredTime: "Morning",
  experience: "10",
  duration: "90",
  goal: "Big Build",
  restrictions: "Deadlifts",
};

const UserProfileScreen = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
  };
  const handleLogoPress = () => {
    navigation.navigate("Home"); // Make sure 'Home' corresponds to the name of your route
  };

  return (
    <View style={styles.root}>
      <ScrollView style={styles.container}>
        <Header onMenuPress={handleMenuPress} navigation={handleLogoPress} />
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/images/images.jpg")} // Replace with your image path
            style={styles.profilePic}
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Joe Biden</Text>
            <Text style={styles.title}>President</Text>
            <Text style={styles.email}>joebident@gmail.com</Text>
            <Text style={styles.phone}>(+1)12345678</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Diet</Text>
              <Text style={styles.statValue}>69%</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>Workout</Text>
              <Text style={styles.statValue}>42%</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Joe's Preferences</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.preferenceCategory}>
            <Text style={styles.categoryTitle}>User Details</Text>
            {Object.entries(UserDetails).map(([key, value]) => (
              <Text key={key} style={styles.detailText}>
                {`${key.replace(/([A-Z])/g, " $1")}: ${value}`}
              </Text>
            ))}
          </View>

          <View style={styles.preferenceCategory}>
            <Text style={styles.categoryTitle}>Meal Preferences</Text>
            {Object.entries(MealPreferences).map(([key, value]) => (
              <Text key={key} style={styles.detailText}>
                {`${key.replace(/([A-Z])/g, " $1")}: ${value}`}
              </Text>
            ))}
          </View>

          <View style={styles.preferenceCategory}>
            <Text style={styles.categoryTitle}>Workout Preferences</Text>
            {Object.entries(WorkoutPreferences).map(([key, value]) => (
              <Text key={key} style={styles.detailText}>
                {`${key.replace(/([A-Z])/g, " $1")}: ${value}`}
              </Text>
            ))}
          </View>
        </View>
        <View style={{ height: 100 }}>
          {" "}
          {/* Adjust height as needed */}
          {/* You can put additional content here or leave it empty */}
        </View>
      </ScrollView>
      <Footer />
      <Sidebar
        navigation={navigation}
        isVisible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </View>
  );
};


export default UserProfileScreen;
