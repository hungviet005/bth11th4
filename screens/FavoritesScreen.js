import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FAVORITES = [
  { id: "1", name: "Sprite Can", unit: "325ml, Price", price: "$1.50", image: require("../assets/nuoc2.png") },
  { id: "2", name: "Diet Coke", unit: "355ml, Price", price: "$1.99", image: require("../assets/nuoc1.png") },
  { id: "3", name: "Apple & Grape Juice", unit: "2L, Price", price: "$15.50", image: require("../assets/nuoc3.png") },
  { id: "4", name: "Coca Cola Can", unit: "325ml, Price", price: "$4.99", image: require("../assets/nuoc5.png") },
  { id: "5", name: "Pepsi Can", unit: "330ml, Price", price: "$4.99", image: require("../assets/nuoc6.png") },
];

const BottomTab = ({ navigation, active }) => (
  <View style={styles.bottomTab}>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Home")}>
      <Ionicons name="home-outline" size={22} color={active === "Shop" ? "#53B175" : "#999"} />
      <Text style={[styles.tabLabel, active === "Shop" && styles.tabLabelActive]}>Shop</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Explore")}>
      <Ionicons name="search-outline" size={22} color={active === "Explore" ? "#53B175" : "#999"} />
      <Text style={[styles.tabLabel, active === "Explore" && styles.tabLabelActive]}>Explore</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Cart")}>
      <Ionicons name="cart-outline" size={22} color={active === "Cart" ? "#53B175" : "#999"} />
      <Text style={[styles.tabLabel, active === "Cart" && styles.tabLabelActive]}>Cart</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Favorites")}>
      <Ionicons name="heart-outline" size={22} color={active === "Favourite" ? "#53B175" : "#999"} />
      <Text style={[styles.tabLabel, active === "Favourite" && styles.tabLabelActive]}>Favourite</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Ionicons name="person-outline" size={22} color="#999" />
      <Text style={styles.tabLabel}>Account</Text>
    </TouchableOpacity>
  </View>
);

export default function FavoritesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourrite</Text>

      <FlatList
        data={FAVORITES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 160 }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.favRow}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("ProductDetail")}
          >
            <Image source={item.image} style={styles.favImage} resizeMode="contain" />
            <View style={styles.favInfo}>
              <Text style={styles.favName}>{item.name}</Text>
              <Text style={styles.favUnit}>{item.unit}</Text>
            </View>
            <Text style={styles.favPrice}>{item.price}</Text>
            <Ionicons name="chevron-forward" size={18} color="#B3B3B3" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        )}
      />

      {/* Add All To Cart */}
      <View style={styles.addAllArea}>
        <TouchableOpacity
          style={styles.addAllBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>

      <BottomTab navigation={navigation} active="Favourite" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 56 },
  title: { fontSize: 22, fontWeight: "700", color: "#181725", textAlign: "center", marginBottom: 20 },
  separator: { height: 1, backgroundColor: "#E2E2E2" },
  favRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  favImage: { width: 60, height: 60, marginRight: 14 },
  favInfo: { flex: 1 },
  favName: { fontSize: 14, fontWeight: "700", color: "#181725" },
  favUnit: { fontSize: 12, color: "#7C7C7C", marginTop: 4 },
  favPrice: { fontSize: 14, fontWeight: "700", color: "#181725" },
  addAllArea: {
    position: "absolute",
    bottom: 72,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#fff",
  },
  addAllBtn: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  addAllText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  bottomTab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
    alignItems: "center",
  },
  tabItem: { flex: 1, alignItems: "center", justifyContent: "center" },
  tabLabel: { fontSize: 10, color: "#999", marginTop: 2 },
  tabLabelActive: { color: "#53B175", fontWeight: "600" },
});
