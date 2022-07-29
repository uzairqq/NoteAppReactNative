import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Intro from "./app/screens/Intro";
import NoteScreen from "./app/screens/NoteScreen";

const App = () => {
  const [user, setUser] = useState({});
  console.log("User:-", user);

  const findUser = async () => {
    const fetchedUser = await AsyncStorage.getItem("user");
    console.log("Fetched User:-", fetchedUser);
    setUser(JSON.parse(fetchedUser));
  };

  useEffect(() => {
    findUser();
  }, []);

  // return <Intro />;
  return <NoteScreen user={user} />;
};

export default App;
