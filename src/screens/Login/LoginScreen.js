// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import backgroundImage from '../../assets/images/Header LoginSignup.png'; // Adjust the path accordingly
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const LoginScreen = () => {
    const [emailPhone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Implement your login logic here
        console.log('Login pressed');
    };
    const handleMenuPress = () => {
        console.log("Menu button pressed"); // Replace with actual logic to open sidebar
    };

    return (
        <>
            <Header onMenuPress={handleMenuPress} />
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
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

                <View style={styles.centeredButtonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Footer />
            </View>
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    title: {
        font: 'mada',
        color: 'rgb(0, 85, 29)',
        fontSize: 24,
        fontWeight: 'regular',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
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
    loginButton: {
        backgroundColor: 'rgb(0, 153, 52)',
        padding: 10,
        borderRadius: 50,
    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default LoginScreen;