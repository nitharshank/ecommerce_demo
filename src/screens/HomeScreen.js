import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ProductCard from '../components/ProductCard';
import data_aws from '../data/data_aws.json';
import { useNavigation } from '@react-navigation/native';
import {Constant} from '../utils/constant';
import Tags from '../components/Tags';

const HomeScreen = () => {
    const [products, setProducts] = useState(data_aws.data);
    const navigation = useNavigation();
    const handleProductDetails = (item) => {
        navigation.navigate('DETAILS_SCREEN', { item });
    };
    const toggleFavorite = (item) => {
        setProducts(
            products.map((prod) => {
                if (prod.id === item.id) {
                    console.log('prod: ', prod);
                    return {
                        ...prod,
                        isFavorite: !prod.isFavorite,
                    };
                }
                return prod;
            })
        );
    };

    return (
        <LinearGradient colors={['#FDF0F3', '#ffcccc']} style={styles.container}>
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.headingText}>Match Your Style</Text>
                    <View style={styles.inputContainer}>
                        <Image
                            source={require('../assets/search.png')}
                            style={styles.searchIcon}
                        />
                        <TextInput placeholder="Search" style={styles.textInput} />
                    </View>
                </View>
                <Tags />
            <FlatList
                data={products}
                numColumns={3}
                renderItem={({ item }) => (
                    <ProductCard
                        item={item}
                        handleProductClick={handleProductDetails}
                        toggleFavorite={toggleFavorite}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
            />
            </View>
        </LinearGradient>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
      //  alignItems: 'center',
    },
    innerContainer: {
        paddingStart: 10,
    },
    headingText: {
        marginTop: 20,
        fontSize: 22,
        color: '#000000',
        marginVertical: 10,
        fontFamily: 'monster_art',
    },
    inputContainer: {
        width: Constant.SCREEN_WIDTH - 20,
        paddingEnd: 5,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        height: 40,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
    },
    searchIcon: {
        height: 20,
        width: 20,
        marginHorizontal: 12,
    },
    textInput: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
});
