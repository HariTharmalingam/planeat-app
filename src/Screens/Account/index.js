import React from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";

const AccountView = ({}) => {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(AccountView);
