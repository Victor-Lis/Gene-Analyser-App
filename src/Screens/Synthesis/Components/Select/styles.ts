import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    maxHeight: 50,
    marginTop: "2.5%",
    paddingTop: 4,
    // paddingBottom: 4,
    paddingHorizontal: 5,
  },
  SelectBox: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: "2.5%",
    marginVertical: 2,
  },
  InputBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 10,
    maxHeight: 50,
    backgroundColor: "rgba(255,255,255,1)",
    paddingHorizontal: 1,
    borderRadius: 10,
  },
  InputText: {
    flex: 1,
    textAlign: "left",
    color: "#000",
  },
  SelectTitle: {
    color: "#FFF"
  },
  SelectBoxText: {
    fontSize: 17.5,  
    color: "#999999",
    width: "100%",
    textAlign: "center"
  },
  Text: {
    fontSize: 19.5,
  }
})