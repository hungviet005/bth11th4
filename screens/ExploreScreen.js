import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Replace these image paths when you upload final category assets.
const EXPLORE_IMAGES = {
  fresh: require("../assets/anh10.png"),
  oil: require("../assets/dau.png"),
  meat: require("../assets/thit.png"),
  bakery: require("../assets/banh.png"),
  dairy: require("../assets/trung.png"),
  beverages: require("../assets/nuoc.png"),
};

const categories = [
  { id: "1", title: "Fresh Fruits\n& Vegetable", image: EXPLORE_IMAGES.fresh, color: "#E9F7EF", border: "#8ED1A4" },
  { id: "2", title: "Cooking Oil\n& Ghee", image: EXPLORE_IMAGES.oil, color: "#FFF5E8", border: "#F6C285" },
  { id: "3", title: "Meat & Fish", image: EXPLORE_IMAGES.meat, color: "#FDEDED", border: "#E8A4A4" },
  { id: "4", title: "Bakery & Snacks", image: EXPLORE_IMAGES.bakery, color: "#FFF4E3", border: "#E7C594" },
  { id: "5", title: "Dairy & Eggs", image: EXPLORE_IMAGES.dairy, color: "#F8F1DE", border: "#D9CA93" },
  { id: "6", title: "Beverages", image: EXPLORE_IMAGES.beverages, color: "#E8F3FB", border: "#9ABFD8" },
];

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topSpace}>
        <Text style={styles.title}>Find Products</Text>
      </View>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput placeholder="Search Store" placeholderTextColor="#8E8E93" style={styles.searchInput} />
      </View>

      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 10, paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => item.title.includes("Beverages") && navigation.navigate("Beverages")}
            style={[
              styles.categoryCard,
              {
                backgroundColor: item.color,
                borderColor: item.border,
              },
            ]}
          >
            <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}> 
          <Ionicons name="storefront-outline" size={22} color="#181725" style={styles.navIcon} />
          <Text style={styles.navLabel}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search-outline" size={22} color="#53B175" style={styles.navIcon} />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cart-outline" size={22} color="#181725" style={styles.navIcon} />
          <Text style={styles.navLabel}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={22} color="#181725" style={styles.navIcon} />
          <Text style={styles.navLabel}>Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#181725" style={styles.navIcon} />
          <Text style={styles.navLabel}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingTop: 56,
  },
  topSpace: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#181725",
  },
  searchBox: {
    marginHorizontal: 16,
    backgroundColor: "#F2F3F2",
    height: 50,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 6,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#1C1C1E",
  },
  categoryCard: {
    width: "48%",
    borderWidth: 1,
    borderRadius: 18,
    height: 180,
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  categoryImage: {
    width: 70,
    height: 70,
    marginBottom: 12,
  },
  categoryTitle: {
    textAlign: "center",
    color: "#181725",
    fontWeight: "700",
    lineHeight: 22,
    fontSize: 16,
  },
  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 78,
    borderTopWidth: 1,
    borderTopColor: "#EDEDED",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    fontSize: 16,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: "#777",
  },
  navLabelActive: {
    color: "#53B175",
    fontWeight: "700",
  },
});
