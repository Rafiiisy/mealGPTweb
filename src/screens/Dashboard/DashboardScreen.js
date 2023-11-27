import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const DashboardScreen = () => {
    const handleMenuPress = () => {
        console.log("Menu button pressed");
        // Replace with actual logic to open sidebar
    };

    return (
        <>
            <Header onMenuPress={handleMenuPress} />
            
            <Text style={styles.dashboardText}>DASHBOARD</Text>
                
                <View>
                    <View style={styles.container1}>
                        <Image source={require("../../assets/images/Info tab.png")}style={styles.image1}/>
                        <Image source={require("../../assets/images/MOTO & TABLE.png")}style={styles.image4}/>
                    </View>

                    <View style={styles.container2}>
                        <Image source={require("../../assets/images/User info.png")} style={styles.image3}/>
                        <Image source={require("../../assets/images/Progress Tab.png")} style={styles.image2} />
                    </View>
                </View>

            <Footer />
        </>
    );
};

const styles = StyleSheet.create({
    container1: {
        flexDirection: "column", // Adjusted to column layout
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f3f3f3",
    },
    container2: {
        flexDirection: "column", // Adjusted to column layout
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f3f3f3",
    },
    dashboardText: {
        fontFamily: "MADE Soulmaze",
        color: "rgb(0, 85, 29)",
        fontSize: 40,
        fontWeight: "regular",
        marginBottom: 20,
    },
    image1: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: "contain", // Maintain aspect ratio and crop as needed
        marginBottom: 10, // Adjust the margin or other styles as needed
    },
    image2: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: "contain", // Maintain aspect ratio and crop as needed
        marginBottom: 10, // Adjust the margin or other styles as needed
    },
    image3: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: "contain", // Maintain aspect ratio and crop as needed
        marginBottom: 10, // Adjust the margin or other styles as needed
    },
    image4: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: "contain", // Maintain aspect ratio and crop as needed
        marginBottom: 10, // Adjust the margin or other styles as needed
    },
});

export default DashboardScreen;
