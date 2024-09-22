import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: StatusBar.currentHeight
    },
    tab: {
        width: 30,
        display: "flex",
        alignItems: "center",
        flex: 1,
        height: "100%",
        padding: 10
    },
    tabActive: {
        borderBottomColor: "#349eb0",
        borderBottomWidth: 4
    },
    tabUnactive: {
        borderBottomColor: "transparent",
        borderBottomWidth: 4
    },
    fontIcon: {
        fontSize: 20,
    },
    fontActive: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#349eb0"
    },
    fontUnative: {
        fontWeight: "normal",
        fontSize: 15,
        color: "black"
    }
})