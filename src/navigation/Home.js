import React, { useContext } from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import Firebase from "../../config/firebase";

import Cart from "../Screens/Cart";
import ProductOverView from "../Screens/ProductOverview";
import ProductList from "../Screens/ProductsList";
import { headerLeft, headerRight } from "./headers";
import { AuthenticatedUserContext } from "./Auth/AuthenticatedUserProvider";

const auth = Firebase.auth();

const Stack = createSharedElementStackNavigator();

const Home = ({ cart, navigation }) => {
  const { user } = useContext(AuthenticatedUserContext);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsList"
        options={({ navigation }) => ({
          headerShown: false,
          headerRight: () => headerRight(cart, navigation),
          headerLeft: () => headerLeft(navigation),
        })}
        component={ProductList}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen
        name="ProductOverview"
        options={({ route, navigation }) => ({
          title: route.params.item.title,
          headerRight: () => headerRight(cart, navigation),
        })}
        component={ProductOverView}
        sharedElements={(route, otherRoute, showing) => {
          if (otherRoute.name === "ProductsList" && showing) {
            const { item } = route.params;
            return [
              {
                id: `item.${item.id}.photo`,
                animation: "move",
                resize: "auto",
                align: "center-top",
              },
            ];
          }
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e93b81",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Home);
