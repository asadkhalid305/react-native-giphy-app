// packages
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { SearchBar } from "react-native-elements";
import _debounce from "lodash/debounce";
// services
import {
  PlatformText,
  DimensionWidth,
  IsValidURL,
} from "../services/utilService";
import toastService from "../services/toastService";
import constantsService from "../services/constantsService";
import colorService from "../services/colorService";
import apiService from "../services/apiService";

const SearchScreen = ({ navigation: { navigate } }) => {
  // constants
  const { API_GENERAL_ERROR_MSG } = constantsService;

  // states
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorInResponse, setIsErrorInResponse] = useState(false);

  // hooks
  let debounceSearchText = useCallback(_debounce(onChangeSearchText, 1000), []);

  useFocusEffect(
    useCallback(() => {
      return () => (debounceSearchText = null);
    }, []),
  );

  // handlers
  const handleSearchTextChange = (text) => {
    setIsLoading(true);
    setSearchText(text);
    debounceSearchText(text);
  };

  const handleClear = () => {
    clearState();
  };

  const handleCancel = () => {
    navigate("Home");
  };

  const handleGifPress = ({ title, url }) => {
    navigate("Detail", {
      gifInfo: {
        url,
        title,
      },
      ageRestriction: "16",
    });
  };

  // helpers
  async function onChangeSearchText(text) {
    if (!text) {
      clearState();
      return;
    }
    setImages([]);
    const newImages = await apiService.fetchSearchedGifs(text);
    if (!newImages || !newImages.length) {
      setIsErrorInResponse(true);
    } else {
      setImages(newImages);
    }
    setIsLoading(false);
  }

  const clearState = () => {
    setSearchText("");
    setImages([]);
    setIsErrorInResponse(false);
    setIsLoading(false);
  };

  // render
  const Item = ({ details }) => {
    return (
      <Pressable onPress={() => handleGifPress(details)}>
        <Image
          style={styles.image}
          source={IsValidURL(details.url) ? { uri: details.url } : details.url}
        ></Image>
      </Pressable>
    );
  };

  const renderItem = ({ item }) => <Item details={item} />;

  return (
    <View style={styles.root}>
      <SearchBar
        platform={PlatformText()}
        placeholder="Search"
        containerStyle={styles.searchBarView}
        inputContainerStyle={styles.searchBarInputView}
        inputStyle={styles.searchBarInput}
        cancelButtonProps={styles.searchBarCancel}
        value={searchText}
        onChangeText={handleSearchTextChange}
        onClear={handleClear}
        onCancel={handleCancel}
      />
      <Text style={styles.standardTextSize}>Search Results:</Text>
      <View style={styles.centerItems}>
        {isLoading ? (
          <ActivityIndicator large />
        ) : isErrorInResponse ? (
          <Text style={styles.standardTextSize}>No Search Results Found</Text>
        ) : (
          <FlatList data={images} renderItem={renderItem} numColumns={3} />
        )}
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
  searchBarView: {
    marginVertical: 12,
    paddingTop: 0,
    paddingBottom: 0,
  },
  searchBarInputView: {
    backgroundColor: colorService.searchViewBgColor,
    marginLeft: 0,
    paddingHorizontal: 6,
  },
  searchBarInput: {
    color: colorService.searchViewColor,
    fontWeight: "500",
    fontSize: 16,
  },
  searchBarCancel: {
    color: colorService.searchViewColor,
  },
  image: {
    width: DimensionWidth * 0.29,
    height: 100,
    marginHorizontal: 3.5,
    marginVertical: 3,
  },
  centerItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  standardTextSize: {
    fontSize: 16,
  },
});

export default SearchScreen;
