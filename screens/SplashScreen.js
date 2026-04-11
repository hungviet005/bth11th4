import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#53B175",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* HÀNG NGANG */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        
        {/* LOGO */}
        <View>
          <Image
            source={require("../assets/Group.png")}
            style={{ width: 50, height: 60 }}
          />
        </View>

        {/* TEXT */}
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              color: "white",
              fontSize: 35,
              fontWeight: "bold",
            }}
          >
            nectar
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 9,
              letterSpacing: 4,
            }}
          >
            online groceries
          </Text>
        </View>

      </View>
    </View>
  );
}