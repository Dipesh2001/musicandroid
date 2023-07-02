import React, { Component } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-web";

const Player = () => {
  return (
    <View style={styles.container}>
      <Text> Player </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Player;
