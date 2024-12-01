import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../utils/fonts';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Constant} from '../utils/constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCartItems} from '../context/action/actions';
import Colors from '../utils/Colors';

const DetailsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const product = route.params.item;
    const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
    const products = useSelector(state => state.cartItems);
   // const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        let isExist = products.findIndex((cart) => cart.id === product.id);
        if (isExist === -1) {
            const cartItem = {
                ...product,
                size: selectedSize,
            };
           // product.size = selectedSize;
            products.push(cartItem);
            dispatch(fetchCartItems(products));
        }
        navigation.goBack();
        navigation.navigate('Cart');
    };
    return (
        <ScrollView>
        <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.mainImage }} style={styles.coverImage} />
            </View>
            <View style={styles.inStockContainer}>
                <Text style={styles.inStockText}>{product.stockStatus}</Text>
            </View>
            <View style={styles.likeContainer}>
                <Ionicons name = {'heart'} size={15} color={'red'}/>
                <Text style={styles.likeText}> 5.8K+</Text>
            </View>
            <View style={styles.brandContainer}>
                <Text style={styles.brandText}>{product.brandName}</Text>
                <View style={styles.colorContainer}>
                    <View style={styles.borderColorCircle} >
                        <View style={[styles.colorCircle, { backgroundColor: route.params.item.colour }]} />
                    </View>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.fontText, {width: '65%'}]} numberOfLines={1}>{product.name}</Text>
                    <View style={[{flexDirection: 'row'}]}>
                        <Text style={styles.currencyText}>{product.price.currency} </Text>
                        <Text style={styles.amountText}>{product.price.amount}</Text>
                    </View>
                </View>
                <Text style={styles.descriptionText} numberOfLines={5}>{product.description}</Text>
                <Text style={[styles.fontText, styles.sizeText]}>Shoe Size</Text>
                <View style={styles.sizeContainer}>
                    {product.sizes.map((size) => (
                        <TouchableOpacity
                            key={size}
                            style={styles.sizeValueContainer}
                            onPress={() => setSelectedSize(size)}
                        >
                            <Text style={[
                                    styles.sizeValueText,
                                    selectedSize === size && styles.selectedText,
                                ]} > {size} </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                        <Ionicons name={'cart'} size={25} color={'white'} />
                        <Text style={styles.buttonText}>  Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
        </ScrollView>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        height: Constant.SCREEN_HEIGHT / 3,
        width: '100%',
    },
    likeContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignContent: 'center',
        padding: 4,
        paddingHorizontal: 10,
        backgroundColor: Colors.light_grey_200,
        borderRadius: 20,
        right: 15,
        top: 15,
    },
    inStockContainer: {
        position: 'absolute',
        alignContent: 'center',
        padding: 4,
        paddingHorizontal: 10,
        right: 100,
        top: 15,
    },
    brandContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignContent: 'center',
        padding: 4,
        paddingHorizontal: 10,
        left: 10,
        top: Constant.SCREEN_HEIGHT / 3 - 35,
    },
    coverImage: {
        resizeMode: 'cover',
        flex: 1,
    },
    contentContainer: {
        padding: 20,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inStockText: {
        fontSize: 14,
        fontFamily: fonts.monster_art,
        color: 'red',
    },
    likeText: {
        fontSize: 14,
        fontFamily: fonts.monster_art,
        color: Colors.grey,
    },
    brandText: {
        fontSize: 18,
        fontFamily: fonts.monster_art,
        color: Colors.grey,
    },
    fontText: {
        fontSize: 18,
        fontFamily: fonts.monster_art,
        fontWeight: '500',
        color: Colors.grey,
    },
    amountText: {
        fontSize: 22,
        fontFamily: fonts.monster_art,
        fontWeight: '600',
        color: 'red',
    },
    currencyText: {
        fontSize: 14,
        marginTop: 6,
        fontFamily: fonts.monster_art,
        textAlignVertical: 'bottom',
        color: 'red',
    },
    descriptionText: {
        marginTop: 10,
        fontSize: 14,
        fontFamily: fonts.monster_art,
        color: Colors.grey,
    },
    sizeText: {
        marginTop: 20,
    },
    sizeContainer: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 5,
    },
    sizeValueContainer: {
        backgroundColor: Colors.white,
        height: 40,
        width: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 12,
        borderColor: Colors.grey,
        borderWidth: 1,
    },
    sizeValueText: {
        fontSize: 17,
        fontFamily: fonts.monster_art,
        fontWeight: '500',
    },
    selectedText: {
        color: Colors.red,
    },
    colorContainer: {
        flexDirection: 'row',
    },
    borderColorCircle: {
        height: 20,
        width: 20,
        padding: 1,
        marginHorizontal: 10,
        backgroundColor: Colors.black,
        borderRadius: 10,
    },
    colorCircle: {
        flex: 1,
        borderRadius: 23,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: Colors.red,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: Colors.white,
        fontFamily: fonts.monster_art,
    },
});
