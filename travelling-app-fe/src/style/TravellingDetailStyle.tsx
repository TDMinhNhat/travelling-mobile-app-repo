import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: StatusBar.currentHeight
    }
})