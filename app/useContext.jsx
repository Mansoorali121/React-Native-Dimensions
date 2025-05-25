import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useContext, useState } from "react";
import component1 from "./propsdrilling";

const userContext = createContext();
function contxtcomponent() {
  const [user, setUser] = useState("Mansoor");

  return (
    <userContext.Provider value={user}>
      <Text>User Name ye he </Text>
      <Text>{`Name is ${user}`}</Text>
      <Component2/>
    </userContext.Provider>
  );
}
function Component2 (){
    return (
        <>
        <Text>ye Component 2 he </Text>
        <Text>Isma Function 3 bi call krlia he </Text>
        <Component3/>
        </>
    )
}
function Component3(){
    const user = useContext(userContext);
    return (
        <>
        <Text>Ab isma User ko Access kr rha hun.</Text>
        <Text>{user}</Text>
        </>
    )
}

export default contxtcomponent;

const styles = StyleSheet.create({});
