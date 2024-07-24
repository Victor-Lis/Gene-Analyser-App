import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30
    },
    SelectRow: {
        paddingHorizontal: 10,
        width: "100%",
        flexDirection: "row",
        columnGap: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        width: "100%",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 18.5,
    },
    result: {
        fontSize: 18.5,
        marginTop: 50,
        color: "#777"
    }
})