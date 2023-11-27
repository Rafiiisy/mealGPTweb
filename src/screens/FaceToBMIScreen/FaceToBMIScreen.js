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
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Sidebar from "../../components/common/Sidebar";
import { useFonts } from "expo-font";
import { auth } from "../../config/firebaseConfig";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";


const FaceToBMIScreen = ({ navigation }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [imageUri, setImageUri] = useState(null);
  const [bmiResult, setBmiResult] = useState(null);
  const cameraRef = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);

  let [fontsLoaded] = useFonts({
    MADESoulmaze: require("../../assets/fonts/MADE_Soulmaze_PERSONAL_USE.otf"),
  });
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  

  const handleMenuPress = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setIsUserAuthenticated(!!user); // !! converts the user object to a boolean
    });
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    return () => {
      unsubscribeAuth();
    };
  }, []);

    const handleTakePicture = async () => {
      if (!isUserAuthenticated) {
        // Handle the case where the user is not logged in
        alert("You must be logged in to use this feature.");
        return;
      }
      if (cameraRef.current) {
        setIsProcessing("Capturing image...");
        const photo = await cameraRef.current.takePictureAsync();

        const storage = getStorage();

        // Use the user's ID (or any unique identifier) to create a folder structure
        const userID = auth.currentUser.uid;
        const folderName = `userImages/${userID}`;

        const photoFileName = photo.uri.split("/").pop(); // Extract filename
        const storageReference = storageRef(
          storage,
          `${folderName}/${photoFileName}`
        );

        setIsProcessing("Uploading image...");

        // Convert the photo URI to a blob
        const response = await fetch(photo.uri);
        const blob = await response.blob();

        // Upload the blob to Firebase Storage
        uploadBytes(storageReference, blob)
          .then((snapshot) => {
            setIsProcessing("Saving image URL...");
            return getDownloadURL(snapshot.ref);
          })
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            setIsProcessing("Image processed successfully.");
            setImageUri(photo.uri);
            // Here you can also save the downloadURL to Firestore as needed
            // Example: setDoc(doc(db, "users", userId), { photoURL: downloadURL });
          })
          .catch((error) => {
            console.error("Error uploading image: ", error);
            setIsProcessing("Failed to process image.");
          });
      }
    };


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <Header onMenuPress={handleMenuPress} navigation={navigation} />

      <Text
        style={{
          fontSize: 30,
          alignSelf: "center",
          color: "#00551D",
          fontFamily: "MADESoulmaze",
          top: 30
        }}
      >
        Face to BMI
      </Text>
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
            <Icon name="camera-alt" size={24} color="#00551D" />
          </TouchableOpacity>
        </View>

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
    flexDirection: "row",
    justifyContent: "space-between", // Center the containers
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 60, // Adjust as needed for spacing from screen edges
    // backgroundColor: "red", // Assuming a white background
    paddingHorizontal: 200,
  },
  cameraContainer: {
    width: "30%", // Reduce width for more space between boxes
    height: "60%", // Set a fixed height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00551D",
    borderRadius: 10,
    borderWidth: 10, // Add border
    borderColor: "#00551D", // Border color
    marginBottom: 20, // Space for capture button
    overflow: "hidden",
  },
  camera: {
    width: "100%",
    height: "100%", // Set height to fill the container
  },
  outputContainer: {
    width: "30%", // Same width as cameraContainer for consistency
    height: "60%", // Same height as cameraContainer for consistency
    backgroundColor: "#00551D",
    borderRadius: 10,
    borderWidth: 10, // Add border
    borderColor: "#00551D", // Border color
    justifyContent: "flex-end", // Align content to the bottom
    overflow: "hidden",
    bottom: 10,
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
    top: 0,
    padding: 15,
    backgroundColor: "#fff", // White background for the button
    borderRadius: 30, // Half of the total width/height to make it circular
    borderWidth: 2, // Width of the border
    borderColor: "#00551D", // Color of the border
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
