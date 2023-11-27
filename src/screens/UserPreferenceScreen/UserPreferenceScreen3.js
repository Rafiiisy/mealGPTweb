import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebaseConfig";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Picker,
} from "react-native";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";

const UserPreferenceScreen3 = ({ navigation }) => {
  // Example of state declaration for age. Add similar states for other fields.
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [gymAccess, setGymAccess] = useState("");
  const [aerobics, setAerobics] = useState("");
  const [calisthenics, setCalisthenics] = useState("");
  const [equipment, setEquipment] = useState("");
  const [sports, setSports] = useState("");
  const [workoutFrequency, setWorkoutFrequency] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [experience, setExperience] = useState("");
  const [duration, setDuration] = useState("");
  const [workoutGoal, setWorkoutGoal] = useState("");
  const [restrictions, setRestrictions] = useState("");

  // Add state declarations for other input fields...
  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (!auth.currentUser) {
      alert("You must be logged in to submit preferences.");
      return;
    }
    try {
      // Create an object that contains all workout preferences
      const workoutPreferences = {
        gymAccess,
        aerobics,
        calisthenics,
        equipment,
        sports,
        workoutFrequency,
        preferredTime,
        experience,
        duration,
        workoutGoal,
        restrictions,
        // ... other fields
      };

      // Assuming `userID` is the authenticated user's UID
      const userID = auth.currentUser.uid;

      // Reference to the user's document in the 'UserDataCombined' collection
      const userDocRef = doc(db, "userDataCombined", userID);

      // Set the workout preferences data in Firestore
      await setDoc(userDocRef, { workoutPreferences }, { merge: true });

      // Navigate to the Login screen or any other screen after successful data submission
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Error saving data: " + error.message);
    }
  };

  return (
    <>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />

      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Workout Preferences</Text>

          <Text style={styles.inputTitle}>Gym Access</Text>
          <TextInput
            style={styles.input}
            placeholder="Do you have Gym Access?"
            keyboardType="default"
            value={gymAccess}
            onChangeText={setGymAccess}
          />

          <Text style={styles.inputTitle}>Aerobics</Text>
          <TextInput
            style={styles.input}
            placeholder="Do you do Aerobics?"
            keyboardType="default"
            value={aerobics}
            onChangeText={setAerobics}
          />

          <Text style={styles.inputTitle}>Calisthenics</Text>
          <TextInput
            style={styles.input}
            placeholder="Do you do Calisthenics?"
            keyboardType="default"
            value={calisthenics}
            onChangeText={setCalisthenics}
          />

          <Text style={styles.inputTitle}>Equipment</Text>
          <TextInput
            style={styles.input}
            placeholder="Do you have Gym Equipment?"
            keyboardType="default"
            value={equipment}
            onChangeText={setEquipment}
          />

          <Text style={styles.inputTitle}>Sports</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Caloric Goal"
            keyboardType="default"
            value={sports}
            onChangeText={setSports}
          />

          <Text style={styles.inputTitle}>Workout Frequency</Text>
          <TextInput
            style={styles.input}
            placeholder="What is your Workout Frequency?"
            keyboardType="default"
            value={workoutFrequency}
            onChangeText={setWorkoutFrequency}
          />

          <Text style={styles.inputTitle}>Preferred Time</Text>
          <TextInput
            style={styles.input}
            placeholder="What is your Preferred Time?"
            keyboardType="default"
            value={preferredTime}
            onChangeText={setPreferredTime}
          />

          <Text style={styles.inputTitle}>Experience</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Experience"
            keyboardType="numeric"
            value={experience}
            onChangeText={setExperience}
          />

          <Text style={styles.inputTitle}>Duration</Text>
          <TextInput
            style={styles.input}
            placeholder="What is your Workout Duration?"
            keyboardType="default"
            value={duration}
            onChangeText={setDuration}
          />

          <Text style={styles.inputTitle}>Workout Goal</Text>
          <TextInput
            style={styles.input}
            placeholder="What is your Workout Goal"
            keyboardType="numeric"
            value={workoutGoal}
            onChangeText={setWorkoutGoal}
          />

          <Text style={styles.inputTitle}>Restrictions</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Workout Restrictions"
            keyboardType="default"
            value={restrictions}
            onChangeText={setRestrictions}
          />

          {/* Add other input fields for User Details... */}
        </View>

        <Button title="Submit" onPress={handleSubmit} />
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
const HEADER_HEIGHT = 60;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 70,
    padding: 40,
    paddingTop: "HEADER_HEIGHT",
    // Removed 'bottom' property to avoid pushing the ScrollView down
  },
  section: {
    marginBottom: 20, // Adjusted for better spacing between sections
    // Removed fixed height to allow content to determine the section height
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  // Additional styles can be added here
});

export default UserPreferenceScreen3;
