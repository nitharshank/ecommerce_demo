import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { fonts } from '../utils/fonts';
import {Constant} from '../utils/constant';
import Colors from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartCard = ({ item, handleDelete }) => {
  return (
      <View style={styles.container}>
        <View style={styles.imageContainer} >
          <Image source={{ uri: item.mainImage }} style={styles.image} />
        </View>
        <View style={styles.box2} >
            <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.stockText}>{item.stockStatus}</Text>
            <View style={styles.likeContainer}>
                <Ionicons name = {'heart'} size={15} color={'red'}/>
                <Text style={styles.likeText}> 5.8K+</Text>
            </View>
            <View style={styles.likeContainer}>
                <Text style={styles.currencyText}>{item.price.currency}</Text>
                <Text style={styles.priceText}>{item.price.amount}</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <View style={styles.deleteContainer} >
          <Ionicons name={'trash-outline'} size={26} color={Colors.red} />
        </View>
        </TouchableOpacity>
      </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange items horizontally
    height: 120,
    borderColor: Colors.light_grey_200,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: Colors.white,

  },
  imageContainer: {
    width: 110,
    padding: 5,
  },
  box2: {
    flex: 1,
    borderLeftWidth: 2, // Sets the right border width
    borderLeftColor: Colors.light_grey_200,
  },
  deleteContainer: {
    width: 40,
   // alignItems: 'center',
    justifyContent: 'center',
    height: 120,
  },
  image: {
    height: 120,
    resizeMode: 'contain',
   // borderRadius: 20,
  },
    title: {
        fontSize: 17,
        fontWeight: '500',
        fontFamily: fonts.monster_art,
        color: '#444444',
        marginTop: 10,
        marginStart: 10,
    },
    stockText: {
        fontSize: 14,
        fontFamily: fonts.monster_art,
        color: Colors.red,
        marginTop: 5,
        marginStart: 10,
    },
    currencyText: {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: fonts.monster_art,
        color: Colors.red,
        marginTop: 10,
        marginStart: 5,
    },
    priceText: {
        fontSize: 18,
        fontWeight: 600,
        fontFamily: fonts.monster_art,
        color: Colors.red,
        marginTop: 5,
        marginStart: 5,
    },
    likeContainer: {
        flexDirection: 'row',
        marginStart: 10,
        marginTop: 5,
    },
    likeText: {
        fontSize: 14,
        fontFamily: fonts.monster_art,
        color: Colors.grey,
    },
});
