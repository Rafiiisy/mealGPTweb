import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-web';

const Landing = () => {
  return (
    <ScrollView style={styles.landing}>
      {/* Footer Section */}
      <View style={styles.footer}>
        {/* ... social icons */}
      </View>

      {/* Main Content */}
      <Image
        source={require('../../../assets/MOTO & TABLE.png')}
        style={styles.tableWithBowls}
      />
      <Image
        source={require('../../../assets/Line 2.png')}
        style={styles.lineUnderHeader}
      />
      {/* ... Other Images and Text */}
      <Image
        source={require('../../../assets/Group 11.png')}
        style={styles.MainBody}
      />
      {/* Try Now Button */}
      <TouchableOpacity style={styles.tryNowButton}>
        <Image
          source={require('../../../assets/TRY NOW.png')}
          style={styles.tryNowImage}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

// Example styles that might correspond to some of your CSS
const styles = StyleSheet.create({
    landing: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 134,
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    tableWithBowls: {
      width: '100%',
      height: 200, // Adjust height accordingly
      resizeMode: 'contain',
    },
    tryNowButton: {
      position: 'absolute',
      bottom: 20,
      // put in right
      alignSelf: 'center',
      right: 500,
    },
    tryNowImage: {
      width: 241,
      height: 77,
    },
    textWrapper: {
      fontSize: 30,
      color: '#004f1b',
      // fontFamily: 'YourFontFamily', // Make sure the font is supported in React Native
    },
    MainBody: {
      width: 1000,
      padding: 20,
      height: 800, // Adjust height accordingly
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    lineUnderHeader:{
      width: 2500,
      padding: 20,
      height: 100, // Adjust height accordingly
      alignSelf: 'center',
      resizeMode: 'contain',
    }
  });
  
  // Remember that you'll need to adjust these styles for your actual design.
  

export default Landing;
