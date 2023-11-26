import React, { useState,useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Camera } from "expo-camera";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon component


const FaceToBMIScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [imageUri, setImageUri] = useState(null);
  const [bmiResult, setBmiResult] = useState(null);
  const cameraRef = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

 const handleTakePicture = async () => {
   if (cameraRef.current) {
     setIsProcessing(true);
     const photo = await cameraRef.current.takePictureAsync();

     // Define the folder name
     const folderName = "captured_images";

     // Generate the file name based on the current timestamp
     const timestamp = new Date().getTime();
     const fileName = `${timestamp}.jpg`;

     // Build the destination URI (path)
     const destUri = `${folderName}/${fileName}`;

     // You can use destUri to reference the saved image
     console.log("Image saved at:", destUri);
   }
 };



  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          {/* ...Camera inner components and flip button... */}
        </Camera>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={() => {
            console.log("Capture button pressed");
            handleTakePicture();
          }}
        >
          <Icon name="camera-alt" size={24} color="orange" />
        </TouchableOpacity>
      </View>

      {/* {isProcessing && (
        <View style={styles.processingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.processingText}>Processing your image...</Text>
        </View>
      )} */}

      <View style={styles.outputContainer}>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        )}
        {bmiResult && (
          <>
            <Text style={styles.bmiText}>BMI: {bmiResult.value}</Text>
            <Text style={styles.statusText}>{bmiResult.status}</Text>
          </>
        )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", // Center the containers
    alignItems: "center",
    paddingHorizontal: 40, // Adjust as needed for spacing from screen edges
    backgroundColor: "white", // Assuming a white background
  },
  cameraContainer: {
    width: "40%", // Reduce width for more space between boxes
    height: "50%", // Set a fixed height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 10,
    borderWidth: 10, // Add border
    borderColor: "orange", // Border color
    marginBottom: 20, // Space for capture button
    overflow: "hidden",
  },
  camera: {
    width: "100%",
    height: "100%", // Set height to fill the container
  },
  outputContainer: {
    width: "40%", // Same width as cameraContainer for consistency
    height: "50%", // Same height as cameraContainer for consistency
    backgroundColor: "orange",
    borderRadius: 10,
    borderWidth: 10, // Add border
    borderColor: "orange", // Border color
    justifyContent: "flex-end", // Align content to the bottom
    overflow: "hidden",
    bottom: 10 
  },
  imagePreview: {
    width: "100%",
    height: "100%",
  },

  bmiText: {
    fontSize: 18, // Adjust the font size to match design
    fontWeight: "bold",
    textAlign: "center",
    color: "white", // Text color white for visibility
  },
  statusText: {
    fontSize: 18, // Adjust the font size to match design
    textAlign: "center",
    color: "white", // Text color white for visibility
  },
  captureButton: {
    padding: 15,
    backgroundColor: "#fff", // White background for the button
    borderRadius: 30, // Half of the total width/height to make it circular
    borderWidth: 2, // Width of the border
    borderColor: "orange", // Color of the border
    justifyContent: "center",
    alignItems: "center",
  },
  captureText: {
    color: "black",
    fontSize: 16,
  },
  processingContainer: {
    position: "absolute", // Overlay on top of the screen
    flexDirection: "row", // Icon and text side by side
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    // Positioning and sizing as needed to overlay on the containers
  },
  processingText: {
    fontSize: 16,
    color: "black",
    marginLeft: 10, // Space between the activity indicator and text
  },
});



export default FaceToBMIScreen;
