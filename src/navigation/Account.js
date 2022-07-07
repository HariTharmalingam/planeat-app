import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { connect } from "react-redux";
import { headerLeft, headerRight } from "./headers";
import AccountView from "../Screens/Account";
import { StyleSheet, Text, View } from "react-native";

const Account = ({ cart }) => <AccountView />;
const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Account);
