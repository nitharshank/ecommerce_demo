import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { fonts } from '../utils/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Constant} from '../utils/constant';
import Colors from '../utils/Colors';

const ProductCard = ({ item, handleProductClick, toggleFavorite }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleProductClick(item);
      }}
    >
      <Image source={{ uri: item.mainImage }} style={styles.coverImage} />
      <View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
        <Text style={styles.price}>${item.price.amount}</Text>
      </View>
      <View style={styles.likeContainer}>
        <TouchableOpacity
            onPress={() => {
              toggleFavorite(item);
            }}
        >
          {item.isFavorite ? (
              <Ionicons name = {'heart'} size={15} color={'red'}/>
          ) : (
              <Ionicons name = {'heart-outline'} size={15} color={'red'}/>
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    paddingEnd: 10,
    marginTop: 10,
  },
  coverImage: {
    height: (Constant.SCREEN_WIDTH - 40) / 3,
    width: (Constant.SCREEN_WIDTH - 40) / 3,
    borderRadius: 12,
    position: 'relative',
  },
  title: {
    fontSize: 13,
    width: (Constant.SCREEN_WIDTH - 40) / 3,
    fontFamily: fonts.regular,
    marginTop: 2,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.grey,
  },
  price: {
    fontSize: 11,
    textAlign: 'center',
    fontFamily: fonts.medium,
  },
  likeContainer: {
    position: 'absolute',
    padding: 2,
    backgroundColor: Colors.white,
    borderRadius: 20,
    right: 20,
    top: 8,
  },
});
