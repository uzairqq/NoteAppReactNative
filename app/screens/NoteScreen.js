import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import colors from "../misc/colors";

const NoteScreen = ({ user }) => {
  console.log("Passed User:-", user);
  const [greet, setGreet] = useState("Evening");
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <View style={styles.container}>
        <Text>{`Good ${greet} ${user}`}</Text>
      </View>
    </>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {},
});
