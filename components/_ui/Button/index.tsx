import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text } from 'react-native';

type Props = {
  children: ReactNode;
  addStyles?: any;
};

const Button: React.FC<Props> = ({ children, addStyles = {} }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { ...addStyles }]}
      onPress={() => {
        console.log(123);
      }}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff85ff',
    paddingVertical: 12,
    borderRadius: 18,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 32,
  },
});

export default Button;