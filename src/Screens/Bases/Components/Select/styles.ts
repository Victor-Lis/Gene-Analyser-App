import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Container: {
    width: "90%",
    maxHeight: 50,
    marginHorizontal: "5%",
    marginTop: "2.5%",
  },
  SelectBox: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: "2.5%",
    marginVertical: 2,
  },
  InputBox: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 10,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    padding: 1,
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
    color: "#999999"
  },
  Text: {
    fontSize: 19.5,
  }
})