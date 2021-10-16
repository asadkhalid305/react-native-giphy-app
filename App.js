// packages
import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";

// services
import AppNavigation from "./src/navigation";

const App = () => {
  return (
    <RootSiblingParent>
      <AppNavigation />
    </RootSiblingParent>
  );
};

export default App;
