import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "../tabs";

import HomeScreen from "../../Screens/Authentification/HomeScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return <Tabs />;
}
