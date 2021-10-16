// packages
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

// components
import GifInformation from "../components/platofrm/GifInformation";

const DetailScreen = ({ route, navigation: { goBack } }) => {
  const { gifInfo, ageRestriction } = route.params;
  // render
  return (
    <View style={styles.root}>
      <View style={styles.titleView}>
        <Icon
          brand={true}
          size={32}
          name="chevron-left"
          onPress={goBack}
          containerStyle={styles.iconView}
        />
        <Text style={styles.title} numberOfLines={1}>
          {gifInfo.title ? gifInfo.title : "Title not available"}
        </Text>
        <View style={styles.emptyView} />
      </View>
      <View>
        <GifInformation gifInfo={gifInfo} ageRestriction={ageRestriction} />
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 18,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 26,
    marginVertical: 22,
  },
  iconView: { flex: 1, alignItems: "flex-start" },
  emptyView: {
    flex: 1,
  },
});

export default DetailScreen;
