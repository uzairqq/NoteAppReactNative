import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../misc/colors";
import RoundIconBtn from "../components/RoundIconBtn";

const Intro = () => {
  const [userName, setUserName] = useState("");

  const handleOnChange = (text) => {
    setUserName(text);
  };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Enter Your Name to Continue:</Text>
        <TextInput
          placeholder="Enter your Name to Continue"
          style={styles.textInput}
          onChangeText={handleOnChange}
          value={userName}
        />
        {userName.trim().length > 3 ? (
          <RoundIconBtn antIconName={"arrowright"} />
        ) : null}
      </View>
    </>
  );
};
const width = Dimensions.get("window").width - 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    color: colors.PRIMARY,
    width,
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  inputTitle: {
    alignSelf: "flex-start",
    paddingLeft: 25,
    marginBottom: 5,
    opacity: 0.5,
  },
});

export default Intro;
