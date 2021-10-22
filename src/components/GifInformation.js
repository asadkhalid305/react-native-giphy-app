// packages
import React from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
// components
import AgeBadge from "./platform/AgeBadge";
// services
import { DimensionHeight, IsValidURL } from "../services/utilService";

const GifInformation = ({
  gifInfo,
  cacheGifInfo,
  isLoading,
  ageRestriction,
}) => {
  // set cacheGifInfo into gitDetails by default
  let gifDetail = cacheGifInfo || {};
  // set imageView into imageViewClass by default
  let imageViewClass = styles.imageView;

  // if gifInfo is available then overwrite gifDetails with it
  if (gifInfo?.url) {
    gifDetail = gifInfo;
  }
  // if in loading state or gifInfo is not available then append centerItems class to imageViewClass
  if (isLoading || !gifDetail?.url) {
    imageViewClass = {
      ...imageViewClass,
      ...styles.centerItems,
    };
  }

  // render
  const InfoText = ({ value, message, numberOfLines }) => (
    <Text style={styles.infoText} numberOfLines={numberOfLines}>
      {value ? value : message}
    </Text>
  );

  return (
    <>
      <View style={imageViewClass}>
        {isLoading ? (
          <ActivityIndicator large />
        ) : gifDetail.url ? (
          <Image
            source={
              IsValidURL(gifDetail.url) ? { uri: gifDetail.url } : gifDetail.url
            }
            style={styles.image}
          />
        ) : (
          <Text style={styles.infoText}>Gif not found</Text>
        )}
      </View>
      <View style={styles.infoView}>
        <View style={styles.infoTextView}>
          <InfoText
            value={gifDetail.title}
            message="Title not found"
            numberOfLines={2}
          />
          <InfoText
            value={gifDetail.url}
            message="URL not found"
            numberOfLines={7}
          />
        </View>
        <View>
          <AgeBadge ageRestriction={ageRestriction} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageView: {
    marginTop: 12,
    marginBottom: 22,
    height: DimensionHeight * 0.45,
  },
  image: {
    width: "100%",
    height: DimensionHeight * 0.45,
  },
  centerItems: {
    justifyContent: "center",
    alignItems: "center",
  },
  infoView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoTextView: {
    flex: 1,
    paddingRight: 6,
    fontSize: 16,
  },
  infoText: {
    fontSize: 16,
    paddingVertical: 4,
  },
});
export default GifInformation;
