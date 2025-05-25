import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef } from "react";

const index = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", top: 20, gap:10 }}>
      <TextInput
        style={{
          backgroundColor: "#fff",
          borderColor: "red",
          borderWidth: 1,
          width: "80%",
          paddingVertical: 20,
          color:"black",
          borderRadius:20
          
        }}
        placeholderTextColor="black"
        ref={inputRef}
        placeholder="Enter Value Here"
      />
       <TextInput
        style={{
          backgroundColor: "#fff",
          borderColor: "red",
          borderWidth: 1,
          width: "80%",
          paddingVertical: 20,
          color:"black",
          borderRadius:20
          
        }}
        placeholderTextColor="black"
        placeholder="Enter Value Here"
      /> <TextInput
      style={{
        backgroundColor: "#fff",
        borderColor: "red",
        borderWidth: 1,
        width: "80%",
        paddingVertical: 20,
        color:"black",
        borderRadius:20
        
      }}
      placeholderTextColor="black"
      placeholder="Enter Value Here"
    />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
