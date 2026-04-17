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

// Replace these image paths with your final beverages assets.
const BEVERAGE_IMAGES = {
  dietCoke: require("../assets/nuoc1.png"),
  sprite: require("../assets/nuoc2.png"),
  appleGrape: require("../assets/nuoc3.png"),
  orangeJuice: require("../assets/nuoc4.png"),
  cocaCola: require("../assets/nuoc5.png"),
  pepsi: require("../assets/nuoc6.png"),
};

const beverages = [
  { id: "1", name: "Diet Coke", unit: "355ml, Price", price: "$1.99", image: BEVERAGE_IMAGES.dietCoke },
  { id: "2", name: "Sprite Can", unit: "325ml, Price", price: "$1.50", image: BEVERAGE_IMAGES.sprite },
  { id: "3", name: "Apple & Grape Juice", unit: "2L, Price", price: "$15.99", image: BEVERAGE_IMAGES.appleGrape },
  { id: "4", name: "Orange Juice", unit: "2L, Price", price: "$15.99", image: BEVERAGE_IMAGES.orangeJuice },
  { id: "5", name: "Coca Cola Can", unit: "325ml, Price", price: "$4.99", image: BEVERAGE_IMAGES.cocaCola },
  { id: "6", name: "Pepsi Can", unit: "330ml, Price", price: "$4.99", image: BEVERAGE_IMAGES.pepsi },
];

function BeverageCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardName}>{item.name}</Text>
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

export default function BeveragesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.topIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Beverages</Text>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={20} color="#181725" style={styles.topIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={beverages}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <BeverageCard item={item} onPress={() => navigation.navigate("ProductDetail")} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 56,
  },
  topBar: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  topIcon: {
    fontSize: 22,
    color: "#181725",
    width: 28,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },
  card: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
  },
  cardImage: {
    width: "100%",
    height: 98,
    marginBottom: 8,
  },
  cardName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#181725",
    minHeight: 40,
  },
  cardUnit: {
    color: "#7C7C7C",
    marginTop: 4,
    marginBottom: 14,
  },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: "700",
  },
  plusBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#53B175",
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 22,
  },
});
