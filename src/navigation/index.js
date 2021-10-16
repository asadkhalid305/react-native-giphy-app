// packages
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import DetailScreen from "../screens/DetailScreen";
// services
import colorService from "../services/colorService";

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          contentStyle: {
            backgroundColor: colorService.screenBgColor,
          },
        }}
      >
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="Search" component={SearchScreen} />
        <AppStack.Screen name="Detail" component={DetailScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
