// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import backgroundImage from '../../assets/images/Header LoginSignup.png'; // Adjust the path accordingly
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const LoginScreen = ({ navigation }) => {
    const [emailPhone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        // Implement your login logic here
        console.log('Login pressed');
    };
    const handleMenuPress = () => {
        console.log("Menu button pressed"); // Replace with actual logic to open sidebar
    };
    const handleForgotPassword = () => {
        // Implement your logic for handling forgot password
        console.log('Forgot Password pressed');
        // You can open a link or navigate to a new screen
        // For example, opening a URL:
        Linking.openURL('https://example.com/forgot-password');
    };
    const handleSignUpNavigation = () => {
        navigation.navigate('SignUp');
    };

    return (
        <>
            <Header onMenuPress={handleMenuPress} />
            <View style={styles.container}>
            <View style={styles.container2}>
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


                <Text style={styles.forgotPasswordText}>
                    Forgot your password? <TouchableOpacity onPress={handleForgotPassword}><Text style={styles.clickHereText}>click here</Text></TouchableOpacity>
                </Text>

                <Text style={styles.signupText}>
                    Don't have an account?{' '}
                    <TouchableOpacity onPress={handleSignUpNavigation}>
                        <Text style={styles.clickHereText}>make one</Text>
                    </TouchableOpacity>
                </Text>
            </View>
            </View>
            <Footer />
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
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
    loginButton: {
        backgroundColor: 'rgb(0, 153, 52)',
        width: 100,
        padding: 8,
        borderRadius: 50,
    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        color: 'black',
        textDecorationLine: 'none',
        textAlign: 'center',
        marginTop: 10,
    },
    clickHereText: {
        color: 'rgb(0, 153, 52)',
        textDecorationLine: 'underline',
    },
    signupText: {
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
    },

});

export default LoginScreen;