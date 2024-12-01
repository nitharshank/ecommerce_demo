import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import {Constant} from '../utils/constant';
import Tags from '../components/Tags';
import {fetchProducts} from '../api/api-service';
import {fetchUsersSuccess} from '../context/action/actions';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const products = useSelector(state => state.items);

    useEffect(() => {
        const fetchProductList = async () => {
           // dispatch(fetchUsersBegin());
            fetchProducts(dataSuccess, dataError);
        };

        const dataSuccess = (response) => {
           // setProducts(response);
            dispatch(fetchUsersSuccess(response));
        };

        const dataError = (error) => {
            // TODO show error
        };

        fetchProductList();
    }, [dispatch]);

    const handleProductDetails = (item) => {
        navigation.navigate('DETAILS_SCREEN', { item });
    };
    const toggleFavorite = (item) => {
        dispatch(fetchUsersSuccess( products.map((prod) => {
            if (prod.id === item.id) {
                console.log('prod: ', prod);
                return {
                    ...prod,
                    isFavorite: !prod.isFavorite,
                };
            }
            return prod;
        })));
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
