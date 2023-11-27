import React, { useState } from "react";
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


const UserPreferenceScreen = ({ navigation }) => {
  // Example of state declaration for age. Add similar states for other fields.
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [nationality, setNationality] = useState("");
  const [location, setLocation] = useState("");
  const [fatPercentage, setFatPercentage] = useState("");
  const [healthConcerns, setHealthConcerns] = useState("");
  const [dailyActivity, setDailyActivity] = useState("");
  const [fitnessGoals, setFitnessGoals] = useState("");
  const [alcoholConsumption, setAlcoholConsumption] = useState("");
  const [sleep, setSleep] = useState("");
  // Add state declarations for other input fields...
  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
  };

  // Function to handle form submission
  const handleSubmit = () => {

        navigation.navigate("UserPreference2");

    // Handle the form submission logic here
    // For example, send data to backend or display a confirmation message
  };

  return (
    <>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />

      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meal Preferences</Text>

          <Text style={styles.inputTitle}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Age"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />

          <Text style={styles.inputTitle}>Sex</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Age"
            keyboardType="default"
            value={sex}
            onChangeText={setSex}
          />

          <Text style={styles.inputTitle}>Height</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Height"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />

          <Text style={styles.inputTitle}>Weight</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Weight"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />

          <Text style={styles.inputTitle}>Nationality</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Nationality"
            keyboardType="default"
            value={nationality}
            onChangeText={setNationality}
          />

          <Text style={styles.inputTitle}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Location"
            keyboardType="default"
            value={location}
            onChangeText={setLocation}
          />

          <Text style={styles.inputTitle}>Fat Percentage</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Fat Percentage"
            keyboardType="numeric"
            value={fatPercentage}
            onChangeText={setFatPercentage}
          />

          <Text style={styles.inputTitle}>Health Concerns</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Health Concerns"
            keyboardType="numeric"
            value={healthConcerns}
            onChangeText={setHealthConcerns}
          />

          <Text style={styles.inputTitle}>Daily Activity</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Daily Activity"
            keyboardType="default"
            value={dailyActivity}
            onChangeText={setDailyActivity}
          />

          <Text style={styles.inputTitle}>Fitness Goals</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Fitness Goals"
            keyboardType="numeric"
            value={fitnessGoals}
            onChangeText={setFitnessGoals}
          />

          <Text style={styles.inputTitle}>Alcohol Consumption</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Alcohol Consumption"
            keyboardType="default"
            value={alcoholConsumption}
            onChangeText={setAlcoholConsumption}
          />

          <Text style={styles.inputTitle}>Sleep</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Sleep"
            keyboardType="default"
            value={sleep}
            onChangeText={setSleep}
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
    paddingTop: 'HEADER_HEIGHT'
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

export default UserPreferenceScreen;
