import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "../style/FavoriteScreenStyle";  // Import style từ file ngoài

// Dữ liệu yêu thích với ảnh, đánh giá sao, trái tim đỏ
const favoriteData = {
  BEACH: [
    { 
      id: "1", name: "Seaside Resort", location: "California", price: "$200/night", 
      imageUrl: "https://elitetour.com.vn/files/images/VinpearlResort%26SpaNhaTrangBay/combo-vinpearl-resort-%26-spa-nha-trang-bay-4.jpg", rating: 4.5 
    },
    { 
      id: "2", name: "Beach Paradise", location: "Hawaii", price: "$300/night", 
      imageUrl: "https://t2.ex-cdn.com/crystalbay.com/resize/1860x570/files/news/2024/04/05/top-10-khach-san-ban-nen-den-khi-du-lich-nha-trang-134229.jpg", rating: 4.0 
    },
    { 
      id: "7", name: "Sunset Beach Resort", location: "Florida", price: "$250/night", 
      imageUrl: "https://images.trvl-media.com/lodging/17000000/16310000/16301200/16301109/fb9e7f52.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium", rating: 4.2 
    },
    { 
      id: "10", name: "Tropical Shores", location: "Bahamas", price: "$350/night", 
      imageUrl: "https://image.vietgoing.com/hotel/01/64/vietgoing_rjk2112283624.webp", rating: 4.8 
    }
  ],
  MOUNTAIN: [
    { 
      id: "3", name: "Mountain Lodge", location: "Colorado", price: "$150/night", 
      imageUrl: "https://aussietravel.com.vn/application/media/web/5.jpg", rating: 4.7 
    },
    { 
      id: "4", name: "Peak View", location: "Alaska", price: "$250/night", 
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/06/fa/66/swiss-belresort-tuyen.jpg", rating: 4.3 
    },
    { 
      id: "8", name: "Mountain Escape", location: "Switzerland", price: "$350/night", 
      imageUrl: "https://baohagiang.vn/file/4028eaa4679b32c401679c0c74382a7e/4028eaa57d592b24017d5a5e979736bf/042022/image007_20220416134512.jpg", rating: 4.8 
    },
    { 
      id: "11", name: "Alpine Retreat", location: "Canada", price: "$400/night", 
      imageUrl: "https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_343437/4dd4c5e2b26f79b0c05fa752cac76347.jpg", rating: 4.6 
    }
  ],
  CAMPING: [
    { 
      id: "5", name: "Camp Wildfire", location: "Arizona", price: "$50/night", 
      imageUrl: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/10/Sapa-Jade-Hill-e1508314536764.png", rating: 4.2 
    },
    { 
      id: "6", name: "Forest Haven", location: "Montana", price: "$100/night", 
      imageUrl: "https://homepage.momocdn.net/blogscontents/momo-upload-api-210702102622-637608183821671522.jpeg", rating: 4.6 
    },
    { 
      id: "9", name: "Riverfront Camping", location: "Oregon", price: "$70/night", 
      imageUrl: "https://media.vneconomy.vn/w800/images/upload/2021/04/20/ks-sapa-1ac81.jpg", rating: 4.4 
    },
    { 
      id: "12", name: "Wilderness Park", location: "Wyoming", price: "$60/night", 
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ft1w6xFolTWm9PtARtDLKHjory0DdXxhWSiwJOOqn4bS7OCvSKb9pci5MKboq9pFou8&usqp=CAU", rating: 4.3
    },
  ],
};

const FavoriteScreen = () => {
  const [titleColor, setTitleColor] = useState("#000"); // Màu tiêu đề
  const [minutes, setMinutes] = useState(new Date().getMinutes()); // Lấy phút hiện tại

  // Hàm thay đổi màu tiêu đề theo phút
  useEffect(() => {
    const changeTitleColor = () => {
      const currentMinutes = new Date().getMinutes();
      setMinutes(currentMinutes);
      // Đổi màu theo phút: nếu phút chẵn thì màu xanh, lẻ thì màu đỏ
      setTitleColor(currentMinutes % 2 === 0 ? "#32CD32" : "#FF6347");
    };

    changeTitleColor();
    const interval = setInterval(changeTitleColor, 60000); // Cập nhật mỗi phút

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [minutes]);

  const renderCategory = (category, data) => (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryHeader}>
        <Text style={[styles.categoryTitle, { color: titleColor }]}>
          {category}
        </Text>
        {/* Trái tim đỏ căn giữa với tiêu đề */}
        <TouchableOpacity style={styles.favoriteButton}>
          <Text style={styles.favoriteIcon}>❤️</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemLocation}>{item.location} - {item.price}</Text>
              {/* Đánh giá sao */}
              <View style={styles.ratingContainer}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Text key={index} style={styles.star}>
                    {index < item.rating ? "★" : "☆"}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.entries(favoriteData)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => renderCategory(item[0], item[1])}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
      />
    </SafeAreaView>
  );
};

export default FavoriteScreen;
