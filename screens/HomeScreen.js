import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Replace image paths here when you upload your final assets.
const HOME_IMAGES = {
  logo: require("../assets/carot.png"),
  freshBanner: require("../assets/banner.png"),
  banana: require("../assets/chuoi.png"),
  apple: require("../assets/tao.png"),
  pepper: require("../assets/otdo.png"),
  ginger: require("../assets/gung.png"),
  pulses: require("../assets/ngucoc.png"),
  rice: require("../assets/gao.png"),
  beefBone: require("../assets/thit1.png"),
  broilerChicken: require("../assets/ga.png"),
};

const products = [
  { id: "1", name: "Organic Bananas", unit: "7pcs", price: "$4.99", image: HOME_IMAGES.banana },
  { id: "2", name: "Red Apple", unit: "1kg", price: "$4.99", image: HOME_IMAGES.apple },
  { id: "3", name: "Bell Pepper Red", unit: "1kg", price: "$4.99", image: HOME_IMAGES.pepper },
  { id: "4", name: "Ginger", unit: "250gm", price: "$4.99", image: HOME_IMAGES.ginger },
];

const groceries = [
  { id: "g1", title: "Pulses", image: HOME_IMAGES.pulses, color: "#FCEBD4" },
  { id: "g2", title: "Rice", image: HOME_IMAGES.rice, color: "#DDE9D8" },
];

const meatItems = [
  { id: "m1", name: "Beef Bone", unit: "1kg", price: "$4.99", image: HOME_IMAGES.beefBone },
  { id: "m2", name: "Broiler Chicken", unit: "1kg", price: "$4.99", image: HOME_IMAGES.broilerChicken },
];

function ProductCard({ item, onPlusPress }) {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.unit}, Priceg</Text>
      <View style={styles.cardBottomRow}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.plusBtn} onPress={onPlusPress} activeOpacity={0.8}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Image source={HOME_IMAGES.logo} style={styles.topLogo} resizeMode="contain" />

        <View style={styles.headerTop}>
          <Text style={styles.locationPin}>📍</Text>
          <Text style={styles.locationText}>Dhaka, Banasree</Text>
        </View>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput placeholder="Search Store" placeholderTextColor="#8E8E93" style={styles.searchInput} />
        </View>

        <View style={styles.banner}>
          <Image source={HOME_IMAGES.freshBanner} style={styles.bannerImage} resizeMode="cover" />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onPlusPress={() => navigation.navigate("ProductDetail")}
            />
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.slice(2).map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onPlusPress={() => navigation.navigate("ProductDetail")}
            />
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.groceryRow}>
          {groceries.map((item) => (
            <TouchableOpacity key={item.id} style={[styles.groceryChip, { backgroundColor: item.color }]}> 
              <Image source={item.image} style={styles.groceryImage} resizeMode="contain" />
              <Text style={styles.groceryText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {meatItems.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onPlusPress={() => navigation.navigate("ProductDetail")}
            />
          ))}
        </ScrollView>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="storefront-outline" size={22} color="#53B175" style={styles.navIcon} />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Explore")}> 
          <Ionicons name="search-outline" size={22} color="#181725" style={styles.navIcon} />
          <Text style={styles.navLabel}>Explore</Text>
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
  },
  scrollContent: {
    paddingTop: 56,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  topLogo: {
    width: 34,
    height: 34,
    alignSelf: "center",
    marginBottom: 8,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  locationPin: {
    fontSize: 13,
    marginRight: 6,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  searchBox: {
    backgroundColor: "#F2F3F2",
    height: 50,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 16,
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
  banner: {
    backgroundColor: "#EAF9EF",
    borderRadius: 18,
    padding: 0,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#D6F2E0",
  },
  bannerImage: {
    width: "100%",
    height: 140,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#181725",
  },
  seeAll: {
    color: "#53B175",
    fontWeight: "600",
  },
  card: {
    width: 170,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    backgroundColor: "#fff",
    padding: 12,
    marginRight: 12,
    marginBottom: 16,
  },
  cardImage: {
    width: "100%",
    height: 102,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#181725",
  },
  cardSubtitle: {
    color: "#7C7C7C",
    marginTop: 4,
    marginBottom: 14,
  },
  cardBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
  },
  plusBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#53B175",
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 24,
    fontWeight: "700",
  },
  groceryRow: {
    flexDirection: "row",
    marginBottom: 30,
  },
  groceryChip: {
    flex: 1,
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  groceryImage: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  groceryText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#3E423F",
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
