import { registerRootComponent } from "expo";

// import App from "./App";

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);

import { AppRegistry } from "react-native";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
// import { name as appName } from "./app.json";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// AppRegistry.registerComponent("main", () => Root);
registerRootComponent(Root);
