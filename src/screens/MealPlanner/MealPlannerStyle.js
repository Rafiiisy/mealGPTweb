import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //white box to hold user details
  root: {
    flex: 1,
    backgroundColor: "transparent",
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: "red",
    bottom: 300,
    height: "100%"
  },
  profilePic: {
    backgroundColor: "transparent",
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfo: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
  },
  email: {
    fontSize: 16,
  },
  phone: {
    fontSize: 16,
  },

  //box for the stats
  statsContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    marginHorizontal: 0,
    right: 0,
  },
  statItem: {
    alignItems: "center", // Centers children of statItem vertically
    marginHorizontal: 10, // Adds horizontal space between statItems
  },
  divider: {
    height: "100%", // Full height of the container
    width: 10, // Thin line
    backgroundColor: "blue", // Line color
    marginHorizontal: 10, // Space on both sides of the line
  },
  statValue: {
    fontSize: 48, // Large font size for percentage
    fontWeight: "bold",
    marginVertical: 5, // Spacing above and below the percentage
  },
  statLabel: {
    fontSize: 20, // Smaller font size for labels
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },

  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 26,
    fontWeight: "bold",
  },
  //box for preferences
  sectionContainer: {
    margin: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 100,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 5,
    left: 100,
  },
  preferenceCategory: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    marginVertical: 2,
  },

  //place holder
  containerButton: {
    width: "100%",
    height: 186,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    //backgroundColor:"white",
    justifyContent: "center",
    marginHorizontal: 5,
    display: "flex",
    //overflow:"hidden",
  },

  imageSize: {
    flex: 1,
    resizeMode: "contain",
  },

  allScreen: {
    width: 1920,
    height: 2560,
  },
});

export default styles;
