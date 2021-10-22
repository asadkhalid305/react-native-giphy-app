// packages
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";
// components
import GifInformation from "../components/GifInformation";
import SearchBarView from "../components/platform/SearchBarView";
// services
import toastService from "../services/toastService";
import constantsService from "../services/constantsService";
import apiService from "../services/apiService";

const HomeScreen = ({ navigation: { navigate } }) => {
  // constants
  const { AGE_RESTRICTION, API_GENERAL_ERROR_MSG } = constantsService;

  // states
  const [gifInfo, setGifInfo] = useState({
    id: "",
    url: "",
    title: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // hooks
  useFocusEffect(
    useCallback(() => {
      const fetchRandomGif = async () => {
        setIsLoading(true);
        setGifInfo({
          id: "",
          url: "",
          title: "",
        });
        const newImage = await apiService.fetchRandomGif();
        setGifInfo(newImage);
        setIsLoading(false);
      };

      // calling the function first time manually
      fetchRandomGif();
      // subscribe interval
      // const gifFetchInterval = setInterval(() => {
      //   fetchRandomGif();
      // }, 10000);

      // unsubscribe interval
      // return () => clearInterval(gifFetchInterval);
    }, []),
  );

  // handlers
  const handleSearchBarPress = () => {
    navigate("Search");
  };

  // render
  return (
    <View style={styles.root}>
      <Pressable onPress={handleSearchBarPress}>
        <SearchBarView />
      </Pressable>
      <View>
        <Text style={styles.standardTextSize}>Random Selected GIF:</Text>
        {/* passing an object as prop named "cacheGifInfo" will render the gif if gifInfo prop object will be empty */}
        {/* add this prop in case API stops working but we still want to render a default gif */}
        <GifInformation
          gifInfo={gifInfo}
          ageRestriction={AGE_RESTRICTION}
          isLoading={isLoading}
        />
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
  standardTextSize: {
    fontSize: 16,
  },
});

export default HomeScreen;
