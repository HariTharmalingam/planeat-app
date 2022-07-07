import React from "react";
import { Provider } from "react-redux";
import AppContainer from "./src/navigation";
import configureStore from "./src/store";
import "react-native-gesture-handler";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
