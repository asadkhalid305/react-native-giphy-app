// packages
import React from "react";
import { StyleSheet } from "react-native";
import { Badge } from "react-native-elements";
// services
import colorService from "../../services/colorService";

const AgeBadge = ({ ageRestriction }) => {
  return (
    <Badge
      value={`${ageRestriction ? ageRestriction : "18"}+`}
      badgeStyle={styles.base}
      textStyle={styles.text}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: colorService.badgeBgColor,
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default AgeBadge;
