import React, { useState, useEffect, useContext } from "react";
import { View, Text, FlatList, Animated } from "react-native";
import CardProduct from "../../Components/Card.Product";
import { connect } from "react-redux";
import Firebase from "../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { AuthenticatedUserContext } from "../../navigation/Auth/AuthenticatedUserProvider";
import { IconButton } from "../../Components/ui";
import Header from "../../navigation/Header";

const db = Firebase.firestore();
const auth = Firebase.auth();

const ProductList = ({ navigation, products }) => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };
  const { user } = useContext(AuthenticatedUserContext);

  // const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), name: doc.name })));
    };

    getProducts();
  }, []);
  return (
    <View>
      <Animated.View
        style={{
          transform: [{ translateY: translateY }],
          elevation: 4,
          zIndex: 100,
        }}
      >
        <Header />
      </Animated.View>{" "}
      <IconButton
        name="logout"
        size={24}
        color="#fff"
        onPress={handleSignOut}
      />
      <FlatList
        keyExtractor={(item) => item.photo}
        data={products}
        renderItem={({ item }) => (
          <CardProduct item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps)(ProductList);
