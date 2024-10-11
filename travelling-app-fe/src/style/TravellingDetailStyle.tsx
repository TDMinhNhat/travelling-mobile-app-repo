import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        marginTop: StatusBar.currentHeight
    },
    action: {
        backgroundColor: "rgba(0,0,0,0.10)",
        width: 25,
        height: 25,
        display: "flex",
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 12.5
    },
    footer: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
    }
})