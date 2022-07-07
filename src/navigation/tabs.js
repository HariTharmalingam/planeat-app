import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import OrderView from "./OrderView";
import Account from "./Account";
import { StyleSheet, Image, View } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        initialRouteName: "Home",
        activeColor: "#F3683F",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#ffffff",
          left: 20,
          right: 20,
          bottom: 25,
          elevation: 0,
          borderRadius: 20,
          borderTopRightRadius: 20,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              {/* <Image
                source={require("../assets/images/onboar")}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              /> */}
            </View>
          ),
        }}
      />
      <Tab.Screen name="Commande" component={OrderView} />
      <Tab.Screen name="Compte" component={Account} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 0.26,
  },
});

export default Tabs;
