import React, { Component } from "react";
import { useEffect } from "react";
import { Text, View, Dimensions } from "react-native";
import { StyleSheet } from "react-native-web";
import { useSelector } from "react-redux";
import { RecyclerListView, LayoutProvider } from "recyclerlistview";

const AudioList = () => {
  const audioList = useSelector((state) => state.audio.audioList);
  const dataprovider = useSelector((state) => state.audio.dataprovider);

  const layoutProvider = new LayoutProvider(
    (i) => i,
    (type, dim) => {
      switch (type) {
        case "audio":
          dim.width = Dimensions.get("window").width;
          dim.height = 70;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    }
  );

  const rowRenderer = (type, item) => {
    return <Text>{item.filename}</Text>;
  };

  useEffect(() => {
    console.log("dataprovider", dataprovider);
  }, []);

  return (
    <View style={styles.container}>
      {console.log("new", audioList)}
      {/* <RecyclerListView
        dataProvider={dataprovider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
      /> */}
      <Text>Audo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default AudioList;
