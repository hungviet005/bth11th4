import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

// Replace this path with your final apple image.
const PRODUCT_IMAGES = {
  apple: require("../assets/tao.png"),
};

export default function ProductDetailScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.topIcon}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.topIcon}>⤴</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageWrap}>
          <Image source={PRODUCT_IMAGES.apple} style={styles.productImage} resizeMode="contain" />
        </View>

        <Text style={styles.title}>Naturel Red Apple</Text>
        <Text style={styles.subtitle}>1kg, Price</Text>

        <View style={styles.qtyPriceRow}>
          <View style={styles.qtyRow}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => setQuantity((value) => Math.max(1, value - 1))}
            >
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{quantity}</Text>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => setQuantity((value) => value + 1)}>
              <Text style={[styles.qtyBtnText, { color: "#53B175" }]}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.price}>$4.99</Text>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.rowItem}>
          <Text style={styles.rowTitle}>Product Detail</Text>
          <Text style={styles.rowArrow}>⌄</Text>
        </TouchableOpacity>

        <Text style={styles.description}>
          Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart.
          As part of a healthy and varied diet.
        </Text>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.rowItem}>
          <Text style={styles.rowTitle}>Nutritions</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>100gr</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.rowItem}>
          <Text style={styles.rowTitle}>Review</Text>
          <Text style={styles.stars}>★★★★★</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  topIcon: {
    fontSize: 24,
    color: "#181725",
  },
  imageWrap: {
    height: 280,
    borderRadius: 28,
    backgroundColor: "#F2F3F2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  productImage: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#181725",
  },
  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
    marginTop: 6,
    marginBottom: 18,
  },
  qtyPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: {
    fontSize: 24,
    color: "#B3B3B3",
  },
  qtyText: {
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: "600",
  },
  price: {
    fontSize: 26,
    fontWeight: "700",
    color: "#181725",
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginVertical: 16,
  },
  rowItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
  },
  rowArrow: {
    fontSize: 18,
    color: "#7C7C7C",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 22,
    color: "#7C7C7C",
  },
  badge: {
    backgroundColor: "#EBEBEB",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontWeight: "600",
    color: "#7C7C7C",
  },
  stars: {
    color: "#F79E1B",
    fontSize: 18,
    letterSpacing: 2,
  },
  addButton: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 26,
    backgroundColor: "#53B175",
    borderRadius: 18,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
