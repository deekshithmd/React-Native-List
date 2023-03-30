/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);

  return (
    <View>
      <TextInput
        value={text}
        placeholder="Add item..."
        style={styles.inputStyle}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText('');
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    padding: 9,
    margin: 5,
    backgroundColor: '#c2bad8',
  },
  btnText: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
  },
});

export default AddItem;
