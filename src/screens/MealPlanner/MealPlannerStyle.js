import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //white box to hold user details
  root: {
    flex: 1,
    backgroundColor: "transparent",
  },
  mainContainer: {
    flex: 1,
    top: 40,
    height: "100%",
  },
  //place holder
  containerButton: {
    width: "100%",
    height: 150,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",

    marginHorizontal: 0,
    // backgroundColor: "red"
    //overflow:"hidden",
  },

  imageSize: {
    flex: 1,
    resizeMode: "contain",
  },
});

export default styles;
