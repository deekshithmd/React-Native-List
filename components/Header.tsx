/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}: {title: string}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping',
};

const styles = StyleSheet.create({
  header: {
    height: 'auto',
    padding: 20,
    backgroundColor: 'darkblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 25,
  },
});

export default Header;
