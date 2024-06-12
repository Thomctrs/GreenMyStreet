import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const horizontalMargin = windowWidth * 0.1;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    position: "absolute",
    top: windowHeight * 0.06,
    left: windowWidth * 0.04,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: windowWidth * 0.14,
    fontWeight: "bold",
    color: "white",
    marginTop: windowHeight * 0.12,
  },
  subtitle: {
    fontSize: windowWidth * 0.04,
    color: "white",
    marginTop: windowHeight * 0.01,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: windowHeight * 0.1,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: windowWidth * 0.8,
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.05,
    borderRadius: windowWidth * 0.05,
    marginVertical: windowHeight * 0.015,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    color: "white",
    fontSize: windowWidth * 0.04,
    fontWeight: "bold",
    textAlign: "center",
  },
  cameraButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  cameraCloseButton: {
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    width: "22%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "white",
  },
  privacyStatement: {
    position: "absolute",
    bottom: windowHeight * 0.05,
  },
  privacyStatementText: {
    fontSize: windowWidth * 0.03,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 3,
  },
  privacyPanel: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    height: "75%",
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden", // Add this to ensure the content does not exceed
  },
  scrollView: {
    flexGrow: 1, // Add this to allow the ScrollView to dynamically adapt to the size of the content
  },
  panelHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  panelTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    padding: 10,
    fontWeight: "bold",
    color: "black",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  privacyText: {
    fontSize: 20,
    textAlign: "justify",
    paddingRight: 20,
  },
  cameraContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  selectedImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  selectedImage: {
    width: windowWidth * 0.95,
    height: (windowWidth * 0.95 * 9) / 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 300,
  },
  buttonsContainerBottom: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  buttonContainerCamera: {
    position: "absolute",
    bottom: 24,
    right: 0,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  interactionSquare: {
    width: "100%",
    height: windowHeight * 0.35,
    backgroundColor: "#F8F7F3",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: horizontalMargin / 2,
  },
  titleSquare: {
    marginTop: windowHeight * 0.05,
    marginBottom: windowHeight * 0.03,
    fontSize: windowWidth < 350 ? 20 : 22,
    fontWeight: "bold",
    color: "#093923",
    //fontFamily: 'Poppins-Bold',
    alignSelf: "stretch",
    textAlign: "center",
  },
  buttonSquare: {
    backgroundColor: "#093923",
    paddingVertical: 10,
    paddingHorizontal: windowWidth * 0.1,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: windowHeight * 0.007,
    width: windowWidth - 2 * horizontalMargin,
  },
  buttonTextSquare: {
    color: "#F8F7F3",
    fontWeight: "bold",
    fontSize: windowWidth < 350 ? 14 : 15,
    //fontFamily: 'Poppins-SemiBold',
  },
  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  previewImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },
  animation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animationeffect: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },

  viewstyle: { flex: 1 },

  containerSave: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  backgroundsaveImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  containerSelectied: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  backgroundImageSelectied: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
