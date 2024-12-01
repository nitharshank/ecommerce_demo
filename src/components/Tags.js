import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Colors from '../utils/Colors';

const Tags = () => {
  const [selected, setSelected] = useState('Trending Now');
  const tags = ['Trending Now', 'All', 'New', 'Fashion', 'Mens'];
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={tags}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => setSelected(item)}>
              <Text
                style={[
                  styles.tagText,
                  item === selected ? styles.isSelected : null,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  tagText: {
    fontSize: 12,
    fontFamily: 'Montserrat_Light_300',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginEnd: 10,
    backgroundColor: Colors.light_grey_200,
    color:  Colors.light_grey,
  },
  isSelected: {
    backgroundColor: Colors.red,
    color: Colors.white,
  },
  container: {
    marginVertical: 4,
  },
});
