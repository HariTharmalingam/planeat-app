import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, InputField, ErrorMessage } from "../../Components/ui";

export default function Landing({ navigation }) {
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          height: "66%",
        }}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate("Login")}
          bgColor="#F3683F"
          title="Se connecter"
          titleColor="#FFFFFF"
        />
        <Button
          onPress={() => navigation.navigate("Signup")}
          bgColor="#FFFFFF"
          title="Créer un compte"
          titleColor="#626262"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "33%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  logo: {
    alignItems: "flex-end",
    alignSelf: "center",
    justifyContent: "center",
    top: 400,
  },
});
