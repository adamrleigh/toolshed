import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const UserScreen = () => {
  return (
      <View style={styles.container}>
      <Text>My Page</Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
