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
        height: 80,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopColor: "#f3f3f3",
        borderTopWidth: 2,
    },
    tab: {
        flex: 1,
        display: "flex",
        alignItems: "center",
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
    fontIcon: {
        fontSize: 20,
    },
    fontActive: {
        fontWeight: "bold",
        fontSize: 13,
        color: "#349eb0",
    },
    fontUnative: {
        fontWeight: "normal",
        fontSize: 13,
        color: "black"
    }
})