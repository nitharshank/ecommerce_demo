import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CartCard from '../components/CartCard';
import { fonts } from '../utils/Fonts';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Constant} from '../utils/Constant';
import {fetchCartItems} from '../context/action/actions';

const CartScreen = () => {
    const cartItems = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        if (cartItems.length !== 0) {
           const amount = cartItems.reduce((sum, product) => sum + parseFloat(product.price.amount), 0);
           setTotalAmount(amount);
        }
    }, [cartItems]);

    const handleDeleteItem = async (id) => {
        const updatedData = cartItems.filter(item => item.id !== id);
        dispatch(fetchCartItems(updatedData));
    };

    return (
        <LinearGradient colors={['#FDF0F3', '#ffcccc']} style={styles.container}>
                <View style={styles.itemContainer} >
                    <FlatList
                        data={cartItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <CartCard item={item} handleDelete={handleDeleteItem} />
                        )}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
                    />
                </View>

            {cartItems.length > 0 ?
                <View style={styles.totalContainer} >
                    <View style={styles.bottomContentContainer}>
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Total:</Text>
                            <Text style={styles.priceText}>
                                {cartItems[0].price.currency} {totalAmount.toFixed(2)}
                            </Text>
                        </View>
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Shpping:</Text>
                            <Text style={styles.priceText}>{cartItems[0].price.currency} 0.00</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.flexRowContainer}>
                            <Text style={styles.titleText}>Grand Total:</Text>
                            <Text style={[styles.priceText, styles.grandPriceText]}>
                                {cartItems[0].price.currency} {totalAmount.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name={'cart-outline'} size={25} color={Colors.white} />
                        <Text style={styles.buttonText}> Checkout</Text>
                    </TouchableOpacity>
                </View> : null}
        </LinearGradient>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'column',
        marginHorizontal: 10,
    },
    itemContainer: {
        height: Constant.SCREEN_HEIGHT - 350,
    },
    totalContainer: {
        height: 300,
    },
    bottomContentContainer: {
        marginHorizontal: 10,
        marginTop: 30,
    },
    flexRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    titleText: {
        fontSize: 18,
        color: Colors.grey,
        fontFamily: fonts.monster_art,
    },
    priceText: {
        fontSize: 16,
        color: Colors.grey,
        fontFamily: fonts.monster_art,
    },
    divider: {
        borderWidth: 1,
        borderColor: Colors.grey,
        marginTop: 10,
        marginBottom: 5,
    },
    grandPriceText: {
        fontSize: 18,
        color: Colors.grey,
        fontWeight: '600',
        fontFamily: fonts.monster_art,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: Colors.light_red_100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 20,
        color: Colors.white,
        fontFamily: fonts.monster_art,
    },
});

