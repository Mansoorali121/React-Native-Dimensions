import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useEffect } from "react";

const index = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1);
    }, 1000);
  },);
  return (
    <View style={{ flex: 1, alignItems: "center", top: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        I have been Rendered {count} Times
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
