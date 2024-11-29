import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  categoryContainer: {
    marginBottom: 20,
    marginTop: 20,  // Đảm bảo khoảng cách giữa danh mục và phần trên màn hình
  },
  categoryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
  },
  favoriteButton: {
    marginLeft: 10,
    padding: 5,
  },
  favoriteIcon: {
    fontSize: 22,
    color: "#ff0000", // Trái tim đỏ
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemLocation: {
    fontSize: 14,
    color: "#888",
  },
  ratingContainer: {
    flexDirection: "row",
  },
  star: {
    fontSize: 18,
    color: "#FFD700", // Màu vàng cho sao
    marginRight: 2,
  },
});
