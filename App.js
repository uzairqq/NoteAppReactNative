import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import Intro from "./app/screens/Intro";

const App = () => {
  const findUser = async () => {
    const fetchedUser = await AsyncStorage.getItem("user");
    console.log(fetchedUser);
  };

  useEffect(() => {
    findUser();
  }, []);

  return <Intro />;
};

export default App;
