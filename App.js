import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import * as MediaLibrary from "expo-media-library";
import { useEffect } from "react";

import { store } from "./app/redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { addAudioList } from "./app/features/audioSlice";

export default function App() {
  const dispatch = useDispatch();
  const { dataProvider, audioList } = useSelector((state) => state.audio);

  const permissionAlert = () => {
    Alert.alert("Permission Required", "This app needs to read audio files!", [
      { text: "I am Ready!", onPress: () => getPermission() },
      { text: "Cancel", onPress: () => permissionAlert() },
    ]);
  };

  const getAllAudioFiles = async () => {
    let mediaList = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
    });
    mediaList = await MediaLibrary.getAssetsAsync({
      mediaType: "audio",
      first: mediaList.totalCount,
    });
    dispatch(addAudioList([...audioList, ...mediaList.assets]));
    // dispatch(
    //   addAudioList({
    //     dataprovider: [...audioFiles, ...mediaList.assets],
    //     audioList: [...audioFiles, ...mediaList.assets],
    //   })
    // );
  };

  const getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log("permission", permission);
    if (permission.granted) {
      // get all audio files
      getAllAudioFiles();
    }

    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();

      if (status === "denied" && canAskAgain) {
        // display aler we need permiussion
        permissionAlert();
      }

      if (status === "granted") {
        // get all files here
        getAllAudioFiles();
      }

      if (status === "denied" && !canAskAgain) {
        // display some error to user
      }
    }
  };

  useEffect(() => {
    console.log("here");
    getPermission();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
