import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useState } from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";

const DashboardScreen = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const handleMenuPress = () => {
        setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
    };
    
    return (
        <>
            <Header onMenuPress={handleMenuPress} navigation={navigation} />
            {/* <View style={{flex: 1, backgroundColor: "blue"}}></View> */}
            <Text style={styles.dashboardText}>DASHBOARD</Text>
                
                <View style={styles.mainContainer}>
                    <View style={styles.container1}>
                    <Image source={require("../../assets/images/User info.png")} style={styles.userinfo} />
                    <Image source={require("../../assets/images/Progress Tab.png")} style={styles.progresstab} />
                    </View>

                    <View style={styles.container2}>
                        <Image source={require("../../assets/images/Info tab.png")} style={styles.infotab} />
                    </View>
                </View>

            <View style={styles.mototext}>
                <Image source={require("../../assets/images/MOTO & TABLE.png")} style={styles.mototable} />
            </View>

            <Footer />
            <Sidebar navigation={navigation} isVisible={sidebarVisible} onClose={() => setSidebarVisible(false)}/>
        </>
    );
};

const styles = StyleSheet.create({
    container1: {
        flexDirection: "column", // Adjusted to column layout
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    mainContainer: {
        flexDirection: "row", // Adjusted to column layout
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
    },
    dashboardText: {
        fontFamily: "MADE Soulmaze",
        color: "rgb(0, 85, 29)",
        fontSize: 40,
        fontWeight: "regular",
        marginBottom: 20,
    },
    mototext: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f3f3f3",  
    },
    infotab: {
        width: 400,
        height: 400,
        borderRadius: 10,
        resizeMode: "contain", // Maintain aspect ratio and crop as needed
        marginBottom: 10, // Adjust the margin or other styles as needed
    },
    progresstab: {
        width: 250,
        height: 250,
        borderRadius: 10,
        resizeMode: "contain", // Maintain aspect ratio and crop as needed
        marginBottom: 10, // Adjust the margin or other styles as needed
    },
    userinfo: {
        width: 250,
        height: 250,
        borderRadius: 10,
        resizeMode: "contain", // Maintain aspect ratio and crop as needed
        marginBottom: 10, // Adjust the margin or other styles as needed
    },
    mototable: {
        width: 200,
        height: 200,
        borderRadius: 10,
        resizeMode: "contain", // Maintain aspect ratio and crop as needed
        marginBottom: 10, // Adjust the margin or other styles as needed
    },
});

export default DashboardScreen;
