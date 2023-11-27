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


const UserPreferenceScreen2 = ({ navigation }) => {
  // Example of state declaration for age. Add similar states for other fields.
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [allergies, setAllergies] = useState("");
  const [mealFrequency, setMealFrequency] = useState("");
  const [snacks, setSnacks] = useState("");
  const [caloricGoal, setCaloricGoal] = useState("");
  const [buyFood, setBuyFood] = useState("");
  const [budget, setBudget] = useState("");
  const [cook, setCook] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [cookingLevel, setCookingLevel] = useState("");
  const [cuisinePreference, setCuisinePreference] = useState("");

  // Add state declarations for other input fields...
  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
  };

  // Function to handle form submission
  const handleSubmit = () => {
            navigation.navigate("UserPreference3");

    // Handle the form submission logic here
    // For example, send data to backend or display a confirmation message
  };

  return (
    <>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />

      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meal Preference</Text>

          <Text style={styles.inputTitle}>Dietary Restrictions</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Dietary Restrictions"
            keyboardType="default"
            value={dietaryRestrictions}
            onChangeText={setDietaryRestrictions}
          />

          <Text style={styles.inputTitle}>Allergies</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Allergies"
            keyboardType="default"
            value={allergies}
            onChangeText={setAllergies}
          />

          <Text style={styles.inputTitle}>Meal Frequency</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Meal Frequency"
            keyboardType="default"
            value={mealFrequency}
            onChangeText={setMealFrequency}
          />

          <Text style={styles.inputTitle}>Snacks</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Snacks"
            keyboardType="default"
            value={snacks}
            onChangeText={setSnacks}
          />

          <Text style={styles.inputTitle}>Caloric Goal</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Caloric Goal"
            keyboardType="default"
            value={caloricGoal}
            onChangeText={setCaloricGoal}
          />

          <Text style={styles.inputTitle}>Buy Food</Text>
          <TextInput
            style={styles.input}
            placeholder="Do Buy Food?"
            keyboardType="default"
            value={buyFood}
            onChangeText={setBuyFood}
          />

          <Text style={styles.inputTitle}>Budget</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Budget"
            keyboardType="numeric"
            value={budget}
            onChangeText={setBudget}
          />

          <Text style={styles.inputTitle}>Cook</Text>
          <TextInput
            style={styles.input}
            placeholder="Do you Cook?"
            keyboardType="numeric"
            value={cook}
            onChangeText={setCook}
          />

          <Text style={styles.inputTitle}>Cooking Time</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Cooking Time"
            keyboardType="default"
            value={cookingTime}
            onChangeText={setCookingTime}
          />

          <Text style={styles.inputTitle}>Cooking Level</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Cooking Level"
            keyboardType="default"
            value={cookingLevel}
            onChangeText={setCookingLevel}
          />

          <Text style={styles.inputTitle}>Cuisine Preference</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Alcohol Consumption"
            keyboardType="default"
            value={cuisinePreference}
            onChangeText={setCuisinePreference}
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

export default UserPreferenceScreen2;
