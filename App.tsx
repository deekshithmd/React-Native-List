import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Milk',
    },
    {
      id: 2,
      text: 'Fruit',
    },
    {
      id: 3,
      text: 'Rice',
    },
    {
      id: 4,
      text: 'Egg',
    },
  ]);
  let counter = 5;

  const deleteItem = itemId => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const addItem = textValue => {
    if (textValue) {
      setItems(prev => [...prev, {id: counter++, text: textValue}]);
    } else {
      Alert.alert('Error', 'Please Enter item name', [
        {text: 'Close', onPress: () => console.log('Closed')},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
});

export default App;
