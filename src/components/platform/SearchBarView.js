// packages
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
// services
import colorService from "../../services/colorService";

const SearchBarView = () => {
  // render
  return (
    <View style={styles.searchBarView}>
      <Icon
        name="search"
        style={(styles.searchBarContentColor, styles.searchBarIcon)}
        size={24}
      ></Icon>
      <Text style={[styles.searchBarContentColor, styles.searchBarText]}>
        Search
      </Text>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  searchBarView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colorService.searchViewBgColor,
    marginVertical: 12,
    borderRadius: 9,
    padding: 12,
    minHeight: 36,
  },
  searchBarContentColor: {
    color: colorService.searchViewColor,
  },
  searchBarText: {
    marginLeft: 10,
    opacity: 0.8,
    fontSize: 16,
    fontWeight: "500",
    overflow: "hidden",
  },
  searchBarIcon: {
    opacity: 0.6,
  },
});

export default SearchBarView;
