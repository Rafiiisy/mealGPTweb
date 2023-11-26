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


const UserPreferenceScreen = () => {
  // Example of state declaration for age. Add similar states for other fields.
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [nationality, setNationality] = useState("");
  
  // Add state declarations for other input fields...
  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Handle the form submission logic here
    // For example, send data to backend or display a confirmation message
  };
  

  return (
    <>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />

      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>User Details</Text>

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
            onChangeText={setAge}
          />

          <Text style={styles.inputTitle}>Weight</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Weight"
            keyboardType="numeric"
            value={weight}
            onChangeText={setAge}
          />

          <Text style={styles.inputTitle}>Nationality</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Nationality"
            keyboardType="default"
            value={nationality}
            onChangeText={setAge}
          />

          <Text style={styles.inputTitle}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Location"
            keyboardType="default"
            value={nationality}
            onChangeText={setAge}
          />

          <Text style={styles.inputTitle}>Fat Percentage</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Fat Percentage"
            keyboardType="numeric"
            value={nationality}
            onChangeText={setAge}
          />

          <Text style={styles.inputTitle}>Health Concerns</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Health Concerns"
            keyboardType="numeric"
            value={nationality}
            onChangeText={setAge}
          />

          <Text style={styles.inputTitle}>Daily Activity</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Health Concerns"
            keyboardType="numeric"
            value={nationality}
            onChangeText={setAge}
          />

          <Text style={styles.inputTitle}>Fitness Goals</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Health Concerns"
            keyboardType="numeric"
            value={nationality}
            onChangeText={setAge}
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
