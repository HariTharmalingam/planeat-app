import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../../Screens/Authentification/Landing";
import LoginScreen from "../../Screens/Authentification/LoginScreen";
import SignupScreen from "../../Screens/Authentification/SignupScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Landing"
        component={Landing}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
}
