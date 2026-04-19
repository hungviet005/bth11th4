import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ALL_PRODUCTS = [
  { id: "1", name: "Egg Chicken Red", unit: "4pcs, Price", price: "$1.99", image: require("../assets/trung1.png") },
  { id: "2", name: "Egg Chicken White", unit: "180g, Price", price: "$1.50", image: require("../assets/trung2.png") },
  { id: "3", name: "Egg Pasta", unit: "30gm, Price", price: "$15.99", image: require("../assets/trung3.png") },
  { id: "4", name: "Egg Noodles", unit: "2L, Price", price: "$15.99", image: require("../assets/trung4.png") },
  { id: "5", name: "Mayonnais Eggless", unit: "300g, Price", price: "$5.99", image: require("../assets/trung5.png") },
  { id: "6", name: "Egg Noodles", unit: "1kg, Price", price: "$7.99", image: require("../assets/trung6.png") },
];

function ProductCard({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => navigation.navigate("ProductDetail")}
    >
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardName} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.cardUnit}>{item.unit}</Text>
      <View style={styles.cardBottom}>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.plusBtn}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

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

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("Egg");

  const filtered = ALL_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#999" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
            placeholder="Search Store"
            placeholderTextColor="#999"
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery("")}>
              <Ionicons name="close-circle" size={18} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.filterBtn} onPress={() => navigation.navigate("Filters")}>
          <Ionicons name="options-outline" size={20} color="#181725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingTop: 12, paddingBottom: 80 }}
        renderItem={({ item }) => <ProductCard item={item} navigation={navigation} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No results found for "{query}"</Text>
        }
      />

      <BottomTab navigation={navigation} active="Explore" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 56 },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    paddingHorizontal: 14,
    height: 48,
  },
  searchInput: { flex: 1, fontSize: 14, color: "#181725" },
  filterBtn: {
    width: 48,
    height: 48,
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    padding: 12,
    marginBottom: 14,
  },
  cardImage: { width: "100%", height: 100 },
  cardName: { fontSize: 14, fontWeight: "600", color: "#181725", marginTop: 8 },
  cardUnit: { fontSize: 12, color: "#7C7C7C", marginTop: 2 },
  cardBottom: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 8 },
  cardPrice: { fontSize: 14, fontWeight: "700", color: "#181725" },
  plusBtn: {
    width: 36,
    height: 36,
    backgroundColor: "#53B175",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: { color: "#fff", fontSize: 22, lineHeight: 26 },
  emptyText: { textAlign: "center", marginTop: 40, color: "#7C7C7C", fontSize: 14 },
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
