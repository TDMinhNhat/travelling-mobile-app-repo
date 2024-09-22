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
    },
    footer: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopColor: "#f3f3f3",
        borderTopWidth: 2,
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
        borderBottomWidth: 4,
        textAlign: "center"
    },
    tabUnactive: {
        borderBottomColor: "transparent",
        borderBottomWidth: 4,
        textAlign: "center"
    },
    fontActive: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#349eb0",
    },
    fontUnative: {
        fontWeight: "normal",
        fontSize: 15,
        color: "black"
    }
})