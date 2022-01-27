import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const RequestScreen = ({ route, navigation }) => {
  
  const { req } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>{`${req.title}`}</Text>
      <Text>{`${req.body}`}</Text>
      <Text>{`${req.user}`}</Text>
      <Pressable onPress={() => { navigation.goBack() }}>
        <Text>Back to toolboard</Text>
      </Pressable>
    </View>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
  }
});
