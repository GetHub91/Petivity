import React, { Component } from 'react';
 
import {
  StyleSheet,
  View
} from 'react-native';
 
const Container = (props) => {
  return (
    <View style={styles.labelContainer}>
      { props.children }
    </View>
  );
}
 
const styles = StyleSheet.create({
  labelContainer: {
    marginBottom: 20,
    width: '100%',
  }
});
 
export default Container;