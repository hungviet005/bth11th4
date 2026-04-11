import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export default function LocationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>

      {/* BACK */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 24 }}>←</Text>
      </TouchableOpacity>

      {/* CONTENT */}
      <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>

        {/* MAP IMAGE */}
        <Image
          source={require("../assets/illustration.png")} 
          style={{ width: 180, height: 180, resizeMode: "contain" }}
        />

        {/* TITLE */}
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Select Your Location
        </Text>

        {/* SUB */}
        <Text
          style={{
            textAlign: "center",
            color: "#888",
            marginTop: 10,
          }}
        >
          Switch on your location to stay in tune with{"\n"}
          what's happening in your area
        </Text>

        {/* FORM */}
        <View style={{ width: "100%", marginTop: 30 }}>

          {/* ZONE */}
          <Text style={{ color: "#888" }}>Your Zone</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Banasree</Text>
            <Text>⌄</Text>
          </View>

          {/* AREA */}
          <Text style={{ color: "#888", marginTop: 20 }}>
            Your Area
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#aaa" }}>
              Types of your area
            </Text>
            <Text>⌄</Text>
          </View>

        </View>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          backgroundColor: "#53B175",
          padding: 18,
          borderRadius: 15,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Submit
        </Text>
      </TouchableOpacity>

    </View>
  );
}