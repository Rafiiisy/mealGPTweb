import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import styles from "./UserProfileStyles"; // Importing styles from styles.js
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer"; // Import Footer component
import Sidebar from "../../components/common/Sidebar";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebaseConfig"; // Ensure these are correctly imported

const UserProfileScreen = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
  };
  const [userDetails, setUserDetails] = useState({});
  const [mealPreferences, setMealPreferences] = useState({});
  const [workoutPreferences, setWorkoutPreferences] = useState({});
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  useEffect(() => {
    // Function to fetch user data from Firestore
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userID = auth.currentUser.uid;
        const userDocRef = doc(db, "userDataCombined", userID);
        setCurrentUserEmail(auth.currentUser.email);
        try {
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            console.log("Fetched user data:", userDocSnap.data()); // Log fetched data

            // Assuming the structure of your document
            setUserDetails({
              Age: userDocSnap.data().age,
              AlcoholConsumption: userDocSnap.data().alcoholConsumption,
              DailyActivity: userDocSnap.data().dailyActivity,
              FatPercentage: userDocSnap.data().fatPercentage,
              FitnessGoals: userDocSnap.data().fitnessGoals,
              HealthConcerns: userDocSnap.data().healthConcerns,
              Height: userDocSnap.data().height,
              Weight: userDocSnap.data().weight,
              Location: userDocSnap.data().location,
              Sex: userDocSnap.data().sex,
              Sleep: userDocSnap.data().sleep,
            });
            setMealPreferences(userDocSnap.data().mealPreferences || {});
            setWorkoutPreferences(userDocSnap.data().workoutPreferences || {});

            // Log state variables after setting them
            console.log("User Details State:", userDetails);
            console.log("Meal Preferences State:", mealPreferences);
            console.log("Workout Preferences State:", workoutPreferences);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User is not logged in");
        // Handle user not logged in, perhaps navigate to login screen
        // navigation.navigate('Login');
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView style={styles.container}>
        <Header onMenuPress={handleMenuPress} navigation={navigation} />
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/images/images.jpg")} // Replace with your image path
            style={styles.profilePic}
          />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Joe Biden</Text>
            <Text style={styles.title}>President</Text>
            <Text style={styles.email}>{currentUserEmail}</Text>
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
          {/* User Details Section */}
          <View style={styles.preferenceCategory}>
            <Text style={styles.categoryTitle}>User Details</Text>
            {Object.entries(userDetails).map(([key, value]) => (
              <Text key={key} style={styles.detailText}>
                {`${key.replace(/([A-Z])/g, " $1")}: ${value}`}
              </Text>
            ))}
          </View>

          {/* Meal Preferences Section */}
          <View style={styles.preferenceCategory}>
            <Text style={styles.categoryTitle}>Meal Preferences</Text>
            {Object.entries(mealPreferences).map(([key, value]) => (
              <Text key={key} style={styles.detailText}>
                {`${key.replace(/([A-Z])/g, " $1")}: ${value}`}
              </Text>
            ))}
          </View>

          {/* Workout Preferences Section */}
          <View style={styles.preferenceCategory}>
            <Text style={styles.categoryTitle}>Workout Preferences</Text>
            {Object.entries(workoutPreferences).map(([key, value]) => (
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
