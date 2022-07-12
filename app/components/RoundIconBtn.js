import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";

const RoundIconBtn = ({ antIconName, antSize, antColor, onPress }) => {
  return (
    <AntDesign
      name={antIconName}
      size={antSize || 24}
      color={antColor || colors.DARK}
      style={styles.icon}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.PRIMARY,
    padding: 20,
    borderRadius: 50,
    elevation: 5,
  },
});

export default RoundIconBtn;
