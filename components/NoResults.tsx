import images from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

function NoResults() {
  return (
    <View className="flex-1 items-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="text-2xl font-rubik-bold text-black-300 mt-5">
        No Result
      </Text>
      <Text className="text-base text-black-100 mt-1">
        We could not find any results
      </Text>
    </View>
  );
}

export default NoResults;
