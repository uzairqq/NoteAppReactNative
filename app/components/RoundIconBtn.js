import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../misc/colors";

const RoundIconBtn = ({ antIconName, antSize, antColor }) => {
  return (
    <AntDesign
      name={antIconName}
      size={antSize || 24}
      color={antColor || colors.DARK}
    />
  );
};

const styles = StyleSheet.create({});

export default RoundIconBtn;
