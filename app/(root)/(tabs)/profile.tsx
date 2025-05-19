import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const { refetch } = useGlobalContext();
  const handleLogOut = async () => {
    const result = await logout();
    if (result) {
      refetch();
    } else {
      Alert.alert("Login failed", "Please try again.");
      console.log("Login failed");
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={handleLogOut}
        className="bg-white shadow-md shadow-zinc-300 rounded-full w-full mt-5 py-4"
      >
        <View className="flex-row justify-center items-center mx-5">
          <Text className="text-lg font-rubik-medium text-black-300 ml-2">
            Log Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
