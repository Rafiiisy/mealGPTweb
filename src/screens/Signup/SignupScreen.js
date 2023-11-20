// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";

const SignUpScreen = () => {
    const [emailPhone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const handleSignUp = () => {
        // Implement your signup logic here
        console.log('Sign Up pressed');
        // You can perform validation, compare passwords, and other signup-related logic
    };

   const handleMenuPress = () => {
     setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility // Replace with actual logic to open sidebar
   };

    return (
      <>
        <Header onMenuPress={handleMenuPress} navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.container2}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email/phone"
                value={emailPhone}
                onChangeText={(text) => setEmailPhone(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Re-enter Password"
                secureTextEntry
                value={reEnterPassword}
                onChangeText={(text) => setReEnterPassword(text)}
              />
            </View>

            <View style={styles.centeredButtonContainer}>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={handleSignUp}
              >
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer />
        <Sidebar
          navigation={navigation}
          isVisible={sidebarVisible}
          onClose={() => setSidebarVisible(false)}
        />
      </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    container2: {
        height: '50%',
        top: '-55%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        font: 'mada',
        color: 'rgb(0, 85, 29)',
        fontSize: 40,
        fontWeight: 'regular',
        marginBottom: 20,
    },
    inputContainer: {
        width: '170%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 50,
    },
    centeredButtonContainer: {
        // alignItems: 'center', // Center the child elements horizontally
    },
    signUpButton: {
        backgroundColor: 'rgb(0, 153, 52)',
        width: 100,
        padding: 8,
        borderRadius: 50,
    },
    signUpButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default SignUpScreen;
